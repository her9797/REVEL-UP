document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const usernameInput = document.getElementById('usernameInput');
    const nameInput2 = document.getElementById('nameInput2');
    const findIdBtn = document.getElementById('findIdBtn');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');

    [nameInput, usernameInput, nameInput2].forEach(input => {
        input.addEventListener('input', () => {
            if (nameInput.value.trim() === '' || usernameInput.value.trim() === '' || nameInput2.value.trim() === '') {
                findIdBtn.disabled = true;
                resetPasswordBtn.disabled = true;
            } else {
                findIdBtn.disabled = false;
                resetPasswordBtn.disabled = false;
            }
        });
    });
});