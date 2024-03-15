$('#audit-modal').on('show.bs.modal', function() {
    var modal = $(this);

    // 삭제 버튼 클릭 시
    $('#delete-btn').off('click').on('click', function() {
        var ntcCode = $(this).data('ntc-code');
        deleteNotice(ntcCode);
        modal.modal('hide');
    });

    // 수정 버튼 클릭 시
    $('#update-btn2').off('click').on('click', function() {
        var fndCode = $(this).data('fndCode');
        updateAudit(fndCode);
        modal.modal('hide');
    });
});

function openModal1(eventTarget) {
    const fndCode = eventTarget.innerHTML;

    $.ajax({
        url: "/manager/auditDetails/" + fndCode,
        type: "GET",
        dataType: "json",
        data: { fndCode: fndCode },
        success: function(response) {
            $('#fndCode').text(response.fndCode);
            $('#fndInsertDttm').text(response.fndInsertDttm);
            $('#auditStat').val(response.auditStat);
            $('#audit-modal').modal('show');

            // 삭제 및 수정 버튼에 해당 공지사항의 코드 저장
            $('#delete-btn').data('ntc-code', fndCode);
            $('#update-btn2').data('fndCode', fndCode); // 수정 버튼의 코드 업데이트
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });

    // 수정 버튼 클릭 시 이벤트 바인딩
    $('#update-btn2').off('click').on('click', function() {
        var fndCode = $(this).data('fndCode');
        updateAudit(fndCode);
        modal.modal('hide');
    });
}


function updateAudit(fndCode) {
    var auditStat = $('#auditStat').val();

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