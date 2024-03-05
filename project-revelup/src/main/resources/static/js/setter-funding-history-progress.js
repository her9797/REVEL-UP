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
}

// 페이지 로드 시 헤더와 푸터를 가져오도록 호출
window.onload = loadHeaderAndFooter;


// Get the modal
var modal = document.getElementById("deliv-modal");

// Get radio buttons
var radios = document.getElementsByName("check");

var trackingNumberCells = document.querySelectorAll('td:last-child');

// When the user clicks on '운송장입력' button, open the modal if a radio button is selected
function openModal() {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            modal.style.display = "block";
            break;
        }
    }
}

// When the user clicks on '등록' button, submit the tracking number
function submitTrackingNumber() {
    // var trackingNumber = document.getElementById("trackingNumber").value;
    // var trackingNumberCell = document.getElementById("trackingNumberCell");
    // trackingNumberCell.textContent = trackingNumber;
    var trackingNumber = document.getElementById("trackingNumber").value;
    var selectedRow;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedRow = radios[i].parentNode.parentNode;  // 라디오 버튼의 부모의 부모는 tr 요소입니다.
            break;
        }
    }
    if (selectedRow) {
        var trackingNumberCell = selectedRow.querySelector(".trackingNumberCell");
        trackingNumberCell.textContent = trackingNumber;
    }
    closeModal();
}

// Get the '등록' button
var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", submitTrackingNumber);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function closeModal() {
    var modal = document.getElementById("deliv-modal");
    modal.style.display = "none";
}

document.getElementById("cancel-btn").addEventListener("click", closeModal);