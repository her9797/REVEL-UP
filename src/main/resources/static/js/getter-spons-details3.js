
// 후원확정 모달창 실행
function openModalConfir() {
    document.getElementById('confirmation-modal').style.display = 'block';
}

// 후원확정 모달창 닫기
function closeModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('confirmation').addEventListener('click', openModalConfir);
    document.getElementById('cancel-btn').addEventListener('click', closeModal);

    document.getElementById('submit-btn').addEventListener('click', function() {
        document.getElementById('deliv-status').innerText = '배송완료 | 후원확정 완료';
        document.getElementById('confirmation-modal').style.display = 'none';
    });
});

