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


    // 후원철회 모달창 실행
    function openModal() {
        document.getElementById('cancel-modal').style.display = 'block';
    }

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

}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;