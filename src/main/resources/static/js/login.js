// 모달 창 열기 함수
function showModal(event) {
    event.preventDefault(); // 이벤트 기본 동작 방지
    document.getElementById('myModal').style.display = 'block';
}

// 모달 창 닫기 함수
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function redirectToSignUp() {
    window.location.href = 'sign-up.html';
}
