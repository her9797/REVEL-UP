// 모달 창을 가져옵니다.
// function insertInq(fndCode) {
//     console.log("fndCode4 : " + fndCode);
//
//     $.ajax({
//         url: `/content/mypage/insertInq`,
//         method: 'POST',
//         data: { fndCode : fndCode},
//         success: function(data) {
//             console.log(data); // 서버로부터의 응답을 콘솔에 출력
//             // closeModal();
//             // location.reload();
//             $('#' + fndCode).hide(); // 삭제된 펀딩 항목의 DOM 요소를 제거
//
//             // 페이지 새로고침 없이 해당 펀딩 삭제 후 목록 갱신
//             // 여기에서 페이지 갱신이 필요한 경우 갱신 로직을 추가할 수 있습니다.
//         },
//         error: function(xhr, status, error) {
//             console.error(error); // 에러 메시지 콘솔에 출력
//             alert('삭제 중 오류가 발생했습니다.');
//         }
//     });
// }
//
// function openModal(button) {
//     const imageBox = $(button).closest('.image-box');
//     // const successAmt = parseInt(imageBox.find('#successAmt').text().replace('달성액 : ', '').replace('원', '').trim());
//
//     // console.log("successAmt : " + successAmt);
//     // if (successAmt > 0) {
//     //     alert('달성액이 있는 펀딩은 삭제할 수 없습니다.');
//     // } else {
//     //     const fndCode = $(button).siblings('.detail-btn').attr('href').split('/').pop();
//     //     console.log("fndCode1 : " + fndCode);
//
//         $('#inquiry-modal').show();
//         $('#insert-confirm-btn').attr('data-fndCode', fndCode);
//         console.log("fndCode2 : " + fndCode);
//     // }
// }
//
// function closeModal() {
//     $('#deleteModal').hide();
// }
//
// $(document).ready(function() {
//     $('#confirmDelete').click(function() {
//         const fndCode = $(this).attr('data-fndCode');
//         console.log("fndCode3 : " + fndCode);
//         deleteFnd(fndCode);
//     });
//
//     $('#cancelDelete').click(function() {
//         closeModal();
//     });
// });

// 모달창 열림
// function openInquiryModal(fndCode) {
//     document.getElementById('fndCode').value = fndCode;
//     document.getElementById('inquiry-modal').style.display = 'block';
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//     var inquiryButtons = document.querySelectorAll(".inquiry");
//
//     inquiryButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             var modal = document.getElementById("inquiry-modal");
//             modal.style.display = "block";
//         });
//     });
//
//     var closeBtn = document.getElementById("close-inquiry-btn");
//     closeBtn.addEventListener("click", function() {
//         var modal = document.getElementById("inquiry-modal");
//         modal.style.display = "none";
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     var inquiryButtons = document.querySelectorAll(".inquiry");
//
//     inquiryButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             var modal = document.getElementById("inquiry-modal");
//             modal.style.display = "block";
//
//             // 클릭한 버튼의 부모 요소에서 펀딩번호와 작성자 정보를 가져와 입력 필드에 설정
//             var fndCode = button.dataset.fndCode;
//             var userId = button.dataset.userId;
//             document.getElementById("insert-fndCode").value = fndCode;
//             document.getElementById("insert-userId").value = userId;
//         });
//     });
//
//     var closeBtn = document.getElementById("close-inquiry-btn");
//     closeBtn.addEventListener("click", function () {
//         var modal = document.getElementById("inquiry-modal");
//         modal.style.display = "none";
//     });
//
//     var confirmBtn = document.getElementById("insert-confirm-btn");
//     confirmBtn.addEventListener("click", function () {
//         // 입력된 정보 가져오기
//         var fndCode = document.getElementById("insert-fndCode").value;
//         var userId = document.getElementById("insert-userId").value;
//         var title = document.getElementById("insert-title").value;
//         var content = document.getElementById("insert-content").value;
//         var file = document.getElementById("insert-file").files[0]; // 파일은 File 객체로 가져오기
//
//         // FormData 객체 생성하여 정보 추가
//         var formData = new FormData();
//         formData.append("fndCode", fndCode);
//         formData.append("userId", userId);
//         formData.append("inqTitle", title);
//         formData.append("inqCont", content);
//         formData.append("inqFile", file);
//
//         // AJAX를 사용하여 서버에 전송
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "/content/mypage/insertInq");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     // 성공적으로 처리된 경우
//                     alert("문의가 등록되었습니다.");
//                     location.reload(); // 페이지 새로고침
//                 } else {
//                     // 오류 발생 시
//                     alert("문의 등록에 실패했습니다.");
//                 }
//             }
//         };
//         xhr.send(formData); // FormData를 전송
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     var inquiryButtons = document.querySelectorAll(".inquiry");
//
//     inquiryButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             var modal = document.getElementById("inquiry-modal");
//             modal.style.display = "block";
//
//             // 클릭한 버튼의 부모 요소에서 펀딩번호와 작성자 정보를 가져와 입력 필드에 설정
//             var fndCode = button.parentNode.querySelector("[name='fndCode']").value;
//             var userId = button.parentNode.querySelector("[name='userId']").value;
//             document.getElementById("insert-fndCode").value = fndCode;
//             document.getElementById("insert-userId").value = userId;
//         });
//     });
//
//     var closeBtn = document.getElementById("close-inquiry-btn");
//     closeBtn.addEventListener("click", function () {
//         var modal = document.getElementById("inquiry-modal");
//         modal.style.display = "none";
//     });
//
//     var confirmBtn = document.getElementById("insert-confirm-btn");
//     confirmBtn.addEventListener("click", function () {
//         // 입력된 정보 가져오기
//         var fndCode = document.getElementById("insert-fndCode").value;
//         var userId = document.getElementById("insert-userId").value;
//         var title = document.getElementById("insert-title").value;
//         var content = document.getElementById("insert-content").value;
//         var file = document.getElementById("insert-file").files[0]; // 파일은 File 객체로 가져오기
//
//         // FormData 객체 생성하여 정보 추가
//         var formData = new FormData();
//         formData.append("fndCode", fndCode);
//         formData.append("userId", userId);
//         formData.append("inqTitle", title);
//         formData.append("inqCont", content);
//         formData.append("inqFile", file);
//
//         // AJAX를 사용하여 서버에 전송
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "/content/mypage/insertInq");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     // 성공적으로 처리된 경우
//                     alert("문의가 등록되었습니다.");
//                     location.reload(); // 페이지 새로고침
//                 } else {
//                     // 오류 발생 시
//                     alert("문의 등록에 실패했습니다.");
//                 }
//             }
//         };
//         xhr.send(formData); // FormData를 전송
//     });
// });


