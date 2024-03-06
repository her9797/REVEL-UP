// 비밀번호 확인 스크립트
function validatePassword() {
    var userPw = document.getElementById("userPw").value;
    var userPwCheck = document.getElementById("userPwCheck").value;

    if (userPw !== userPwCheck) {
        document.getElementById("passwordMatch").innerHTML = "비밀번호가 일치하지 않습니다";
    } else {
        document.getElementById("passwordMatch").innerHTML = "";
    }
}

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
            document.getElementById('userPostcode').value = data.zonecode;
            document.getElementById("userAdd").value = addr;

            // 상세주소 필드로 커서 이동
            document.getElementById("userDetailAddress").focus();
        }
    }).open();
}


document.addEventListener('DOMContentLoaded', function () {
    // 첫 번째 체크박스와 모달
    var modalCheckbox1 = document.getElementById('showModalCheckbox1');
    var modal1 = new bootstrap.Modal(document.getElementById('myModal1')); // 모달 객체 생성

    modalCheckbox1.addEventListener('click', function () {
        if (modalCheckbox1.checked) {
            modal1.show(); // 모달 표시
        } else {
            modal1.hide(); // 모달 숨기기
        }
    });

    // 두 번째 체크박스와 모달
    var modalCheckbox2 = document.getElementById('showModalCheckbox2');
    var modal2 = new bootstrap.Modal(document.getElementById('myModal2')); // 모달 객체 생성

    modalCheckbox2.addEventListener('click', function () {
        if (modalCheckbox2.checked) {
            modal2.show(); // 모달 표시
        } else {
            modal2.hide(); // 모달 숨기기
        }
    });
});


var emailCode = "";

// 인증번호 전송 버튼 클릭 시
function sendEmailCode() {

    // 인증번호 전송 버튼을 "인증번호 재전송"으로 변경
    $("#sendEmail").text("인증번호 재전송");
    // 인증번호 입력 창을 활성화
    $("#authCode").css("disabled",false);
    // 인증번호 확인 버튼을 활성화
    $("#confirmEmail").css("disabled",false);

}

// 인증번호 확인 버튼 클릭 시
function checkEmailCode() {

    // 내가 전송한 코드랑 입력한 코드 체크 아니면, 탈락 맞으면 성공
    if (emailCode == $('#authCode').val()) {
        console.log("성공")
    } else {
        console.log("실패")
    }

}

