// 페이지의 로드가 완료된 후에 실행될 함수 정의
window.onload = function() {
    // 신규등록 버튼 클릭 시 모달 표시
    document.getElementById('insert-btn').addEventListener('click', function() {
        // 모달 엘리먼트 가져오기
        var modal = document.getElementById('insert-modal');
        // 모달 보이도록 스타일 변경
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
        data:
            {ntcCode: ntcCode},
        success: function(response) {
            // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
            console.log("zzzzzzzzzzz"+ntcCode);
            $('#ntcTitle').text(response.ntcTitle); // 제목 설정
            $('#modal-date2').text(response.ntcInsertDt); // 작성날짜 설정
            $('#ntcCont').text(response.ntcCont); // 내용 설정
            console.log(ntcCode);
            // 모달 창 열기
            $('#notice-modal').modal('show');

            // 삭제 및 수정 버튼에 해당 공지사항의 코드 저장
            $('#delete-btn').data('ntc-code', ntcCode);
            $('#update-btn').data('ntc-code', ntcCode);
        },
        error: function(xhr, status, error) {
            // 오류 처리 로직
            console.error(error);
        }
    });

    // 삭제 버튼 클릭 시 해당 공지사항 삭제
    $('#delete-btn').on('click', function() {
        var ntcCode = $(this).data('ntc-code'); // 삭제할 공지사항의 코드 가져오기
        deleteNotice(ntcCode);
        // 모달 닫기
        $('#notice-modal').modal('hide');
    });

    // 수정 버튼 클릭 시 해당 공지사항 수정
    $('#update-btn').on('click', function() {
        var ntcCode = $(this).data('ntc-code'); // 수정할 공지사항의 코드 가져오기
        updateNotice(ntcCode);
        // 모달 닫기
        $('#notice-modal').modal('hide');
    });
}

// 공지사항 삭제 함수
function deleteNotice(ntcCode) {
    // AJAX를 사용하여 서버에 POST 요청 보내기
    $.ajax({
        url: '/manager/delete/' + ntcCode, // 포스트매핑으로 요청을 처리할 URL
        type: 'POST',
        data: {
            // 요청에 필요한 데이터 추가
            // 예시로 공지 코드를 전달한다고 가정하고, ntcCode 변수에 해당하는 값을 전달
            ntcCode: ntcCode
        },
        success: function(response) {
            // 성공적으로 서버 요청이 처리된 경우 실행할 코드 작성
            console.log('삭제 요청이 성공적으로 처리되었습니다.');
            location.reload(); // 페이지 리로드
        },
        error: function(xhr, status, error) {
            // 서버 요청 처리 중 오류가 발생한 경우 실행할 코드 작성
            console.error('삭제 요청 중 오류가 발생하였습니다.');
        }
    });
}

// 공지사항 수정 함수
function updateNotice(ntcCode) {
    var ntcTitle = $('#ntcTitle').val();
    var ntcCont = $('#ntcCont').val();

    $.ajax({
        url: '/manager/update', // 포스트매핑으로 요청을 처리할 URL
        type: 'POST',
        data: {
            // 요청에 필요한 데이터 추가
            // 예시로 공지 코드를 전달한다고 가정하고, ntcCode 변수에 해당하는 값을 전달
            ntcCode: ntcCode,
            ntcTitle: ntcTitle,
            ntcCont: ntcCont
        },
        success: function(response) {
            // 성공적으로 서버 요청이 처리된 경우 실행할 코드 작성
            console.log('수정 요청이 성공적으로 처리되었습니다.');
            location.reload(); // 페이지 리로드
        },
        error: function(xhr, status, error) {
            // 서버 요청 처리 중 오류가 발생한 경우 실행할 코드 작성
            console.error('수정 요청 중 오류가 발생하였습니다.');
        }
    });
}