// 모달 열기 함수
// function openInquiryModal(button) {
//     var fndCode = button.getAttribute('data-fndCode');
//     var userId = button.getAttribute('data-userId');
//     document.getElementById('insert-fndCode').value = fndCode;
//     document.getElementById('insert-userId').value = userId;
//     document.getElementById('inquiry-modal').style.display = 'block';
// }
//
// // 모달 닫기 함수
// function closeModal() {
//     document.getElementById('inquiry-modal').style.display = 'none';
// }
//
// // 등록하기 버튼 클릭 시 등록 처리 함수
// function submitInquiry() {
//     var fndCode = document.getElementById('insert-fndCode').value;
//     var userId = document.getElementById('insert-userId').value;
//     var inqTitle = document.getElementById('insert-title').value;
//     var inqCont = document.getElementById('insert-content').value;
//     // AJAX 요청 보내기
//     $.ajax({
//         url: '/content/mypage/insertInq',
//         type: 'POST',
//         data: {
//             fndCode: fndCode,
//             userId: userId,
//             inqTitle: inqTitle,
//             inqCont: inqCont
//         },
//         success: function(response) {
//             // 요청 성공 시 처리
//             console.log(response);
//             // 성공 시 모달 닫기 등 추가 동작 수행
//         },
//         error: function(xhr, status, error) {
//             // 요청 실패 시 처리
//             console.error(error);
//             // 실패 시 메시지 표시 등 추가 동작 수행
//         }
//     });
// }



// 페이지의 로드가 완료된 후에 실행될 함수 정의
window.onload = function() {
    // 현재 시간 표시
    displayCurrentTime();
    // 여기에 기존의 코드를 추가해주세요
};

// 현재 시간을 가져와서 HTML에 추가하는 함수
function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 시, 분, 초가 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 표시
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // 현재 시간을 hh:mm:ss 형식으로 표시
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // HTML 요소에 현재 시간 추가
    document.getElementById("current-time-value").textContent = formattedTime;
}

// 모달 열기 함수
function openInquiryModal(button) {
    var fndCode = button.getAttribute('data-fndCode');
    var userId = button.getAttribute('data-userId');
    document.getElementById('insert-fndCode').value = fndCode;
    document.getElementById('insert-userId').value = userId;
    // 현재 날짜 설정
    var currentDate = new Date().toISOString().slice(0, 10);
    document.getElementById('insert-dateTime').value = currentDate;
    document.getElementById('inquiry-modal').style.display = 'block';
}

// 모달 닫기 함수
function closeModal() {
    document.getElementById('inquiry-modal').style.display = 'none';
}

// 등록하기 버튼 클릭 시 등록 처리 함수
function submitInquiry() {
    var fndCode = document.getElementById('insert-fndCode').value;
    var userId = document.getElementById('insert-userId').value;
    var inqTitle = document.getElementById('insert-title').value;
    var inqCont = document.getElementById('insert-content').value;
    var formData = new FormData();
    formData.append('fndCode', fndCode);
    formData.append('userId', userId);
    formData.append('inqTitle', inqTitle);
    formData.append('inqCont', inqCont);
    // AJAX를 사용하여 데이터 전송
    $.ajax({
        type: 'POST',
        url: '/content/mypage/insertInq',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            // 성공 시 추가 동작 수행
        },
        error: function(error) {
            console.error(error);
            // 실패 시 추가 동작 수행
        }
    });
}