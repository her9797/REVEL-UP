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

    document.addEventListener('DOMContentLoaded', function () {
        var deliveryStatus = document.getElementById('deliveryStatus').innerText;

        // 배송 상태에 따라 페이지 리디렉션
        if (deliveryStatus === '배송중') {
            window.location.href = '/getter-spons-details'; // 배송 중인 경우의 페이지
        } else if (deliveryStatus === '배송완료') {
            window.location.href = '/getter-spons-details2'; // 배송 완료인 경우의 페이지
        }
    });
