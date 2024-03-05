// document.addEventListener('DOMContentLoaded', function () {
//     const nameInput = document.getElementById('nameInput');
//     const usernameInput = document.getElementById('usernameInput');
//     const nameInput2 = document.getElementById('nameInput2');
//     const findIdBtn = document.getElementById('findIdBtn');
//     const resetPasswordBtn = document.getElementById('resetPasswordBtn');
//
//     [nameInput, usernameInput, nameInput2].forEach(input => {
//         input.addEventListener('input', () => {
//             if (nameInput.value.trim() === '' || usernameInput.value.trim() === '' || nameInput2.value.trim() === '') {
//                 findIdBtn.disabled = true;
//                 resetPasswordBtn.disabled = true;
//             } else {
//                 findIdBtn.disabled = false;
//                 resetPasswordBtn.disabled = false;
//             }
//         });
//     });
// });
//
//
//
// // 아이디 찾기 섹션에서 유효성 검사 및 버튼 활성화
// document.querySelector('.find-id').addEventListener('input', function() {
//     var name = this.querySelector('.name input').value;
//     var password = this.querySelector('.password input').value;
//     var button = this.querySelector('.btn-id');
//
//     if (name && password) {
//         button.removeAttribute('disabled');
//     } else {
//         button.setAttribute('disabled', true);
//     }
// });
//
// // 비밀번호 찾기 섹션에서 유효성 검사 및 버튼 활성화
// document.querySelector('.find-password').addEventListener('input', function() {
//     var username = this.querySelector('.username input').value;
//     var password = this.querySelector('.password input').value;
//     var email = this.querySelector('.email-input').value;
//     var button = this.querySelector('.btn-password');
//
//     if (username && password && email) {
//         button.removeAttribute('disabled');
//     } else {
//         button.setAttribute('disabled', true);
//     }
// });