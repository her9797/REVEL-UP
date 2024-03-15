    // // 후원철회 모달창 실행
    // function openModal() {
    //     document.getElementById('cancel-btn').style.display = 'block';
    // }
    //
    // document.addEventListener('DOMContentLoaded', function() {
    // document.querySelectorAll('.button-support-cancel').forEach((button) => {
    //     button.addEventListener('click', openModal);
    // });
    //
    // document.querySelectorAll('input[type=radio][name=cancelReason]').forEach((elem) => {
    //     elem.addEventListener('change', function() {
    //         if (this.id == 'other') {
    //             document.getElementById('otherReason').style.display = 'block';
    //         } else {
    //             document.getElementById('otherReason').style.display = 'none';
    //         }
    //     });
    // });
    //
    // document.getElementById('confirm-btn').addEventListener('click', function() {
    //     // 후원 철회 사유 확인 및 처리 코드
    //     document.getElementById('cancel-modal').style.display = 'none'; // 모달 창 닫기
    // });
    // });




    // 후원철회 모달창을 열기 위한 함수
    function openModal() {
        document.getElementById('cancel-btn').style.display = 'block'; // 'cancel-modal'을 사용하여 모달창을 엽니다.
    }

    document.addEventListener('DOMContentLoaded', function() {
        // 모든 '후원 철회' 버튼에 대한 클릭 이벤트 리스너 추가
        document.querySelectorAll('.button-support-cancel').forEach((button) => {
            button.addEventListener('click', openModal);
        });

        // 후원 철회 사유가 '기타'인 경우를 처리하기 위한 이벤트 리스너 추가
        document.querySelectorAll('input[type=radio][name=cancelReason]').forEach((elem) => {
            elem.addEventListener('change', function() {
                if (this.id == 'other') {
                    document.getElementById('otherReason').style.display = 'block'; // '기타' 선택 시 입력 필드 보이기
                } else {
                    document.getElementById('otherReason').style.display = 'none'; // '기타' 외 선택 시 입력 필드 숨기기
                }
            });
        });

        // '확인' 버튼 클릭 시 모달창 닫기 및 후원 철회 처리
        document.getElementById('confirm-btn').addEventListener('click', function() {
            document.getElementById('cancel-modal').style.display = 'none'; // 모달 창 닫기
            // 후원 철회 사유 확인 및 처리 코드를 여기에 추가할 수 있습니다.
        });


    });


    // document.addEventListener('DOMContentLoaded', function() {
    //     // 모든 '상세조회' 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
    //     document.querySelectorAll('.button-detail').forEach(function(button) {
    //         button.addEventListener('click', function() {
    //             const plgCode = this.getAttribute('data-plgcode');
    //             const delivStat = this.getAttribute('data-delivstat');
    //
    //             // delivStat의 값에 따라 이동할 URL을 결정합니다.
    //             let url = '';
    //             if (delivStat === 'R') {
    //                 url = `/content/mypage/getter-spons-details1/${plgCode}`;
    //             } else if (delivStat === 'S') {
    //                 url = `/content/mypage/getter-spons-details2/${plgCode}`;
    //             }
    //
    //             // 해당 URL로 페이지를 이동합니다.
    //             if (url) {
    //                 window.location.href = url;
    //             }
    //         });
    //     });
    // });

    // function gotoDetails() {
    //     var detailsDiv = document.getElementById('plgDetails');
    //     var plgCode = detailsDiv.getAttribute('data-plgcode');
    //     var delivStat = detailsDiv.getAttribute('data-delivstat');
    //
    //     if (delivStat === 'R') {
    //         window.location.href = `/content/mypage/getter-spons-details1/${plgCode}`;
    //     } else if (delivStat === 'S') {
    //         window.location.href = `/content/mypage/getter-spons-details2/${plgCode}`;
    //     } else {
    //         alert('배송 상태가 유효하지 않습니다.');
    //     }
    // }


    // 지우지 말것!!!!!
 //  1번 상세조회만 페이지 확인할 수 있음
 // document.addEventListener('DOMContentLoaded', function () {
 //     const detailButtons = document.querySelectorAll('.button-detail');
 //
 //     detailButtons.forEach(button => {
 //         button.addEventListener('click', function () {
 //             const plgCode = this.getAttribute('data-plgcode');
 //             if(plgCode) {
 //                window.location.href='/content/mypage/getter-spons-details1?plgCode=' + plgCode;
 //             }
 //         });
 //     });
 // });


    // document.addEventListener('DOMContentLoaded', function () {
    //     const detailButtons = document.querySelectorAll('.button-detail');
    //
    //     detailButtons.forEach(button => {
    //         button.addEventListener('click', function () {
    //             const plgCode = this.getAttribute('data-plgcode');
    //             // data-plgcode 속성 값을 사용하여 상세 페이지 URL 구성
    //             window.location.href = `/content/mypage/getter-spons-details1?plgCode=` + plgCode;
    //             });
    //     });
    // });



// 작동함
//     document.addEventListener('DOMContentLoaded', function () {
//         document.querySelectorAll('.button-detail').forEach(function(button) {
//             button.addEventListener('click', function() {
//                 var plgCode = this.getAttribute('data-plgCode');
//                 alert(plgCode);
//                 var detailPageUrl = "/content/mypage/getter-spons-details1?plgCode=" + encodeURIComponent(plgCode);
//                 window.location.href = detailPageUrl;
//             });
//         });
//     });

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.button-detail').forEach(function(button) {
            button.addEventListener('click', function() {
                // 해당 버튼의 가장 가까운 상위 요소 중 .image-box 클래스를 가진 요소를 찾습니다.
                var imageBox = this.closest('.image-box');
                // .image-box 내부에 있는 후원번호를 가진 a 태그의 텍스트를 plgCode로 사용합니다.
                var plgCode = imageBox.querySelector('p > a').textContent;
                alert(plgCode);
                window.location.href = "/content/mypage/getter-spons-details1?plgCode=" + plgCode;
                console.log("@@@@"+plgCode);
            });
        });
    });




    // 배송상태에 따라 url 이동
    // document.addEventListener('DOMContentLoaded', function () {
    //     var deliveryStatus = document.getElementById('deliveryStatus').innerText;
    //
    //     // 배송 상태에 따라 페이지 리디렉션
    //     if (deliveryStatus === '배송중') {
    //         window.location.href = '/getter-spons-details1'; // 배송 중인 경우의 페이지
    //     } else if (deliveryStatus === '배송완료') {
    //         window.location.href = '/getter-spons-details2'; // 배송 완료인 경우의 페이지
    //     }
    // });



    // 배송 상태를 나타내는 변수 (예시 값: '선물준비중', '배송중', '배송완료')
    // var 배송상태 = '배송중';
    //
    // // 배송 상태에 따라 이동할 페이지의 URL 설정
    // var 페이지URL;
    // if (배송상태 === '선물준비중') {
    //     페이지URL = '선물준비중_페이지.html';
    // } else if (배송상태 === '배송중') {
    //     페이지URL = '배송중_페이지.html';
    // } else if (배송상태 === '배송완료') {
    //     페이지URL = '배송완료_페이지.html';
    // }
    //
    // // 설정된 URL로 페이지 이동
    // window.location.href = 페이지URL;
