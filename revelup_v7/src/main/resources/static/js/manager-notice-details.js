

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