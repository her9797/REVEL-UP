$(document).ready(function() {
    // 심사관련문의하기 버튼 클릭 시 모달 열기
    $('#inquiry-btn').click(function(event) {
        event.stopPropagation(); // 부모 요소로 이벤트 전파 방지
        $('#insert-dateTime').val(getCurrentDateTime()); // 현재 시간 입력
        $('#inquiry-modal').show(); // 모달 보이기
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('#close-inquiry-btn').click(function() {
        $('#inquiry-modal').hide(); // 모달 숨기기
    });

    // 모달 외부 클릭 시 모달 닫기
    $(window).click(function(event) {
        if (event.target === $('#inquiry-modal')[0]) {
            $('#inquiry-modal').hide(); // 모달 숨기기
        }
    });
});

// 현재 시간을 가져오는 함수
function getCurrentDateTime() {
    var currentDateTime = new Date();
    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth() + 1;
    var day = currentDateTime.getDate();
    var hour = currentDateTime.getHours();
    var minute = currentDateTime.getMinutes();
    var second = currentDateTime.getSeconds();

    return year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
}

// 한 자리 숫자를 두 자리로 변경하는 함수
function addZero(num) {
    return (num < 10 ? '0' : '') + num;
}


// $(document).ready(function() {
//     // 심사관련문의하기 버튼 클릭 시 모달 열기
//     $('#inquiry-btn').click(function(event) {
//         event.stopPropagation(); // 부모 요소로 이벤트 전파 방지
//         $('#inquiry-modal').show(); // 모달 보이기
//     });
//
//     // 모달 닫기 버튼 클릭 시 모달 닫기
//     $('#close-inquiry-btn').click(function() {
//         $('#inquiry-modal').hide(); // 모달 숨기기
//     });
//
//     // 모달 외부 클릭 시 모달 닫기
//     $(window).click(function(event) {
//         if (event.target === $('#inquiry-modal')[0]) {
//             $('#inquiry-modal').hide(); // 모달 숨기기
//         }
//     });
// });

// // 모달 창을 가져옵니다.
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





// 1차
// 문의 등록
// 페이지 로드 완료 후 실행되는 함수
// window.onload= function() {
//     // '심사관련문의하기' 버튼에 대한 이벤트 리스너 설정
//     document.getElementById('inq-insert-btn').addEventListener('click', function() {
//         showModal();
//     });
//
//     // 모달 닫기 버튼에 대한 이벤트 리스너 설정
//     document.getElementById('close-inquiry-btn').addEventListener('click', function() {
//         closeModal();
//     });
//
//     // 현재 시간 표시
//     displayCurrentTime();
// };
//
// // 모달을 보여주는 함수
// function showModal() {
//     var modal = document.getElementById('inquiry-modal');
//     modal.style.display = 'block';
//
//     const fndCode = eventTarget.innerHTML;
//
//     console.log(fndCode);
//     // AJAX를 사용하여 해당 공지사항의 상세 정보를 요청
//     $.ajax({
//         url: "/content/mypage/setter-refuseList/" + fndCode,
//         type: "/GET",
//         dataType: "json", // 응답 데이터 형식은 JSON
//         data: {fndCode: fndCode},
//         success: function(response) {
//             // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
//             console.log("zzzzzzzzzzz"+fndCode);
//             $('#insert-fndCode').text(response.fndCode);
//             $('#insert-userId').text(response.userId);
//             $('#insert-title').text(response.inqTitle); // 제목 설정
//             $('#insert-dateTime').text(response.inqInsertDttm); // 작성날짜 설정
//             $('#insert-file').text(response.inqFile); //첨부파일 설정
//             $('#insert-content').text(response.inqCont); // 내용 설정
//             console.log(fndCode);
//             // 모달 창 열기
//             $('#inquiry-modal').modal('show');
//         },
//         error: function(xhr, status, error) {
//             // 오류 처리 로직
//             console.error(error);
//         }
//     });
//
// }
//
// // 모달을 숨기는 함수
// function closeModal() {
//     var modal = document.getElementById('inquiry-modal');
//     modal.style.display = 'none';
// }
//
// // 현재 시간을 가져와서 HTML에 추가하는 함수
// function displayCurrentTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//
//     // 현재 시간을 hh:mm:ss 형식으로 표시
//     var formattedTime = hours + ":" + minutes + ":" + seconds;
//
//     // HTML 요소에 현재 시간 추가
//     document.getElementById("insert-dateTime").textContent = formattedTime;
// }
//
