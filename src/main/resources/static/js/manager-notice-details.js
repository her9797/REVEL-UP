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

// $(document).ready(function() {
//     $('.manager_table tr').click(function() {
//         var id = $(this).find('td:nth-child(1)').text();  // 공지사항 ID
//
//         $.ajax({
//             url: '/manager-notice-details' ,  // 서버로 보낼 요청 URL
//             type: 'Get',  // HTTP 요청 방식
//             dataType: 'json',  // 서버에서 보내줄 데이터의 타입
//             success: function(response) {  // 요청 성공시 실행할 함수
//                 // 공지 제목, 작성일, 내용을 모달창에 설정합니다.
//                 $('#text-block').text(response.title);
//                 $('#notice-modal .notice-header .text-box:nth-child(1)').text(response.date);
//                 $('#notice-modal .contents .text').text(response.contents);
//
//                 // 모달창을 열어줍니다.
//                 $('#notice-modal').show();
//             },
//             error: function(request, status, error) {  // 요청 실패시 실행할 함수
//                 console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
//             }
//         });
//
//         $('#close-btn').click(function () {
//             $('#notice-modal').hide();
//         });
//     });
// });




$(document).ready(function() {
    $('.manager_table .notice-title').click(function() {
        var ntcTitle = $(this).data('notice-title');

        $.ajax({
            url: '/manager/notice-details/' + ntcTitle,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                $('#text-block').text(response.ntcTitle);
                $('#notice-modal .notice-header .text-box:nth-child(1)').text(response.ntcInsertDt);
                $('#notice-modal .contents .text').text(response.ntcCont);
                $('#notice-modal').modal('show');
            },
            error: function(request, status, error) {
                console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    });

    $('#close-btn').click(function () {
        $('#notice-modal').modal('hide');
    });
});