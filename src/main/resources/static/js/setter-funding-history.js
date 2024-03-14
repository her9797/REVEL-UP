
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


// 모달 작성완료(켜짐켜짐 삭제 xxxxxx)
// 이벤트 리스너를 추가해 '운송장 입력' 버튼 클릭 시 openModal 함수가 실행되도록 합니다.
// document.getElementById('open-deliv-modal').addEventListener('click', openModal);
//
//
// // 모달창 열림
// function openModal() {
//     var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
//     const modal = document.getElementById('deliv-modal'); // 모달 창을 가져옵니다.
//     let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그
//
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             isSelected = true; // 라디오 버튼이 선택되었습니다.
//             var selectedRow = radios[i].closest('tr'); // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
//             console.log(selectedRow);
//
//             var trackingNumberElement = selectedRow.querySelector('.trackingNumberCell');
//             var trackingNumber = trackingNumberElement ? trackingNumberElement.textContent.trim() : ""; // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
//             console.log(trackingNumber);
//
//             // 운송장 번호가 없는 경우 모달창을 엽니다.
//             if (!trackingNumber) {
//                 modal.style.display = 'block';
//                 return; // 모달을 열고 함수를 종료합니다.
//             }
//         }
//     }
//
//     if (!isSelected) {
//         alert("라디오 버튼을 선택해주세요.");
//     }
// }

// 모달창 닫힘
// function closeModal() {
//     const delivModal = document.getElementById('deliv-modal');
//     delivModal.style.display = "none"; // 모달창을 숨깁니다
//     delivModal.classList.remove('showmodal'); // 'showmodal' 클래스를 제거합니다
// }









// 2차
// function openModal(button) {
//
//     var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
//     const modal = document.getElementById('deliv-modal');
//     let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그


// 3차
// function openModal() {
//     var radios = document.getElementsByName('check'); // 라디오 버튼들을 가져옵니다.
//     const modal = document.getElementById('deliv-modal'); // 모달 창을 가져옵니다.
//     let isSelected = false; // 라디오 버튼이 선택되었는지 확인하는 플래그
//
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             isSelected = true; // 라디오 버튼이 선택되었습니다.
//             var selectedRow = radios[i].closest('tr'); // 선택된 라디오 버튼의 부모 노드(즉, tr 요소)를 찾습니다.
//             console.log(selectedRow);
//
//             var trackingNoElement = selectedRow.querySelector('.trackingNoCell');
//             var trackingNo = trackingNoElement ? trackingNoElement.textContent.trim() : ""; // 해당 행에서 운송장 번호 셀의 내용을 확인합니다.
//             console.log(trackingNo);
//
//             // 운송장 번호가 없는 경우 모달창을 엽니다.
//             if (!trackingNo) {
//                 modal.style.display = 'block';
//
//                 function updateTrackingNo() {
//
//                     let value;
//                     var plgCode = value;
//
//                     var trackingNo = $('#trackingValue').val();
//                     console.log(trackingNo);
//
//                     // // var trackingNumber = document.getElementById('trackingNumber').value;
//                     // var selectedRadio = document.querySelector('input[name="check"]:checked');
//                     // // var plgCode = selectedRadio.closest('tr').querySelector('td:nth-child(2)').textContent;
//                     // console.log(plgCode);
//
//
//                     // jQuery의 $.ajax 메소드를 사용하여 비동기 통신을 구현합니다.
//                     $.ajax({
//                         type: 'POST', // HTTP 요청 방식을 POST로 설정합니다.
//                         url: '/content/mypage/updateTrackingNo', // 요청을 보낼 서버의 URL 주소입니다.
//                         data: {
//                             'plgCode': plgCode
//                             , 'trackingNo': trackingNo
//                         }, // 서버로 보낼 데이터
//                         // contentType: 'application/json', // 요청의 Content-Type 헤더를 설정합니다.
//                         dataType: 'json', // 서버로부터 기대하는 응답 데이터의 타입입니다.
//                         success: function(data) { // 요청이 성공적으로 완료되었을 때 호출될 함수입니다.
//
//                             const delivModal = document.getElementById('deliv-modal');
//                             // if(data.success) {
//                             //     alert('운송장 번호가 성공적으로 업데이트되었습니다.');
//                             closeModal();
//                             //     // 페이지를 새로고침하거나, 특정 엘리먼트를 업데이트하는 로직을 추가할 수 있습니다.
//                             // } else {
//                             //     alert('업데이트에 실패했습니다.');
//                             // }
//                         },
//                         error: function(xhr, status, error) { // 요청이 실패했을 때 호출될 함수입니다.
//                             console.error('Error:', error);
//                             alert('업데이트에 실패했습니다.');
//                         }
//                     });
//                 }
//                 return; // 모달을 열고 함수를 종료합니다.
//             }
//         }
//     }
//
//     if (!isSelected) {
//         alert("라디오 버튼을 선택해주세요.");
//     }
// }


// 4차
// updateTrackingNo 함수를 전역 스코프로 이동
function updateTrackingNo() {
    var trackingNo = $('#trackingValue').val();
    console.log('trackingNo : ' + trackingNo);
    var selectedRadio = document.querySelector('input[name="check"]:checked');
    if (!selectedRadio) {
        alert('라디오 버튼을 선택해주세요.');
        return;
    }
    var plgCode = selectedRadio.closest('tr').querySelector('td:nth-child(2)').textContent;
    console.log('plgCode : ' + plgCode);

    // jQuery의 $.ajax 메소드를 사용하여 비동기 통신을 구현합니다.
    $.ajax({
        type: 'POST',
        // url: '/updateTrackingNo',
        url: '/content/mypage/updateTrackingNo',
        data: { 'plgCode': plgCode,
            'trackingNo': trackingNo
        },
        dataType: 'json',
        success: function(data) {

            const delivModal = document.getElementById('deliv-modal');
            alert('운송장 번호가 성공적으로 업데이트되었습니다.');
            closeModal();
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            alert('업데이트에 실패했습니다.');
        }
    });
}

// openModal 함수 수정
function openModal() {
    var radios = document.getElementsByName('check');
    const modal = document.getElementById('deliv-modal');
    let isSelected = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isSelected = true;
            var selectedRow = radios[i].closest('tr');
            console.log(selectedRow);

            var trackingNoElement = selectedRow.querySelector('.trackingNoCell');
            var trackingNo = trackingNoElement ? trackingNoElement.textContent.trim() : "";
            console.log(trackingNo);

            if (!trackingNo) {
                modal.style.display = 'block';
                return;
            }
        }
    }

    if (!isSelected) {
        alert("라디오 버튼을 선택해주세요.");
    }
}

function closeModal() {
    document.getElementById('deliv-modal').style.display = 'none';
}




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


