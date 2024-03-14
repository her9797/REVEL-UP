// function delivModalOpen(fndCode) {
//     value = fndCode;
//     const delivModal = document.getElementById("deliv-modal");
//
//     delivModal.classList.add('showmodal');
//
// }


// 모달창 열림
function openModal() {
    var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
    const modal = document.getElementById('deliv-modal');
    let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isSelected = true; // 라디오 버튼이 선택되었습니다.
            // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
            var selectedRow = radios[i].closest('tr');
            // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
            var trackingNumberCell = selectedRow.querySelector('.trackingNumberCell').textContent.trim();
            // 운송장 번호가 빈 문자열인지 확인합니다.
            if (trackingNumberCell === "") {
                modal.style.display = "block";
                modal.classList.add('showmodal'); // 모달창을 보이게 하는 클래스 추가
            } else {
                // 운송장 번호가 있는 경우, 모달을 표시하지 않고 경고 메시지를 표시할 수 있습니다.
                alert("이미 운송장 번호가 등록된 항목입니다.");
            }
            break; // 첫 번째 선택된 라디오 버튼에 대해서만 처리하고 반복문을 종료합니다.
        }
    }

}

// 모달창 닫힘
function closeModal() {
    const delivModal = document.getElementById('deliv-modal');
    delivModal.style.display = "none"; // 모달창을 숨깁니다
    delivModal.classList.remove('showmodal'); // 'showmodal' 클래스를 제거합니다
}

// function update;

















// // Get the modal
// var modal = document.getElementById("deliv-modal");
//
// // Get radio buttons
// var radios = document.getElementsByName("check");
//
// var trackingNumberCells = document.querySelectorAll('td:last-child');
//
// // When the user clicks on '운송장입력' button, open the modal if a radio button is selected
// function openModal() {
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             modal.style.display = "block";
//             break;
//         }
//     }
// }


//
//
// // When the user clicks on '등록' button, submit the tracking number
// function submitTrackingNumber() {
//     // var trackingNumber = document.getElementById("trackingNumber").value;
//     // var trackingNumberCell = document.getElementById("trackingNumberCell");
//     // trackingNumberCell.textContent = trackingNumber;
//     var trackingNumber = document.getElementById("trackingNumber").value;
//     var selectedRow;
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             selectedRow = radios[i].parentNode.parentNode;  // 라디오 버튼의 부모의 부모는 tr 요소입니다.
//             break;
//         }
//     }
//     if (selectedRow) {
//         var trackingNumberCell = selectedRow.querySelector(".trackingNumberCell");
//         trackingNumberCell.textContent = trackingNumber;
//     }
//     closeModal();
// }
//
// // Get the '등록' button
// var submitBtn = document.getElementById("submit-btn");
//
// submitBtn.addEventListener("click", submitTrackingNumber);
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// function closeModal() {
//     var modal = document.getElementById("deliv-modal");
//     modal.style.display = "none";
// }
//
// document.getElementById("cancel-btn").addEventListener("click", closeModal);