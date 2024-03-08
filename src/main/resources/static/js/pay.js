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
$(function (){
    $('#apibtn').click(function (){
        $ajax({
            url:'/cls/jq/kakaopay.cls' ,
            dataType:'json' ,
            success:function(data){
                alert(data);
            },
            error:function(error){
                alert(error);
            }
        })
        }

    )
})
function redirectToKakaoPayDemo() {
    // 카카오페이 데모 사이트 URL
    var kakaoPayDemoUrl = "https://mockup-pg-web.kakao.com/v1/payment/ready";

    // 실제 프로덕션에서는 위 URL 대신 카카오페이 데모 사이트의 실제 URL을 사용해야 합니다.

    // 새 창에서 데모 사이트 열기
    window.open(kakaoPayDemoUrl, "_blank");
}