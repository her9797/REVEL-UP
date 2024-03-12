// 비밀번호 확인 스크립트
function validatePassword() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
        document.getElementById("passwordMatch").innerHTML = "비밀번호가 일치하지 않습니다";
    } else {
        document.getElementById("passwordMatch").innerHTML = "";
    }
}