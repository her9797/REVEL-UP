// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.detail-btn').forEach(function(button) {
//         button.addEventListener('click', function() {
//             var fndCode = this.getAttribute('data-plgCode');
//             alert(fndCode);
//             var detailPageUrl = "/content/mypage/getter-spons-details1?plgCode=" + encodeURIComponent(fndCode);
//             window.location.href = detailPageUrl;
//         });
//     });
// });
//

// $(document).ready(function() {
//     document.addEventListener('DOMContentLoaded', function () {
//         document.querySelectorAll('.detail-btn').forEach(function(button) {
//             button.addEventListener('click', function() {
//                 // 해당 버튼의 가장 가까운 상위 요소 중 .image-box 클래스를 가진 요소를 찾습니다.
//
//                 // .image-box 내부에 있는 후원번호를 가진 a 태그의 텍스트를 plgCode로 사용합니다.
//                 var fndCode = imageBox.querySelector('p > a').textContent;
//                 alert(fndCode);
//                 window.location.href = "/content/mypage/getter-spons-details1?plgCode=" + fndCode;
//                 console.log("@@@@"+fndCode);
//             });
//         });
//     });
// })


// document.addEventListener('DOMContentLoaded', function () {
//     var detailButtons = document.querySelectorAll('.detail-btn');
//
//     detailButtons.forEach(function (button) {
//         button.addEventListener('click', function (event) {
//             var fndCode = this.getAttribute('data-fnd-code');
//             alert(fndCode);
//             window.location.href = "/content/mypage/setter-funding-history?fndCode=" + fndCode;
//             });
//         });
// });


// 1
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.detail-btn').forEach(function(button) {
//         button.addEventListener('click', function() {
//
//             var fndCode = this.getAttribute('data-fnd-code');
//             alert(fndCode);
//             window.location.href = "/content/mypage/setter-funding-history?fndCode=" + fndCode;
//             console.log("@@@@"+fndCode);
//         });
//     });
// });

// 2
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.detail-btn').forEach(function(a) {
//         a.addEventListener('click', function() {
//             var fndCode = this.getAttribute('data-fnd-code');
//             alert(fndCode);
//             console.log("fndCode: " + fndCode);
//             window.location.href = "/content/mypage/setter-funding-history?fndCode=" + fndCode;
//             console.log("@@@@"+fndCode);
//         });
//     });
// });

// 3
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.detail-btn').forEach(function (a) {
        a.addEventListener('click', function (event) {
            // 기본 이벤트를 방지하여 페이지가 자동으로 이동하는 것을 막습니다.
            event.preventDefault();
            var buttonGroup = this.closest('.button-group');
            var fndCode = buttonGroup.querySelector('div > a').textContent;
            console.log("fndCode: " + fndCode);
            // 쿼리 스트링으로 페이지 이동을 처리합니다.
            window.location.href = "/content/mypage/setter-funding-history/" + fndCode;
            console.log("@@@@" + fndCode);
        });
    });
});


// <tr align="center" th:each="plgOne : ${ plgList }">
//     <td><input type="radio" name="check" value="check"/></td>
//     <td th:text="${plgOne.plgCode}">F-001</td>
//     <td th:each="login : ${plgOne.login}" th:text="${login.userName}">김자바</td>
//     <td th:text="${plgOne.plgPrice}">70000</td>
//     <td th:text="${plgOne.plgDttm}">2024-02-01</td>
//     <td th:text="${login.userAdd}">서울 광진구 종곡동 28-11</td>
//     <td th:each="delivery : ${plgOne.delivery}" th:text="${delivery.delivStat}">배송중</td>
//     <td th:text="${delivery.trackingNo}" className="trackingNumberCell" id="trackingNumberCell">123456789123</td>
// </tr>