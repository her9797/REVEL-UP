$(document).ready(function() {
    // 이메일 유효성 검사를 위한 정규식
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // 인증번호 요청 버튼 클릭 시 모달 창 열기
    $('#sendEmail').on('click', function() {
        var email = $('#userEmail').val();

        // 이메일 유효성 검사
        if (!emailPattern.test(email)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return; // 함수 종료
        }

        $.get("/content/user/sendMail?email=" + email, function (data, status){
            emailCode = data;

            if (email === '') {
                $('#emailModal .modal-text h5').text("💥발송 실패💥");
                $('#emailModal .modal-text p').text("이메일을 입력해주세요");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            } else {
                $('#emailModal .modal-text h5').text("✨인증번호 발송✨");
                $('#emailModal .modal-text p').text("입력하신 이메일로 인증번호를 발송하였습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            }
        });
    });

    // 이메일 입력란에서 포커스 아웃(탭 이동 등) 시 유효성 검사
    $('#userEmail').on('blur', function() {
        var email = $(this).val();
        if (!emailPattern.test(email)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
        }
    });

    $('#checkEmailBtn').on('click', function () {
        if ($('#authCode').val() === '') { // 입력된 인증 코드와 비교, 빈 문자열도 인증 성공으로 떠서 &&'' 추가하였음.
            $('#emailModal .modal-text h5').text("❌미입력❌");
            $('#emailModal .modal-text p').text("인증에 실패하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-user').prop('disabled', true); // 가입하기 버튼 비활성화
        } else if (emailCode === $('#authCode').val()){
            $('#emailModal .modal-text h5').text("🎉인증 성공🎉");
            $('#emailModal .modal-text p').text("인증에 성공하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-user').prop('disabled', false); // 가입하기 버튼 비활성화
        } else {
            $('#emailModal .modal-text h5').text("❌인증 실패❌");
            $('#emailModal .modal-text p').text("인증에 실패하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-user').prop('disabled', true); // 가입하기 버튼 비활성화
        }
    });

    // 닫기 버튼 클릭 시 모달 닫기
    $('.close-btn').on('click', function () {
        closeModal();
    });

    // 모달 레이어 클릭 시 모달 닫기
    $('.modal-layer').on('click', function() {
        closeModal();
    });

});

// 모달 닫기 함수
function closeModal() {
    $('#emailModal').addClass('hidden');
    $('.modal-layer').addClass('hidden');
    $('body').css('overflow', ''); // 스크롤 허용
}


