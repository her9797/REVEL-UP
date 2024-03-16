// 주소 창 스크립트
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
            document.getElementById('signUpUserPostcode').value = data.zonecode;
            document.getElementById("signUpUserAdd").value = addr;

            // 상세주소 필드로 커서 이동
            document.getElementById("signUpUserDetailAddress").focus();
        }
    }).open();
}

document.addEventListener('DOMContentLoaded', function () {
    // 첫 번째 체크박스와 모달
    var modalCheckbox1 = document.getElementById('signUpShowModalCheckbox1');
    var modal1 = new bootstrap.Modal(document.getElementById('signUpModal1')); // 모달 객체 생성

    modalCheckbox1.addEventListener('click', function () {
        if (modalCheckbox1.checked) {
            modal1.show(); // 모달 표시
        } else {
            modal1.hide(); // 모달 숨기기
        }
    });

    // 두 번째 체크박스와 모달
    var modalCheckbox2 = document.getElementById('signUpShowModalCheckbox2');
    var modal2 = new bootstrap.Modal(document.getElementById('signUpModal2')); // 모달 객체 생성

    modalCheckbox2.addEventListener('click', function () {
        if (modalCheckbox2.checked) {
            modal2.show(); // 모달 표시
        } else {
            modal2.hide(); // 모달 숨기기
        }
    });
});

var signUpEmailCode = "";
$(document).ready(function() {
    // 페이지 로드될 때 가입하기 버튼 비활성화
    $('.btn-user').prop('disabled', true);

    // 비밀번호 유효성 검사 함수
    function signUpValidatePassword() {
        var userPw = document.getElementById("signUpUserPw").value;
        var userPwCheck = document.getElementById("signUpUserPwCheck").value;

        var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$/;

        if (userPw !== userPwCheck) {
            $('.btn-user').prop('disabled', true);
            document.getElementById("signUpPasswordMatch").innerHTML = "비밀번호가 일치하지 않습니다";
        } else if (!pwPattern.test(userPw)) {
            $('.btn-user').prop('disabled', true);
            document.getElementById("signUpPasswordMatch").innerHTML = "유효하지 않은 비밀번호 : 영문+숫자+특수기호[ !@#$% ]를 사용하여 조합해주세요";
        } else {
            document.getElementById("signUpPasswordMatch").innerHTML = "";
            $('.btn-user').prop('disabled', false);
        }

        // 회원가입 버튼 상태 업데이트
        enableSignupButton();
    }

    // 아이디 중복 체크 및 유효성 검사
    function signUpCheckIdAndEnableSignupButton() {
        var userId = $('#signUpUserId').val();
        var idPattern = /^[a-zA-Z0-9]{5,15}$/;

        if (userId === '' || !idPattern.test(userId)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 아이디🚨");
            $('#emailModal .modal-text p').text("아이디는 영문 + 숫자의 조합으로 5자 이상 15자 이하여야 합니다.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            disableSignupButton();
        } else {
            $.post("/content/user/idCheck", {userId:userId}, function (data) {
                if (data) {
                    $('#emailModal .modal-text h5').text("❌중복된 아이디❌");
                    $('#emailModal .modal-text p').text("아이디를 확인해주세요");
                    $('#emailModal').removeClass('hidden');
                    $('.modal-layer').removeClass('hidden');
                    $('body').css('overflow', 'hidden');
                    disableSignupButton();
                } else {
                    $('#emailModal .modal-text h5').text("✔사용 가능한 아이디✔");
                    $('#emailModal .modal-text p').text("사용 가능한 아이디입니다.");
                    $('#emailModal').removeClass('hidden');
                    $('.modal-layer').removeClass('hidden');
                    $('body').css('overflow', 'hidden');
                    enableSignupButton();
                }
            });
        }
    }

    // 이메일 인증
    $('#signUpCheckEmailBtn').on('click', function() {
        var enteredCode = $('#signUpAuthCode').val(); // 입력된 인증번호

        if (enteredCode !== '' && enteredCode === signUpEmailCode) {
            $('#emailModal .modal-text h5').text("🎉인증 성공🎉");
            $('#emailModal .modal-text p').text("이메일 인증이 완료되었습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            enableSignupButton();
        } else {
            $('#emailModal .modal-text h5').text("❌인증 실패❌");
            $('#emailModal .modal-text p').text("인증번호를 다시 확인해주세요.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
            disableSignupButton();
        }
    });

    // 이메일 유효성 검사를 위한 정규식
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// 이메일 입력란에서 포커스 아웃(탭 이동 등) 시 유효성 검사
    $('#signUpUserEmail').on('blur', function() {
        var email = $(this).val();
        if (!emailPattern.test(email)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            disableSignupButton();
        } else {
            enableSignupButton(); // 유효한 이메일 주소인 경우 회원가입 버튼 상태 업데이트
        }
    });

    // 이메일 전송
    $('#signUpSendEmail').on('click', function() {
        var email = $('#signUpUserEmail').val();

        if (!emailPattern.test(email)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return;
        }

        $.get("/content/user/sendMail?email=" + email, function (data, status){
            if (status === 'success') {
                signUpEmailCode = data;

                $('#emailModal .modal-text h5').text("✨인증번호 발송✨");
                $('#emailModal .modal-text p').text("입력하신 이메일로 인증번호를 발송하였습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            } else {
                $('#emailModal .modal-text h5').text("💥발송 실패💥");
                $('#emailModal .modal-text p').text("이메일 전송에 실패했습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            }
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    $('.close-btn').on('click', function () {
        signUpCloseModal();
    });

    // 모달 레이어 클릭 시 모달 닫기
    $('.modal-layer').on('click', function() {
        signUpCloseModal();
    });

    // 회원가입 버튼 활성화 함수
    function enableSignupButton() {
        var allFieldsFilled = true; // 모든 필드가 채워졌는지 여부
        var passwordMatch = false; // 비밀번호 일치 여부
        var emailVerified = false; // 이메일 인증 여부

        // 모든 필드가 채워져 있는지 확인
        $('input[type="text"], input[type="password"]').each(function() {
            if ($(this).val() === '') {
                allFieldsFilled = false;
                return false; // 필드가 비어있다면 반복문을 종료
            }
        });

        // 비밀번호 일치 여부 확인
        var userPw = $('#signUpUserPw').val();
        var userPwCheck = $('#signUpUserPwCheck').val();
        var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$/;

        if (userPw === userPwCheck && pwPattern.test(userPw)) {
            passwordMatch = true;
        }

        // 이메일 인증 여부 확인
        var enteredCode = $('#signUpAuthCode').val();
        if (enteredCode !== '' && enteredCode === signUpEmailCode) {
            emailVerified = true;
        }

        // 모든 조건이 충족되면 회원가입 버튼 활성화
        if (allFieldsFilled && passwordMatch && emailVerified) {
            $('.btn-user').prop('disabled', false);
        } else {
            $('.btn-user').prop('disabled', true);
        }
    }

    // 회원가입 버튼 비활성화 함수
    function disableSignupButton() {
        $('.btn-user').prop('disabled', true);
    }

    // 모달 닫기 함수
    function signUpCloseModal() {
        $('#emailModal').addClass('hidden');
        $('.modal-layer').addClass('hidden');
        $('body').css('overflow', '');
    }

    // 아이디 중복 체크 이벤트 핸들러
    $('#signUpIdCheck').on('click', signUpCheckIdAndEnableSignupButton);

    // 비밀번호 입력란 값이 변경될 때마다 비밀번호 유효성 검사 수행
    $('#signUpUserPw, #signUpUserPwCheck').on('keyup', signUpValidatePassword);
});

