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

    // likebtn 클릭 이벤트 핸들러
    document.querySelectorAll('.likebtn').forEach(function(likebtn) {
        likebtn.addEventListener('click', function() {
            // 버튼의 상태에 따라 다르게 동작
            if (this.style.color === 'red') {
                // 버튼이 활성화되어 있으면 비활성화
                this.style.color = 'gray';
                this.closest('.image-box').style.display = 'none';
            } else {
                // 버튼이 비활성화되어 있으면 활성화
                this.style.color = 'red';
                this.closest('.image-box').style.display = 'block';
            }
        });
    });

}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;