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
window.onload = function() {
    // 펀딩 목록을 가져와서 자동으로 'E'로 변경하는 함수 호출
    updateFundingStatus();
};

// 펀딩의 상태를 업데이트하는 함수
function updateFundingStatus() {
    // AJAX를 통해 서버에서 마감일이 지난 펀딩 목록을 가져옴
    $.ajax({
        type: "GET",
        url: "/content/mypage/finishList",
        success: function(response) {
            // 가져온 펀딩 목록을 이용하여 상태를 'E'로 업데이트
            response.forEach(function(funding) {
                updateFundingStatusToE(funding.fndCode);
            });
        },
        error: function(error) {
            console.error("마감일이 지난 펀딩 목록을 가져오는 중 오류가 발생했습니다.");
        }
    });
}

// 펀딩 상태를 'E'로 업데이트하는 함수
function updateFundingStatusToE(fndCode) {
    // AJAX를 사용하여 서버에 업데이트 요청을 보냄
    $.ajax({
        type: "POST",
        url: "/update-funding-status",
        data: {
            fndCode: fndCode,
            status: 'E' // 종료 상태를 나타내는 'E'
        },
        success: function(response) {
            // 성공 시 콘솔에 로그를 출력
            console.log("펀딩 상태가 'E'(종료)로 업데이트되었습니다.");
        },
        error: function(error) {
            // 오류 시 콘솔에 로그를 출력
            console.error("펀딩 상태 업데이트 중 오류가 발생했습니다.");
        }
    });
}



// 결제 완료 시 자동으로 달성액 누적 함수
function accumulateSuccessAmt(fndCode, successAmt) {
    $.ajax({
        type: "POST",
        url: `/content/mypage/accumulateSuccessAmt/${fndCode}`,
        data: {
            successAmt: successAmt
        },
        success: function(response) {
            console.log("달성액이 자동으로 누적되었습니다.");
        },
        error: function(error) {
            console.error("달성액 자동 누적 중 오류가 발생했습니다.");
        }
    });
}

// 페이지 로드 시 실행되는 함수
$(document).ready(function() {
    // 결제가 완료되었을 때의 예시 (이 부분을 실제 결제 완료 시 호출되는 함수로 대체해야 합니다.)
    // 여기서는 달성액 누적을 시뮬레이션하기 위해 setTimeout 함수를 사용합니다.
    setTimeout(function() {
        var fndCode = 17; // 결제가 완료된 펀딩의 코드 (실제로는 결제된 펀딩의 코드를 사용해야 합니다.)
        var successAmt = 50000; // 결제된 금액 (실제로는 결제된 금액을 가져와야 합니다.)
        accumulateSuccessAmt(fndCode, successAmt);
    }, 5000); // 예시로 5초 후에 결제가 완료되었다고 가정합니다.
});