// 9차
function deleteFnd(fndCode) {
    console.log("fndCode4 : " + fndCode);

    $.ajax({
        url: `/content/mypage/delete/` + fndCode,
        method: 'POST',
        data: { fndCode : fndCode},
        success: function(data) {
            console.log(data); // 서버로부터의 응답을 콘솔에 출력
            location.reload();
            closeModal();

            // 페이지 새로고침 없이 해당 펀딩 삭제 후 목록 갱신
            // 여기에서 페이지 갱신이 필요한 경우 갱신 로직을 추가할 수 있습니다.
        },
        error: function(xhr, status, error) {
            console.error(error); // 에러 메시지 콘솔에 출력
            alert('삭제 중 오류가 발생했습니다.');
        }
    });
}

function openModal(button) {
    const imageBox = $(button).closest('.image-box');
    const successAmt = parseInt(imageBox.find('#successAmt').text().replace('달성액 : ', '').replace('원', '').trim());

    console.log("successAmt : " + successAmt);
    if (successAmt > 0) {
        alert('달성액이 있는 펀딩은 삭제할 수 없습니다.');
    } else {
        const fndCode = $(button).siblings('.detail-btn').attr('href').split('/').pop();
        console.log("fndCode1 : " + fndCode);

        $('#deleteModal').show();
        $('#confirmDelete').attr('data-fndCode', fndCode);
        console.log("fndCode2 : " + fndCode);
    }
}

function closeModal() {
    $('#deleteModal').hide();
}

$(document).ready(function() {
    $('#confirmDelete').click(function() {
        const fndCode = $(this).attr('data-fndCode');
        console.log("fndCode3 : " + fndCode);
        deleteFnd(fndCode);
    });

    $('#cancelDelete').click(function() {
        closeModal();
    });
});


// 페이지 로드시 실행되는 함수
$(document).ready(function() {
    updateFundingStatus(); // 페이지 로드 시 호출하여 초기 상태 업데이트

    $('#confirmDelete').click(function() {
        const fndCode = $(this).attr('data-fndCode');
        deleteFnd(fndCode);
    });

    $('#cancelDelete').click(function() {
        closeModal();
    });
});

function updateFundingStatus() {
    $.ajax({
        type: "GET",
        url: "/content/mypage/finishList",
        success: function(response) {
            response.forEach(function(funding) {
                // 마감일이 현재일보다 큰 경우 상태를 'E'로 업데이트
                if (funding.fndEndDt > getCurrentDate()) {
                    updateFundingStatusToE(funding.fndCode);
                }
            });
        },
        error: function(error) {
            console.error("마감일이 지난 펀딩 목록을 가져오는 중 오류가 발생했습니다.");
        }
    });
}

function getCurrentDate() {
    // 현재 날짜를 YYYY-MM-DD 형식으로 반환
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateFundingStatusToE(fndCode) {
    $.ajax({
        type: "POST",
        url: "/content/mypage/update-funding-status",
        data: {
            fndCode: fndCode
        },
        success: function(response) {
            console.log("펀딩 상태가 'E'(종료)로 업데이트되었습니다.");
        },
        error: function(error) {
            console.error("펀딩 상태 업데이트 중 오류가 발생했습니다.");
        }
    });
}

