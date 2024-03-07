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

// 선물 수량에 따른 총 합계 금액 자동 조정 script
function updateTotalPrice() {
    const unitPrice = parseInt(document.getElementById('unit-price').innerText.replace(',', ''));
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = unitPrice * quantity;

    document.getElementById('total-price').innerText = numberWithCommas(totalPrice);
}

// 선물 수량 증가 버튼 클릭
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
}

// 선물 수량 감소 버튼 클릭
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
}

// 찜하기 버튼으로 저장
function addToWishlist() {
    // Handle wishlist button click, e.g., redirect to wishlist page
    window.location.href = 'wishlist.html';
}

// 후원하기 버튼 클릭 시 후원하기 페이지로 이동
function goToPayPage() {
    // Handle donation button click, e.g., redirect to donation page
    window.location.href = 'donation.html';
}

// 천 단위마다 쉼표로 구분하여 표시
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function () {

    $('.color-choose input').on('click', function () {
        var headphonesColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });

});