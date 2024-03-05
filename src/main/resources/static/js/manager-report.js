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



    //신고 테이블의 각 행에 클릭 이벤트 추가
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
        // 신고 제목과 내용을 가져와 모달창에 설정
        var title = row.cells[1].innerText;
        document.getElementById('text-block').innerText = title;

        // 모달창 보이기
        document.getElementById('report-modal').style.display = 'block';
    }

    // 취소 버튼이 눌렸을 때 모달창 닫기 이벤트
    document.getElementById('cancel-btn').addEventListener('click', function() {
        document.getElementById('report-modal').style.display = 'none';
    });

    // x 버튼이 눌렸을 때 모달창 닫기 이벤트
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('send-modal').style.display = 'none';
    });

    // 모달창 바깥 클릭했을 때 모달창 닫기 이벤트
    window.onclick = function(event) {
        if (event.target == document.getElementById('report-modal')) {
            document.getElementById('report-modal').style.display = 'none';
        }
        if (event.target == document.getElementById('send-modal')) {
            document.getElementById('send-modal').style.display = 'none';
        }
    };

// "처리" 버튼을 비활성화
    document.getElementById('approval-btn').disabled = true;

// 라디오 버튼에 이벤트 리스너를 추가
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            // 라디오 버튼 중 하나가 선택되면 "처리" 버튼을 활성화
            document.getElementById('approval-btn').disabled = false;
        });
    });
    // "처리" 버튼에 클릭 이벤트를 추가
    document.getElementById('approval-btn').addEventListener('click', () => {
        // "처리" 버튼이 클릭되면 send-modal 창을 보여줌
        document.querySelector('.send-modal').style.display = 'block';
    });

// // "처리" 버튼에 클릭 이벤트를 추가
// document.getElementById('approval-btn').addEventListener('click', () => {
//     // "처리" 버튼이 클릭되면 send-modal 창을 보여줌
//     document.getElementById('send-modal').style.display = 'block';
// });

// "처리결과 보내기" 버튼에 클릭 이벤트를 추가
    document.getElementById('send-btn').addEventListener('click', () => {
        let email = document.getElementById('email-input').value;
        let subject = encodeURIComponent("신고 처리 결과");
        let body = encodeURIComponent(document.querySelector('.result-text').value);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });

}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;


