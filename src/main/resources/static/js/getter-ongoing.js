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

        // 모든 '상세 조회' 버튼에 대한 클릭 이벤트 리스너 추가
        document.querySelectorAll('.button-detail').forEach((button) => {
            button.addEventListener('click', function() {
                // 데이터 속성에서 후원번호(plgCode) 읽어오기
                const plgCode = this.getAttribute('data-plgcode');

                // 동적으로 URL 생성
                const url = `/content/mypage/getter-spons-details1?plgCode=${plgCode}`;

                // 생성된 URL로 페이지 이동
                window.location.href = url;
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
