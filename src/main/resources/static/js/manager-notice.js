// 페이지의 로드가 완료된 후에 실행될 함수 정의
window.onload = function() {
    // 신규등록 버튼 클릭 시 모달 표시
    document.getElementById('insert-btn').addEventListener('click', function() {
        // 모달 엘리먼트 가져오기
        var modal = document.getElementById('insert-modal');
        // 모달 보이도록 스타일 변경
        modal.style.display = 'block'; // 이 스타일 변경은 부트스트랩을 사용하지 않을 때만 필요하므로, 부트스트랩을 사용한다면 이 줄은 삭제하세요.
    });

    // 모달 닫기 버튼 클릭 시 모달 숨기기
    document.getElementById('close-insert-btn').addEventListener('click', function() {
        // 모달 엘리먼트 가져오기
        var modal = document.getElementById('insert-modal');
        // 모달 숨기도록 스타일 변경
        modal.style.display = 'none'; // 이 스타일 변경은 부트스트랩을 사용하지 않을 때만 필요하므로, 부트스트랩을 사용한다면 이 줄은 삭제하세요.
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

// 모달 열기 함수
function openModal(eventTarget) {
    const ntcCode = eventTarget.innerHTML;

    console.log(ntcCode);
    // AJAX를 사용하여 해당 공지사항의 상세 정보를 요청
    $.ajax({
        url: "/manager/manager-notice/" + ntcCode,
        type: "GET",
        dataType: "json", // 응답 데이터 형식은 JSON
        success: function(response) {
            // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
            $('#modal-title2').text(response.ntcTitle); // 제목 설정
            $('#modal-date2').text(response.ntcInsertDt); // 작성날짜 설정
            $('#modal-content2').text(response.ntcCont); // 내용 설정

            // 모달 창 열기
            $('#notice-modal').modal('show');
        },
        error: function(xhr, status, error) {
            // 오류 처리 로직
            console.error(error);
        }
    });
}