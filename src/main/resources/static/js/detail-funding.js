// 수량 증가 버튼 클릭 시
document.querySelector('.plus').addEventListener('click', function() {
    let quantityInput = document.getElementById('qty-input');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    calculateTotalPrice();
});

// 수량 감소 버튼 클릭 시
document.querySelector('.minus').addEventListener('click', function() {
    let quantityInput = document.getElementById('qty-input');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        calculateTotalPrice();
    }
});

// 총 후원금액 계산 함수
function calculateTotalPrice() {
    let unitPrice = parseInt(document.querySelector('#unit-price').innerText.replace('원', ''));
    let quantity = parseInt(document.getElementById('qty-input').value);
    console.log(unitPrice);
    console.log(quantity);
    let totalPrice = unitPrice * quantity;
    // 총 후원금액을 계산한 결과를 "총 후원금액" 요소의 하위 요소로 추가
    let totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.innerHTML = `<h4>총 후원금액</h4><input align="right" type="text" readonly value="${totalPrice}원">`;
}
