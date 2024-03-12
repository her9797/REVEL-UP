$(document).ready(function() {
    // 인증번호 전송 버튼 클릭 시
    $("#sendEmail").click(function(){
        var email = $('#userEmail').val(); // 변경: #email -> #userEmail
        // 이메일 형식 검사
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            // 이메일 입력 필요 모달 띄우기
            $('#emailModal').modal('show');
        } else if (!emailRegex.test(email)) {
            // 이메일 형식이 아닌 경우
            $('#emailFormatErrorModal').modal('show');
        } else {
            // 인증번호 전송 로직 추가
            // 전송 완료 모달 띄우기
            $('#myModal').modal('show');

            // 전송 완료 후 재전송 버튼으로 변경
            $("#sendEmail").hide(); // 전송 버튼 숨기기
            $("#resendEmail").show(); // 재전송 버튼 보이기
        }
    });

    // 이메일 재전송 버튼 클릭 시
    $("#resendEmail").click(function(){
        // 인증번호 재전송 로직 추가

        // 재전송이 완료되었음을 알리는 모달 띄우기
        $('#resendEmailModal').modal('show');
    });

    // 이메일 입력 필요 모달 닫기 버튼 클릭 시
    $("#emailModal .close, #emailModal button.close").click(function(){
        // 모달 숨기기
        $('#emailModal').modal('hide');
    });

    // 이메일 전송 완료 모달 닫기 버튼 클릭 시
    $("#myModal .close, #myModal button.close").click(function(){
        // 모달 숨기기
        $('#myModal').modal('hide');
    });
});

