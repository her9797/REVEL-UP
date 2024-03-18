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
