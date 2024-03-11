$(document).ready(function() {
    // 페이지 로드될 때 가입하기 버튼 비활성화
    $('.btn-mo').prop('disabled', true);
    // 이메일 유효성 검사를 위한 정규식
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function validatePassword() {
        var userPw = document.getElementById("userPw").value;
        var userPwCheck = document.getElementById("userPwCheck").value;


        var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$/;


        if (userPw !== userPwCheck) {
            $('.btn-mo').prop('disabled', true);
            document.getElementById("passwordMatch").innerHTML = "비밀번호가 일치하지 않습니다";
        } else if (!pwPattern.test(userPw)) {
            $('.btn-mo').prop('disabled', true);
            document.getElementById("passwordMatch").innerHTML = "유효하지 않은 비밀번호 : 영문+숫자+특수기호를 사용하여 조합해주세요";
        } else {
            $('.btn-mo').prop('disabled', false);
            document.getElementById("passwordMatch").innerHTML = "";
        }
    }

    // 인증번호 요청 버튼 클릭 시 모달 창 열기
    $('#sendEmail1').on('click', function() {
        var email = $('#userEmail').val();  // 내가 작성한 이메일

        // 이메일 유효성 검사
        if (!emailPattern.test(email)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            $('.btn-mo').prop('disabled', true); // 수정하기 버튼 비활성화
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
                $('.btn-mo').prop('disabled', true); // 수정하기 버튼 비활성화
            } else {
                $('#emailModal .modal-text h5').text("✨인증번호 발송✨");
                $('#emailModal .modal-text p').text("입력하신 이메일로 인증번호를 발송하였습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            }
        });
    });


    $('#checkEmailBtn1').on('click', function () {
        if ($('#authCode').val() === '') { // 입력된 인증 코드와 비교, 빈 문자열도 인증 성공으로 떠서 &&'' 추가하였음.
            $('#emailModal .modal-text h5').text("❌미입력❌");
            $('#emailModal .modal-text p').text("인증에 실패하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-mo').prop('disabled', true); // 수정하기 버튼 비활성화
        } else if (emailCode === $('#authCode').val()){
            $('#emailModal .modal-text h5').text("🎉인증 성공🎉");
            $('#emailModal .modal-text p').text("인증에 성공하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-mo').prop('disabled', false); // 수정하기 버튼 활성화
        } else {
            $('#emailModal .modal-text h5').text("❌인증 실패❌");
            $('#emailModal .modal-text p').text("인증에 실패하였습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            $('.btn-mo').prop('disabled', true); // 수정하기 버튼 비활성화
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




function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = ''; // 주소 변수

            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('userPostcode').value = data.zonecode;
            document.getElementById("userAdd").value = addr;

            // 상세주소 필드로 커서 이동
            document.getElementById("userDetailAddress").focus();
        }
    }).open();
}
