
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


