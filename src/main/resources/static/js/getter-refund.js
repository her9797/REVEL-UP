    // 모달 창과 버튼의 DOM 객체를 가져옵니다.
    var modal = document.getElementById('cancel-modal');
    var button = document.getElementById('button-support-cancel-reason');
    var closeButton = document.getElementById('confirm-btn');

    // '후원철회사유' 버튼을 클릭하면 모달 창을 보여줍니다.
    button.onclick = function() {
        modal.style.display = "block";
    }

    // '확인' 버튼을 클릭하면 모달 창을 숨깁니다.
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // 사용자가 모달 창 외부를 클릭하면 모달 창을 숨깁니다.
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
