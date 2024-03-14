
// 모달창 열림( 작동됨 지우지 않기!!!!!!!)
// function openModal() {
//     var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
//     const modal = document.getElementById('deliv-modal');
//     let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그
//
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             isSelected = true; // 라디오 버튼이 선택되었습니다.
//             // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
//             var selectedRow = radios[i].closest('tr');
//             // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
//             var trackingNumberCell = selectedRow.querySelector('.trackingNumberCell').textContent.trim();
//             // 운송장 번호가 빈 문자열인지 확인합니다.
//             if (trackingNumberCell === "") {
//                 modal.style.display = "block";
//                 modal.classList.add('showmodal'); // 모달창을 보이게 하는 클래스 추가
//             } else {
//                 // 운송장 번호가 있는 경우, 모달을 표시하지 않고 경고 메시지를 표시할 수 있습니다.
//                 alert("이미 운송장 번호가 등록된 항목입니다.");
//             }
//             break; // 첫 번째 선택된 라디오 버튼에 대해서만 처리하고 반복문을 종료합니다.
//         }
//     }
//
// }



// 이벤트 리스너를 추가해 '운송장 입력' 버튼 클릭 시 openModal 함수가 실행되도록 합니다.
document.getElementById('open-deliv-modal').addEventListener('click', openModal);


// 모달창 열림
function openModal() {
    var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
    const modal = document.getElementById('deliv-modal'); // 모달 창을 가져옵니다.
    let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isSelected = true; // 라디오 버튼이 선택되었습니다.
            var selectedRow = radios[i].closest('tr'); // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
            console.log(selectedRow);

            var trackingNumberElement = selectedRow.querySelector('.trackingNumberCell');
            var trackingNumber = trackingNumberElement ? trackingNumberElement.textContent.trim() : ""; // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
            console.log(trackingNumber);

            // 운송장 번호가 없는 경우 모달창을 엽니다.
            if (!trackingNumber) {
                modal.style.display = 'block';
                return; // 모달을 열고 함수를 종료합니다.
            }
        }
    }

    if (!isSelected) {
        alert("라디오 버튼을 선택해주세요.");
    }
}

// 모달창 닫힘
function closeModal() {
    const delivModal = document.getElementById('deliv-modal');
    delivModal.style.display = "none"; // 모달창을 숨깁니다
    delivModal.classList.remove('showmodal'); // 'showmodal' 클래스를 제거합니다
}







// 2차
// function openModal(button) {
//
//     var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
//     const modal = document.getElementById('deliv-modal');
//     let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그
//
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             isSelected = true; // 라디오 버튼이 선택되었습니다.
//             var selectedRow = radios[i].closest('tr'); // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
//             console.log(selectedRow)
//
//             var trackingNumberElement = selectedRow.querySelector('.trackingNumberCell');
//             var trackingNumberCell = trackingNumberElement ? trackingNumberElement.textContent.trim() : null; // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
//             console.log(trackingNumberCell)
//
//             // 운송장 번호가 없고 배송상태가 'S'(배송중)일 때 모달창을 엽니다.
//             if (delivStat === 'S') {
//                 modal.style.display = "block";
//                 modal.classList.add('showmodal'); // 모달창을 보이게 하는 클래스 추가
//             } else if(trackingNumberCell === null || trackingNumberCell === '') {
//                 // 운송장 번호가 없고, 배송상태가 'R'(선물준비중) 또는 'F'(배송완료)일 경우 경고창을 띄웁니다.
//                 alert("이미 운송장 번호가 등록되었거나 선물준비중인 항목입니다.");
//             }
//
//             break; // 첫 번째 선택된 라디오 버튼에 대해서만 처리하고 반복문을 종료합니다.
//         }
//
//     }
//
//     if (!isSelected) {
//         alert("항목을 선택해주세요.");   // 라디오 버튼이 하나도 선택되지 않았을 경우 경고창을 띄웁니다.
//     }
// }


