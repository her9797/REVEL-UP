function toggleOtherReason() {
    var selectElement = document.getElementById("reason");
    var otherReasonTextarea = document.getElementById("otherReason");

    if (selectElement.value === "otherReason") {
        otherReasonTextarea.style.display = "block";
    } else {
        otherReasonTextarea.style.display = "none";
    }
}

$(document).ready(function() {
    // deleteBtn1 버튼 비활성화
    $('#deleteBtn1').prop('disabled', true);

    // 이메일 유효성 검사를 위한 정규식
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // 인증 완료, 체크박스 체크, 사유 선택 또는 직접 입력 시 탈퇴하기 버튼 활성화
    function checkConditions() {
        var withdrawalAgreementChecked = $('#withdrawal-agreement').prop('checked');
        var emailAuthenticated = $('#userEmail2').hasClass('authenticated');
        var reasonSelected = $('#reason').val() !== 'none';
        var otherReasonEntered = $('#otherReason').val() !== '';

        if (withdrawalAgreementChecked && emailAuthenticated && (reasonSelected || otherReasonEntered)) {
            $('#deleteBtn1').prop('disabled', false);
        } else {
            $('#deleteBtn1').prop('disabled', true);
        }
    }

    // 이메일 입력 후 이메일 유효성 및 인증 요청
    $('#submitBtn').on('click', function(event) {
        var userEmail2 = $('#userEmail2').val();

        // 사용자 이름과 이메일의 유효성 검사
        if (userEmail2 === '') {
            $('#emailModal .modal-text h5').text("😢입력값 오류😢");
            $('#emailModal .modal-text p').text("아이디와 이름, 이메일 모두 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return;
        }

        $.post("/content/user/emailCheck", {userEmail: userEmail2}, function(emailData2) {
            console.log("이메일" + emailData2)
            if (!emailData2) {
                $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                $('#emailModal .modal-text p').text("입력하신 이메일로 가입된 사용자가 없습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
                return;
            } else {
                // 이메일 인증 확인
                if ($('#userEmail2').hasClass('authenticated')) {
                    // deleteBtn1 버튼 활성화
                    $('#deleteBtn1').prop('disabled', false);
                } else {
                    $('#emailModal .modal-text h5').text("❌인증 실패❌");
                    $('#emailModal .modal-text p').text("이메일 인증이 완료되지 않았습니다.");
                    $('#emailModal').removeClass("hidden");
                    $('.modal-layer').removeClass("hidden");
                    $('body').css("overflow", "hidden");
                    return;
                }
            }
        });
    });

    // 인증번호 확인 시
    $('#checkEmailBtn2').on('click', function() {
        var enteredCode = $('#authCode2').val(); // 입력된 인증번호 가져오기

        // 입력된 인증번호가 맞는지 확인
        if (enteredCode === emailCode) {
            // 인증번호가 일치하면 인증 완료 클래스 추가
            $('#userEmail2').addClass('authenticated');
            $('#emailModal .modal-text h5').text("✅인증 완료✅");
            $('#emailModal .modal-text p').text("이메일 인증이 완료되었습니다.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");

            checkConditions(); // 조건 확인
        } else {
            // 인증번호가 일치하지 않으면 메시지 표시
            $('#emailModal .modal-text h5').text("❌인증 실패❌");
            $('#emailModal .modal-text p').text("이메일 인증이 실패했습니다. 올바른 인증번호를 입력하세요.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
        }
    });

    // 인증번호 요청 시
    $('#sendEmail2').on('click', function() {
        var email2 = $('#userEmail2').val(); // 내가 작성한 이메일

        // 이메일 유효성 검사
        if (!emailPattern.test(email2)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return; // 함수 종료
        }

        $.get("/content/user/sendMail?email=" + email2, function(data, status) {
            emailCode = data;
            console.log("@@@@@@" + emailCode)
            if (email2 === '') {
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

    // 닫기 버튼 클릭 시 모달 닫기
    $('.close-btn').on('click', function() {
        closeModal();
    });

    // 모달 레이어 클릭 시 모달 닫기
    $('.modal-layer').on('click', function() {
        closeModal();
    });

    // 이유 선택 시
    $('#reason').on('change', function() {
        // 선택한 값이 '기타'인 경우
        if ($(this).val() === 'otherReason') {
            // 직접 입력 텍스트 영역 보이기
            $('#otherReason').show();
        } else {
            // 아닌 경우 숨기기
            $('#otherReason').hide();
        }
        checkConditions(); // 조건 확인
    });

    // 직접 입력 사유 입력 시
    $('#otherReason').on('input', function() {
        checkConditions(); // 조건 확인
    });

    // 모달 닫기 함수
    function closeModal() {
        $('#emailModal').addClass('hidden');
        $('.modal-layer').addClass('hidden');
        $('body').css('overflow', ''); // 스크롤 허용
    }
});
