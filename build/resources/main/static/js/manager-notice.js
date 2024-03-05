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




    // 공지사항 테이블의 각 행에 클릭 이벤트 추가
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
        document.getElementById('notice-modal').style.display = 'block';
    }


    // '수정하기' 버튼 클릭 이벤트
    document.getElementById('update-btn').addEventListener('click', function() {
        var title = document.getElementById('text-block');
        var content = document.querySelector('.text');

        // 제목과 내용을 편집 가능한 상태로 만들기
        var titleInput = document.createElement('input');
        titleInput.type = "text";
        titleInput.value = title.innerText;
        title.parentNode.replaceChild(titleInput, title);

        var contentInput = document.createElement('textarea');
        contentInput.value = content.innerText;
        content.parentNode.replaceChild(contentInput, content);

        // '저장하기' 버튼 생성
        var saveButton = document.createElement('button');
        saveButton.innerText = "저장하기";
        saveButton.addEventListener('click', function() {
            // 수정된 내용을 확정하고 편집 가능한 상태를 해제하기
            title = document.createElement('span');
            title.id = "text-block";
            title.className = "text-box";
            title.innerText = titleInput.value;
            titleInput.parentNode.replaceChild(title, titleInput);

            content = document.createElement('div');
            content.className = "text";
            content.innerText = contentInput.value;
            contentInput.parentNode.replaceChild(content, contentInput);

            // '저장하기' 버튼 제거
            this.parentNode.removeChild(this);
        });
        this.parentNode.appendChild(saveButton);
    });

    // 모달창 닫기 이벤트
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('notice-modal').style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('notice-modal')) {
            document.getElementById('notice-modal').style.display = 'none';
        }
    };

}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;