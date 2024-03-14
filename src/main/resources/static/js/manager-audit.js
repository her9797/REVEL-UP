// 모달 열기 함수
function openModal(eventTarget) {
    const fndCode = eventTarget.innerHTML;

    console.log(fndCode);

    $.ajax({

        url: "/manager/auditDetails/" + fndCode,
        type: "GET",
        dataType: "json", // 응답 데이터 형식은 JSON
        data:
            {fndCode: fndCode},
        success: function(response) {
            // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
            console.log("zzzzzzzzzzz"+fndCode);
            $('#ntcTitle').text(response.fndCode); // 제목 설정
            $('#modal-date2').text(response.fndInsertDttm); // 작성날짜 설정
            console.log(fndCode);
            // 모달 창 열기
            $('#audit-modal').modal('show');

            // 삭제 및 수정 버튼에 해당 공지사항의 코드 저장
            $('#delete-btn').data('ntc-code', fndCode);
            $('#update-btn2').data('fndCode', fndCode);
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
    $('#update-btn2').on('click', function() {
        var fndCode = $(this).data('fndCode'); // 수정할 공지사항의 코드 가져오기
        updateAudit(fndCode);
        console.log(fndCode)
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
function updateAudit(fndCode) {
    var auditStat = $('#auditStat').val();

    console.log(fndCode)

    $.ajax({
        url: '/manager/updateAudit', // 포스트매핑으로 요청을 처리할 URL
        type: 'POST',
        data: {
            // 요청에 필요한 데이터 추가
            fndCode : fndCode,
            auditStat: auditStat
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
