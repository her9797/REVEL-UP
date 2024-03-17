// 문의 등록
// 페이지 로드 완료 후 실행되는 함수
window.onload= function() {
    // '심사관련문의하기' 버튼에 대한 이벤트 리스너 설정
    document.getElementById('inq-insert-btn').addEventListener('click', function() {
        showModal();
    });

    // 모달 닫기 버튼에 대한 이벤트 리스너 설정
    document.getElementById('close-inquiry-btn').addEventListener('click', function() {
        closeModal();
    });

    // 현재 시간 표시
    displayCurrentTime();
};

// 모달을 보여주는 함수
function showModal() {
    var modal = document.getElementById('inquiry-modal');
    modal.style.display = 'block';

    const fndCode = eventTarget.innerHTML;

    console.log(fndCode);
    // AJAX를 사용하여 해당 공지사항의 상세 정보를 요청
    $.ajax({
        url: "/content/mypage/setter-refuseList/" + fndCode,
        type: "/GET",
        dataType: "json", // 응답 데이터 형식은 JSON
        data: {fndCode: fndCode},
        success: function(response) {
            // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
            console.log("zzzzzzzzzzz"+fndCode);
            $('#insert-fndCode').text(response.fndCode);
            $('#insert-userId').text(response.userId);
            $('#insert-title').text(response.inqTitle); // 제목 설정
            $('#insert-dateTime').text(response.inqInsertDttm); // 작성날짜 설정
            $('#insert-file').text(response.inqFile); //첨부파일 설정
            $('#insert-content').text(response.inqCont); // 내용 설정
            console.log(fndCode);
            // 모달 창 열기
            $('#inquiry-modal').modal('show');
        },
        error: function(xhr, status, error) {
            // 오류 처리 로직
            console.error(error);
        }
    });

}

// 모달을 숨기는 함수
function closeModal() {
    var modal = document.getElementById('inquiry-modal');
    modal.style.display = 'none';
}

// 현재 시간을 가져와서 HTML에 추가하는 함수
function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 현재 시간을 hh:mm:ss 형식으로 표시
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // HTML 요소에 현재 시간 추가
    document.getElementById("insert-dateTime").textContent = formattedTime;
}

// // 모달 열기 함수
// function openModal(eventTarget) {
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
// }
//
//
