    // 후원철회 모달창 실행
    function openModal() {
        document.getElementById('cancel-modal').style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.button-support-cancel').forEach((button) => {
        button.addEventListener('click', openModal);
    });

    document.querySelectorAll('input[type=radio][name=cancelReason]').forEach((elem) => {
        elem.addEventListener('change', function() {
            if (this.id == 'other') {
                document.getElementById('otherReason').style.display = 'block';
            } else {
                document.getElementById('otherReason').style.display = 'none';
            }
        });
    });

    document.getElementById('confirm-btn').addEventListener('click', function() {
        // 후원 철회 사유 확인 및 처리 코드
        document.getElementById('cancel-modal').style.display = 'none'; // 모달 창 닫기
    });
});
