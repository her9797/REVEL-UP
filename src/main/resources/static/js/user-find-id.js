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
            document.getElementById("userAddress").value = addr;

            // 상세주소 필드로 커서 이동
            document.getElementById("userDetailAddress").focus();
        }
    }).open();
}

// 첫 번째 체크 박스가 클릭되었을 때 모달 1을 표시
$('#showModalCheckbox1').click(function(){
    if($(this).is(":checked")) {
        $('#myModal1').modal('show');
    } else {
        $('#myModal1').modal('hide');
    }
});

// 두 번째 체크 박스가 클릭되었을 때 모달 2를 표시
$('#showModalCheckbox2').click(function(){
    if($(this).is(":checked")) {
        $('#myModal2').modal('show');
    } else {
        $('#myModal2').modal('hide');
    }
});

// 입력 필드 유효성 검사 함수
function validateForm() {
    var username = document.querySelector('.username input').value;
    var name = document.querySelector('.name input').value;
    var password = document.querySelector('.password input').value;
    var phone = document.querySelector('.phone input').value;
    var address = document.querySelector('.address-input').value;
    var email = document.querySelector('.email-input').value;

// 각 필드의 유효성 검사를 수행합니다.
    if (username === '' || name === '' || password === '' || phone === '' || address === '' || email === '') {
        return false; // 하나라도 비어 있는 경우 false 반환
    } else {
        return true; // 모든 필드가 채워져 있는 경우 true 반환
    }
}

// 가입하기 버튼의 활성화 상태를 업데이트하는 함수
function updateButtonState() {
    var signUpButton = document.querySelector('.btn-user');

    if (validateForm()) {
        signUpButton.removeAttribute('disabled'); // 모든 필드가 유효한 경우 버튼 활성화
    } else {
        signUpButton.setAttribute('disabled', true); // 필드가 하나라도 비어 있는 경우 버튼 비활성화
    }
}

// 입력 필드가 변경될 때마다 버튼 상태를 업데이트합니다.
document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('input', updateButtonState);
});

// 인증번호 전송 버튼 클릭 시
function sendVerificationCode() {
// 여기에 인증번호 전송 로직을 추가합니다.

// 인증번호 전송 버튼을 "인증번호 재전송"으로 변경
    document.getElementById("sendEmail").innerHTML = "인증번호 재전송";
// 인증번호 입력 창을 활성화
    document.getElementById("authCode").disabled = false;
// 인증번호 확인 버튼을 활성화
    document.getElementById("confirmEmail").disabled = false;
}