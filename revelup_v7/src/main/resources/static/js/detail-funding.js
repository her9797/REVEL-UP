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
    window.location.href = '/content/pay/pay';
}

// 천 단위마다 쉼표로 구분하여 표시
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}