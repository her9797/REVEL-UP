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




// 모달 열기 함수
function openModal(title) {
    // 모달을 먼저 표시합니다.
    var modal = new bootstrap.Modal(document.getElementById('notice-modal'));
    modal.show();

    // 클릭된 공지 제목에 해당하는 내용을 가져와서 모달에 표시합니다.
    var content = getContentByTitle(title);
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
}

// 공지 제목에 해당하는 내용 가져오기 (가정)
function getContentByTitle(title) {
    // 여기서는 noticeList 배열에서 제목에 해당하는 내용을 찾아서 반환합니다.
    // 실제로는 서버에서 데이터를 가져오는 방식에 따라 코드를 변경해야 합니다.
    for (var i = 0; i < noticeList.length; i++) {
        if (noticeList[i].ntcTitle === title) {
            return noticeList[i].ntcCont;
        }
    }
    return ''; // 해당하는 내용이 없으면 빈 문자열을 반환합니다.
}

function openNoticeModal(title, content, date) {
    // 모달에 제목, 내용, 작성일을 설정
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
    document.getElementById('modal-date').textContent = date;

    // 모달을 보이도록 설정
    $('#notice-modal').modal('show');
}
