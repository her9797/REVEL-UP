    // 문의 테이블의 각 행에 클릭 이벤트 추가
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.manager_table tr').forEach((row, index) => {
            if (index > 0) {
                row.addEventListener('click', function () {
                    openModal(this);
                });
            }
        });

        var closeButton = document.getElementById('close-btn');
        if(closeButton) {
            closeButton.addEventListener('click', function () {
                var inquiryModal = document.getElementById('inquiry-modal');
                if(inquiryModal) {
                    inquiryModal.style.display = "none";
                }
            });
        }

        window.onclick = function(event) {
            var inquiryModal = document.getElementById('inquiry-modal');
            if(inquiryModal && event.target == inquiryModal) {
                inquiryModal.style.display = "none";
            }
        };
    });
function openModal(row) {
    var title = row.cells[1].innerText;
    var textBlock = document.getElementById('text-block');
    if(textBlock) {
        textBlock.innerText = title;
    }
    var inquiryModal = document.getElementById('inquiry-modal');
    if(inquiryModal) {
        inquiryModal.style.display = "block";
    }
}