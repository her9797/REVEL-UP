$(document).ready(function(){
    $("#insert-confirm-btn").click(function(e){
        e.preventDefault(); // 기본 이벤트를 중단시켜 페이지 리프레시되는 것을 방지합니다.

        var title = $("#insert-title").val();
        var date = $("#insert-date").val();
        var content = $("#insert-content").val();

        // 입력한 데이터를 서버에 전송합니다.
        $.ajax({
            type: "POST",
            url: "/manager/manager-insert-notice",
            data: {
                ntcTitle: title,
                ntcInsertDt: date,
                ntcCont: content
            },
            success: function(response) {
                alert("공지사항 등록에 성공하였습니다.");
                // 모달 창 닫기
                $("#close-insert-btn").trigger('click');
            },
            error: function(error) {
                alert("공지사항 등록에 실패하였습니다. 다시 시도해주세요.");
            }
        });
    });
});