function toggleOtherReason() {
    var selectElement = document.getElementById("reason");
    var otherReasonTextarea = document.getElementById("otherReason");

    if (selectElement.value === "other") {
        otherReasonTextarea.style.display = "block";
    } else {
        otherReasonTextarea.style.display = "none";
    }
}

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

