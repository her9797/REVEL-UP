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

function checkFields() {
// 각 입력 필드의 값을 가져옵니다.
    var reason = document.getElementById("reason").value;
    var otherReason = document.getElementById("otherReason").value;
    var agreementChecked = document.getElementById("withdrawal-agreement").checked;
    var email = document.getElementById("email").value;
    var authCode = document.getElementById("authCode").value;

// 모든 필드가 채워져 있는지 확인합니다.
    if (reason === "none" || (reason === "other" && otherReason === "") || !agreementChecked || email === "" || authCode === "") {
        // 하나라도 비어 있는 경우 버튼을 비활성화합니다.
        document.getElementById("submitBtn").disabled = true;
    } else {
        // 모든 필드가 채워져 있는 경우 버튼을 활성화합니다.
        document.getElementById("submitBtn").disabled = false;
    }
}

// 페이지 로드될 때와 필드가 변경될 때마다 필드를 검사합니다.
window.onload = function() {
    checkFields();
}

document.getElementById("reason").onchange = function() {
    toggleOtherReason();
    checkFields();
}

document.getElementById("otherReason").onkeyup = function() {
    checkFields();
}

document.getElementById("withdrawal-agreement").onchange = function() {
    checkFields();
}

document.getElementById("email").onkeyup = function() {
    checkFields();
}

document.getElementById("authCode").onkeyup = function() {
    checkFields();
}