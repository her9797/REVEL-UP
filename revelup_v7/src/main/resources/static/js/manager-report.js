//     //신고 테이블의 각 행에 클릭 이벤트 추가
//     document.querySelectorAll('.manager_table tr').forEach((row, index) => {
//         // 첫 번째 행(헤더)은 제외
//         if (index > 0) {
//             row.addEventListener('click', function() {
//                 openModal(this);
//
//             });
//         }
//     });
//
//     // 모달창 열기 함수
//     function openModal(row) {
//         // 신고 제목과 내용을 가져와 모달창에 설정
//         var title = row.cells[1].innerText;
//         document.getElementById('text-block').innerText = title;
//
//         // 모달창 보이기
//         document.getElementById('report-modal').style.display = 'block';
//     }
//
//     // 취소 버튼이 눌렸을 때 모달창 닫기 이벤트
//     document.getElementById('cancel-btn').addEventListener('click', function() {
//         document.getElementById('report-modal').style.display = 'none';
//     });
//
//     // x 버튼이 눌렸을 때 모달창 닫기 이벤트
//     document.getElementById('close-btn').addEventListener('click', function() {
//         document.getElementById('send-modal').style.display = 'none';
//     });
//
//     // 모달창 바깥 클릭했을 때 모달창 닫기 이벤트
//     window.onclick = function(event) {
//         if (event.target == document.getElementById('report-modal')) {
//             document.getElementById('report-modal').style.display = 'none';
//         }
//         if (event.target == document.getElementById('send-modal')) {
//             document.getElementById('send-modal').style.display = 'none';
//         }
//     };
//
// // "처리" 버튼을 비활성화
//     document.getElementById('approval-btn').disabled = true;
//
// // 라디오 버튼에 이벤트 리스너를 추가
//     document.querySelectorAll('input[type="radio"]').forEach(radio => {
//         radio.addEventListener('change', () => {
//             // 라디오 버튼 중 하나가 선택되면 "처리" 버튼을 활성화
//             document.getElementById('approval-btn').disabled = false;
//         });
//     });
//     // "처리" 버튼에 클릭 이벤트를 추가
//     document.getElementById('approval-btn').addEventListener('click', () => {
//         // "처리" 버튼이 클릭되면 send-modal 창을 보여줌
//         document.querySelector('.send-modal').style.display = 'block';
//     });
//
// // // "처리" 버튼에 클릭 이벤트를 추가
// // document.getElementById('approval-btn').addEventListener('click', () => {
// //     // "처리" 버튼이 클릭되면 send-modal 창을 보여줌
// //     document.getElementById('send-modal').style.display = 'block';
// // });
//
// // "처리결과 보내기" 버튼에 클릭 이벤트를 추가
//     document.getElementById('send-btn').addEventListener('click', () => {
//         let email = document.getElementById('email-input').value;
//         let subject = encodeURIComponent("신고 처리 결과");
//         let body = encodeURIComponent(document.querySelector('.result-text').value);
//         window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
//     });



    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.manager_table tr').forEach((row, index) => {
            if (index > 0) {
                row.addEventListener('click', function() {
                    openModal(this);
                });
            }
        });

        var cancelBtn = document.getElementById('cancel-btn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                var reportModal = document.getElementById('report-modal');
                if (reportModal) {
                    reportModal.style.display = "none";
                }
            });
        }

        var closeBtn = document.getElementById('close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                var sendModal = document.getElementById('send-modal');
                if (sendModal) {
                    sendModal.style.display = 'none';
                }
            });
        }

        var closeBtn2 = document.getElementById('close-btn2');
        if (closeBtn2) {
            closeBtn2.addEventListener('click', function() {
                var reportModal = document.getElementById('report-modal');
                if (reportModal) {
                    reportModal.style.display = 'none';
                }
            });
        }

        window.onclick = function(event) {
            var reportModal = document.getElementById('report-modal');
            var sendModal = document.getElementById('send-modal');
            if (event.target == reportModal) {
                reportModal.style.display = 'none';
            }
            if (event.target == sendModal) {
                sendModal.style.display = 'none';
            }
        };

        var approvalBtn = document.getElementById('approval-btn');
        if (approvalBtn) {
            approvalBtn.disabled = true;
            approvalBtn.addEventListener('click', () => {
                var sendModal = document.querySelector('.send-modal');
                if (sendModal) {
                    sendModal.style.display = 'block';
                }
            });

            document.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.addEventListener('change', () => {
                    approvalBtn.disabled = false;
                });
            });
        }

        var sendBtn = document.getElementById('send-btn');
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                let email = document.getElementById('email-input').value;
                let subject = encodeURIComponent("신고 처리 결과");
                let body = encodeURIComponent(document.querySelector('.result-text').value);
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            });
        }
    });

    function openModal(row) {
        var title = row.cells[1].innerText;
        var textBlock = document.getElementById('text-block');
        if (textBlock) {
            textBlock.innerText = title;
        }
        var reportModal = document.getElementById('report-modal');
        if (reportModal) {
            reportModal.style.display = 'block';
        }
    }


