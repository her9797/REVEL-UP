$(document).ready(function() {
    $('#findIdBtn').on('click', function(event) {
        event.preventDefault(); // 폼의 기본 동작(새로고침)을 막음

        var userName = $('#userName').val();
        var userEmail = $('#userEmail').val();

        // 사용자 이름과 이메일의 유효성 검사
        if (userName === '' || userEmail === '') {
            $('#emailModal .modal-text h5').text("😢입력값 오류😢");
            $('#emailModal .modal-text p').text("이름과 이메일을 모두 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return;
        }

        // AJAX를 통해 사용자 이름과 이메일의 유효성 확인
        $.post("/content/user/nameCheck", {userName: userName}, function (nameData) {
            if (!nameData) {
                $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                $('#emailModal .modal-text p').text("입력하신 이름으로 가입된 사용자가 없습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
                return;
            }

            $.post("/content/user/emailCheck", {userEmail : userEmail}, function (emailData) {
                if (!emailData) {
                    $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                    $('#emailModal .modal-text p').text("입력하신 이메일로 가입된 사용자가 없습니다.");
                    $('#emailModal').removeClass('hidden');
                    $('.modal-layer').removeClass('hidden');
                    $('body').css('overflow', 'hidden');
                    return;
                }

                // 폼 전송
                $('#findIdBtn').closest('form').submit();
            });
        });
    });
});

$(document).ready(function() {
    $('#resetPasswordBtn').on('click', function(event) {
        event.preventDefault(); // 폼의 기본 동작(새로고침)을 막음

        var userName2 = $('#userName2').val();
        var userEmail2 = $('#userEmail2').val();
        var userId = $('#userId').val();

        // 사용자 이름과 이메일의 유효성 검사
        if (userName2 === '' || userEmail2 === '' || userId === '') {
            $('#emailModal .modal-text h5').text("😢입력값 오류😢");
            $('#emailModal .modal-text p').text("아이디와 이름, 이메일 모두 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return;
        }

        // AJAX를 통해 사용자 이름과 이메일의 유효성 확인
        $.post("/content/user/nameCheck", {userName: userName2}, function (nameData2) {
            console.log("이름"+nameData2)
            if (!nameData2) {
                $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                $('#emailModal .modal-text p').text("입력하신 이름으로 가입된 사용자가 없습니다.");
                $('#emailModal').removeClass('hidden');
                $('.modal-layer').removeClass('hidden');
                $('body').css('overflow', 'hidden');
                return;
            }

            $.post("/content/user/emailCheck", {userEmail : userEmail2}, function (emailData2) {
                console.log("이메일"+emailData2)
                if (!emailData2) {
                    $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                    $('#emailModal .modal-text p').text("입력하신 이메일로 가입된 사용자가 없습니다.");
                    $('#emailModal').removeClass('hidden');
                    $('.modal-layer').removeClass('hidden');
                    $('body').css('overflow', 'hidden');
                    return;
                }

                $.post("/content/user/idCheck", {userId : userId}, function (userData2){
                    console.log(userData2)
                    if (!userData2) {
                        $('#emailModal .modal-text h5').text("🚨유효성 오류🚨");
                        $('#emailModal .modal-text p').text("입력하신 아이디로 가입된 사용자가 없습니다.");
                        $('#emailModal').removeClass('hidden');
                        $('.modal-layer').removeClass('hidden');
                        $('body').css('overflow', 'hidden');
                        return;
                    } else {
                        // 이메일 인증 확인
                        if ($('#userEmail2').hasClass('authenticated')) {
                            // 모든 조건이 충족되면 폼 제출
                            window.location.href = "/content/user/findPw?userId=" + userId + "&userName=" + userName2 + "&userEmail=" + userEmail2;
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
        });
    });

    /* 여기서부턴 다른 내용임. */

    // 이메일 유효성 검사를 위한 정규식
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // 인증번호 요청 버튼 클릭 시 모달 창 열기
    $('#sendEmail2').on('click', function() {
        var email2 = $('#userEmail2').val();  // 내가 작성한 이메일

        // 이메일 유효성 검사
        if (!emailPattern.test(email2)) {
            $('#emailModal .modal-text h5').text("🚨유효하지 않은 이메일🚨");
            $('#emailModal .modal-text p').text("올바른 이메일 주소를 입력해주세요.");
            $('#emailModal').removeClass('hidden');
            $('.modal-layer').removeClass('hidden');
            $('body').css('overflow', 'hidden');
            return; // 함수 종료
        }

        $.get("/content/user/sendMail?email=" + email2, function (data, status){
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
    $('.close-btn').on('click', function () {
        closeModal();
    });

    // 모달 레이어 클릭 시 모달 닫기
    $('.modal-layer').on('click', function() {
        closeModal();
    });

    // 인증번호 확인 버튼 클릭 시 인증 완료 클래스 추가
    $('#checkEmailBtn2').on('click', function () {
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
        } else {
            // 인증번호가 일치하지 않으면 메시지 표시
            $('#emailModal .modal-text h5').text("❌인증 실패❌");
            $('#emailModal .modal-text p').text("이메일 인증이 실패했습니다. 올바른 인증번호를 입력하세요.");
            $('#emailModal').removeClass("hidden");
            $('.modal-layer').removeClass("hidden");
            $('body').css("overflow", "hidden");
        }
    });
});


// 모달 닫기 함수
function closeModal() {
    $('#emailModal').addClass('hidden');
    $('.modal-layer').addClass('hidden');
    $('body').css('overflow', ''); // 스크롤 허용
}




// // 삭제 버튼 클릭 이벤트
// $('.delete-btn').click(function() {
//     var fndCode = $(this).data('fnd-code'); // 펀딩 식별자 가져오기
//
//     $.ajax({
//         url: "/setter-fndList/" + fndCode, // 요청 URL
//         type: "POST",
//         data: { fndCode: fndCode }, // 데이터 전송
//         success: function(response) {
//             if(response.successAmt === 0) {
//                 openModal(fndCode); // 모달 창 열기
//             } else {
//                 alert('달성액이 있어 펀딩을 삭제하지 못합니다.');
//             }
//         },
//         error: function(xhr, status, error) {
//             console.error('오류 발생: ', error);
//         }
//     });
// });
