// 페이지 로드시 실행되는 함수
window.onload = function() {
    // 종료된 펀딩 목록을 가져와서 자동으로 'E'로 변경하는 함수 호출
    updateFinishedFundingStatus();
};

// 종료된 펀딩의 상태를 업데이트하는 함수
function updateFinishedFundingStatus() {
    // 종료된 펀딩의 요소들을 가져옴
    var finishedFundings = document.querySelectorAll('.image-box');

    // 각 펀딩에 대해 반복하여 처리
    finishedFundings.forEach(function(funding) {
        // 마감일 가져오기
        var endDate = new Date(funding.querySelector('a#end-date').textContent);
        var currentDate = new Date();

        // 현재 날짜가 마감일보다 크다면 'E'로 변경
        if (currentDate > endDate) {
            // AJAX 요청을 통해 서버에 업데이트 요청
            var fndCode = funding.getAttribute('data-fndCode'); // 펀딩 코드 가져오기
            updateFundingStatusToE(fndCode);
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