// 페이지의 로드가 완료된 후에 실행될 함수 정의
window.onload = function() {
    // 현재 시간 표시
    displayCurrentTime();
    // 여기에 기존의 코드를 추가해주세요
};

// 현재 시간을 가져와서 HTML에 추가하는 함수
function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 시, 분, 초가 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 표시
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // 현재 시간을 hh:mm:ss 형식으로 표시
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // HTML 요소에 현재 시간 추가
    document.getElementById("current-time-value").textContent = formattedTime;
}

// 모달 열기 함수
function openInquiryModal(button) {
    var fndCode = button.getAttribute('data-fndCode');
    var userId = button.getAttribute('data-userId');
    document.getElementById('insert-fndCode').value = fndCode;
    document.getElementById('insert-userId').value = userId;
    // 현재 날짜 설정
    var currentDate = new Date().toISOString().slice(0, 10);
    document.getElementById('insert-dateTime').value = currentDate;
    document.getElementById('inquiry-modal').style.display = 'block';
}

// 모달 닫기 함수
function closeModal() {
    document.getElementById('inquiry-modal').style.display = 'none';
}

// 등록하기 버튼 클릭 시 등록 처리 함수
function submitInquiry() {
    var fndCode = document.getElementById('insert-fndCode').value;
    var userId = document.getElementById('insert-userId').value;
    var inqTitle = document.getElementById('insert-title').value;
    var inqCont = document.getElementById('insert-content').value;
    var formData = new FormData();
    formData.append('fndCode', fndCode);
    formData.append('userId', userId);
    formData.append('inqTitle', inqTitle);
    formData.append('inqCont', inqCont);
    // AJAX를 사용하여 데이터 전송
    $.ajax({
        type: 'POST',
        url: '/content/mypage/insertInq',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            // 성공 시 추가 동작 수행
        },
        error: function(error) {
            console.error(error);
            // 실패 시 추가 동작 수행
        }
    });
}