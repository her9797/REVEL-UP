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

// 대표이미지 미리보기
function setThumbnail(event) {
    for (var image of event.target.files) {
        var reader = new FileReader();

        reader.onload = function (event) {
            var img = document.createElement("img");
            img.setAttribute("src", event.target.result);
            document.querySelector("div#image_container").appendChild(img);
        };

        console.log(image);
        reader.readAsDataURL(image);
    }
}

// 목표금액 제약조건
function checkFundingGoalAmount() {
    var goalAmountInput = document.getElementById("funding-goal-amount");
    var errorMessage = document.getElementById("error-message");

    var goalAmount = goalAmountInput.value;

    // 50만원 이상 1억원 이하인지 확인
    if (goalAmount < 500000) {
        errorMessage.textContent = "50만원 이하는 목표 금액으로 설정하실 수 없습니다. 상향조정해 주세요.";
    } else if (goalAmount > 100000000) {
        errorMessage.textContent = "1억원 이상은 목표 금액으로 설정하실 수 없습니다. 하향조정해 주세요.";
    } else {
        errorMessage.textContent = "";
    }
}

// 이벤트 리스너 추가
var goalAmountInput = document.getElementById("funding-goal-amount");
goalAmountInput.addEventListener("input", checkFundingGoalAmount);