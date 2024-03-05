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



    // 문의 테이블의 각 행에 클릭 이벤트 추가
    document.querySelectorAll('.manager_table tr').forEach((row, index) => {
        // 첫 번째 행(헤더)은 제외
        if (index > 0) {
            row.addEventListener('click', function() {
                openModal(this);

            });
        }
    });


    // 모달창 열기 함수
    function openModal(row) {
        // 공지사항 제목과 내용을 가져와 모달창에 설정
        var title = row.cells[1].innerText;
        document.getElementById('text-block').innerText = title;

        // 모달창 보이기
        document.getElementById('inquiry-modal').style.display = 'block';
    }



    // 모달창 닫기 이벤트
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('inquiry-modal').style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('inquiry-modal')) {
            document.getElementById('inquiry-modal').style.display = 'none';
        }
    };


}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;


