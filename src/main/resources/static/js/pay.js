function postApi() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = ''; // 주소 변수

            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('userPostcode').value = data.zonecode;
            document.getElementById("userAdd").value = addr;

            // 상세주소 필드로 커서 이동
            document.getElementById("userDetailAddress").focus();
        }
    }).open();
}

function payForKakao() {
    const requestData = {
        item_name: $('#itemName').text(), //상품명
        quantity: parseInt($('#quantity').text(), 10), //상품 수량
        total_amount: parseInt($('#quantity').text(), 10) * parseInt($('#itemPrice').text(), 10), //상품 총액
    }
    sendDataToUrl("POST", "/content/pay/ready", requestData)
}



function sendDataToUrl(method, url, data) {
    $.ajax({
        type: method,
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response) {
            var popupWidth = 480;
            var popupHeight = 600;
            var left = (window.screen.width - popupWidth) / 2;
            var top = (window.screen.height - popupHeight) / 2;
            var popup = window.open(response, 'popupName', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + left + ', top=' + top);
        },
        error: function(xhr) {
            console.error("데이터 전송 중 오류가 발생했습니다.");
            alert("에러발생이요")
        }
    });
}