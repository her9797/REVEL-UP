function loadHeaderAndFooter() {
    // 헤더 파일을 가져오는 XMLHttpRequest 객체 생성
    var xhttpHeader = new XMLHttpRequest();
    xhttpHeader.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // 헤더 파일의 내용을 가져와서 특정 요소의 내용으로 대체
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    xhttpHeader.open("GET", "header.html", true);
    xhttpHeader.send();

    // 푸터 파일을 가져오는 XMLHttpRequest 객체 생성
    var xhttpFooter = new XMLHttpRequest();
    xhttpFooter.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // 푸터 파일의 내용을 가져와서 특정 요소의 내용으로 대체
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhttpFooter.open("GET", "footer.html", true);
    xhttpFooter.send();

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

}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;