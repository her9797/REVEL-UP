// 페이지의 로드가 완료된 후에 실행될 함수 정의
window.onload = function() {
    // 신규등록 버튼 클릭 시 모달 표시
    document.getElementById('insert-btn').addEventListener('click', function() {
        // 모달 엘리먼트 가져오기
        var modal = document.getElementById('insert-modal');
        // 모달 보이도록 스타일 변경
        modal.style.display = 'block';
    });

    // 모달 닫기 버튼 클릭 시 모달 숨기기
    document.getElementById('close-insert-btn').addEventListener('click', function() {
        // 모달 엘리먼트 가져오기
        var modal = document.getElementById('insert-modal');
        // 모달 숨기도록 스타일 변경
        modal.style.display = 'none';
    });

    // 현재 시간 표시
    displayCurrentTime();
};

// 현재 시간을 가져와서 HTML에 추가하는 함수
function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 현재 시간을 hh:mm:ss 형식으로 표시
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // HTML 요소에 현재 시간 추가
    document.getElementById("current-time-value").textContent = formattedTime;
}
