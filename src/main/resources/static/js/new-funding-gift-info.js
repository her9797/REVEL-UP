function loadHeaderAndFooter() {
    // 헤더 파일을 가져오는 XMLHttpRequest 객체 생성
    var xhttpHeader = new XMLHttpRequest();
    xhttpHeader.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // 헤더 파일의 내용을 가져와서 특정 요소의 내용으로 대체
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    xhttpHeader.open("GET", "header.html", true);
    xhttpHeader.send();

    // 푸터 파일을 가져오는 XMLHttpRequest 객체 생성
    var xhttpFooter = new XMLHttpRequest();
    xhttpFooter.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // 푸터 파일의 내용을 가져와서 특정 요소의 내용으로 대체
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhttpFooter.open("GET", "footer.html", true);
    xhttpFooter.send();
}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;

// 선물금액 제약조건
function checkGiftAmount() {
    var giftAmountInput = document.getElementById("gift-amount");
    var errorMessage = document.getElementById("error-message");

    var giftAmount = parseInt(giftAmountInput.value, 10);

    // 선물금액이 10000원 이상이어야 함
    if (isNaN(giftAmount) || giftAmount < 10000) {
        errorMessage.textContent = "선물금액은 10,000원 이상이어야 합니다.";
    } else {
        errorMessage.textContent = ""; // 오류 메시지를 지움
    }
}

// 선물금액 입력값이 변경될 때마다 제약조건을 체크하도록 이벤트 리스너 추가
var giftAmountInput = document.getElementById("gift-amount");
giftAmountInput.addEventListener("input", checkGiftAmount);