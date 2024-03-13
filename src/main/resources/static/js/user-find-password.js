function checkForm() {
    var userPw = document.getElementById("userPw").value;
    var userPwCheck = document.getElementById("userPwCheck").value;

    var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$/;

    if (userPw !== userPwCheck) {
        document.getElementById("passwordMatch").innerHTML = "비밀번호가 일치하지 않습니다";
        return false; // 서브밋 막기
    } else if (!pwPattern.test(userPw)) {
        document.getElementById("passwordMatch").innerHTML = "유효하지 않은 비밀번호 : 영문+숫자+특수기호[ !@#$% ]를 사용하여 조합해주세요";
        return false; // 서브밋 막기
    } else {
        document.getElementById("passwordMatch").innerHTML = "";
        return true; // 폼 서브밋 허용
    }
}