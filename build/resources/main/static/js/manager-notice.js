// $(document).ready(function() {
//     // 공지사항 테이블의 각 행을 클릭하면 해당 행의 내용을 보여주는 모달창을 열어줍니다.
//     $('.manager_table tr').click(function() {
//         var title = $(this).find('td:nth-child(2)').text();  // 공지 제목
//         var date = $(this).find('td:nth-child(3)').text();  // 공지 작성일
//         var contents = $(this).find('td:nth-child(4)').text();  // 공지 내용
//
//         // 공지 제목, 작성일, 내용을 모달창에 설정합니다.
//         $('#text-block').text(title);
//         $('#notice-modal .notice-header .text-box:nth-child(1)').text(date);
//         $('#notice-modal .contents .text').text(contents);
//
//         // 모달창을 열어줍니다.
//         $('#notice-modal').show();
//         // $('#notice-modal').removeClass('display-none');
//
//
//         $('#close-btn').click(function () {
//             $('#notice.modal').hide();
//         });
//
//     });

$(document).ready(function() {
    $('.manager_table tr').click(function() {
        var id = $(this).find('td:nth-child(1)').text();  // 공지사항 ID

        $.ajax({
            url: '/manager-notice' ,  // 서버로 보낼 요청 URL
            type: 'Get',  // HTTP 요청 방식
            dataType: 'json',  // 서버에서 보내줄 데이터의 타입
            success: function(response) {  // 요청 성공시 실행할 함수
                // 공지 제목, 작성일, 내용을 모달창에 설정합니다.
                $('#text-block').text(response.title);
                $('#notice-modal .notice-header .text-box:nth-child(1)').text(response.date);
                $('#notice-modal .contents .text').text(response.contents);

                // 모달창을 열어줍니다.
                $('#notice-modal').show();
            },
            error: function(request, status, error) {  // 요청 실패시 실행할 함수
                console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });

        $('#close-btn').click(function () {
            $('#notice-modal').hide();
        });
    });
});


    // '신규등록' 버튼을 클릭하면 신규 등록을 위한 모달창을 열어줍니다.
    $('#insert-btn').click(function() {
        $('#insertModal').hide();
    });




// $(document).ready(function() {
//     // 공지사항 테이블의 각 행을 클릭하면 해당 행의 내용을 보여주는 모달창을 열어줍니다.
//     $('.manager_table tr').click(function() {
//         var title = $(this).find('td:nth-child(2)').text();  // 공지 제목
//         var date = $(this).find('td:nth-child(3)').text();  // 공지 작성일
//
//         // 공지 제목과 작성일을 모달창에 설정합니다.
//         $('#text-block').text(title);
//         $('#notice-modal .text-box').text(date);
//
//         // 모달창을 열어줍니다.
//         $('#notice-modal').modal('show');
//     });
//
//     // '신규등록' 버튼을 클릭하면 신규 등록을 위한 모달창을 열어줍니다.
//     $('#insert-btn').click(function() {
//         $('#insertModal').modal('show');
//     });
// });


// function selectOneNoticeList(ntcCode) {
//     $.ajax({
//         url: '/manager-notice/' + ntcCode,
//         type: 'GET',
//         success: function(data) {
//             // 'data'는 서버에서 응답으로 받은 데이터입니다.
//             // 이를 이용하여 원하는 작업을 수행하세요.
//             // 예를 들어, 공지사항을 모달 창에 표시하는 등의 작업이 있을 수 있습니다.
//         },
//         error: function(error) {
//             // 에러가 발생했을 때의 처리를 작성합니다.
//             console.log(error);
//         }
//     });
// }