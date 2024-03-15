



// $(document).ready(function() {
// $('#fnd-delete-btn').on('click', function(event) {
//     event.preventDefault(); // 폼의 기본 동작(새로고침)을 막음
//
//     var fndCode = $(this).data('fndCode');
//
//
//         $('#confirmDelete').click(function () {
//             var fndCode = $(this).data('fnd-code'); // 확인 버튼에서 fndCode 값을 가져옴
//             $.post("/deleteFnd", {fndCode: fndCode}, function (data) {
//                 // 삭제 성공 후의 동작 (예: 페이지 새로고침)
//                 location.reload();
//             });
//         });
//
//         $('#cancelDelete').click(function () {
//             $('#deleteModal').hide(); // 모달을 숨김
//         });
//     });
// });


// 3차
// $('#fnd-delete-btn').on('click', function(event) {
//     event.preventDefault(); // 폼의 기본 동작(새로고침)을 막음
//     var fndCode = $(this).data('fndCode');
//     console.log(fndCode);
//     // 모달 표시 코드 추가
//     // $('#deleteModal').modal('show'); // Bootstrap 모달인 경우
//     // 또는
//     // $('#deleteModal').show(); // 단순히 숨기고 보이게 하는 경우
//     $('#deleteModal').block;
// });
//
//
// // #confirmDelete 클릭 이벤트를 외부로 이동
// $('#confirmDelete').off().on('click', function () {
//     var fndCode = $(this).data('fnd-code');
//     $.post("/deleteFnd", {fndCode: fndCode}, function (data) {
//         location.reload();
//     });
// });
//
// $('#cancelDelete').off().on('click', function () {
//     $('#deleteModal').hide();
// });



// function openModal() {
//     // 모달 엘리먼트를 가져옵니다.
//     const modal = document.getElementById('deleteModal');
//     // 모달의 display 속성을 'block'으로 변경하여 화면에 표시합니다.
//     modal.style.display = 'block';
//
//     // 모달 외부를 클릭했을 때 모달을 닫는 이벤트 리스너를 추가합니다.
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// }

//
// $(document).ready(function() {
//     // '확인' 버튼 클릭 이벤트 리스너 설정
//     $('#confirmDelete').on('click', function() {
//         // 저장된 fndCode 값을 가져옵니다.
//         var fndCode = $('#fnd-delete-btn').data('fnd-code');
//         deleteFnd(fndCode); // 공지사항 삭제 함수 호출
//         $('#deleteModal').modal('hide'); // 모달 닫기
//     });
//
// });
//
//
// // 모달 열기 함수
// function openModal(element) {
//     var fndCode = element.getAttribute('data-fndcode');
//     console.log(fndCode);
//     // AJAX를 사용하여 해당 공지사항의 상세 정보를 요청
//     $.ajax({
//
//         url: "/content/mypage/delete/" + fndCode,
//         type: "GET",
//         dataType: "json", // 응답 데이터 형식은 JSON
//         data:
//             {fndCode: fndCode},
//         success: function () {
//             // 응답 받은 데이터를 사용하여 모달 창에 값을 채워 넣기
//             console.log("@@@@@@@" + fndCode);
//             // 모달 창 열기
//             $('#deleteModal').modal('show');
//             // 삭제 및 수정 버튼에 해당 공지사항의 코드 저장
//             $('#fnd-delete-btn').data('fnd-code', fndCode);
//         },
//         error: function (xhr, status, error) {
//             // 오류 처리 로직
//             console.error(error);
//         }
//     });
//
//     // 삭제 버튼 클릭 시 해당 공지사항 삭제
//     $('#fnd-delete-btn').on('click', function () {
//         var fndCode = $(this).data('fnd-code'); // 삭제할 공지사항의 코드 가져오기
//         deleteFnd(fndCode);
//         // 모달 닫기
//         $('#notice-modal').modal('hide');
//     });
//
//
//     // 공지사항 삭제 함수
//     function deleteFnd(fndCode) {
//         // AJAX를 사용하여 서버에 POST 요청 보내기
//         $.ajax({
//             url: '/content/mypage/delete/' + fndCode,
//             type: 'POST',
//             data: {
//                 // 요청에 필요한 데이터 추가
//                 // 예시로 공지 코드를 전달한다고 가정하고, ntcCode 변수에 해당하는 값을 전달
//                 fndCode: fndCode
//             },
//             success: function (response) {
//                 // 성공적으로 서버 요청이 처리된 경우 실행할 코드 작성
//                 console.log('삭제 요청이 성공적으로 처리되었습니다.');
//                 location.reload(); // 페이지 리로드
//             },
//             error: function (xhr, status, error) {
//                 // 서버 요청 처리 중 오류가 발생한 경우 실행할 코드 작성
//                 console.error('삭제 요청 중 오류가 발생하였습니다.');
//             }
//
//         });
//
//     }
// }
//
// // '취소' 버튼을 클릭했을 때 모달을 닫는 기능을 추가합니다.
// function closeModal() {
//     document.getElementById('deleteModal').style.display = 'none';
// }



// 4차 00000 알럿, 모달 둘다 뜸
// document.addEventListener('DOMContentLoaded', function() {
//     var deleteButtons = document.querySelectorAll('.fnd-delete-btn');
//     deleteButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             var fndCode = this.closest('.image-box').querySelector('.detail-btn').getAttribute('href').split('/').pop();
//             openModal(this, fndCode);
//         });
//     });
// });
//
// function openModal(button, fndCode) {
//     console.log(fndCode); // 이곳에서 fndCode를 확인할 수 있습니다. 실제 구현시에는 console.log 대신 모달을 열어주는 로직을 구현하세요.
//
//     $(document).ready(function() {
//         // '확인' 버튼 클릭 이벤트
//         $('#confirmDelete').on('click', function() {
//             var fndCode = $('#fnd-delete-btn').data('fnd-code');
//             deleteFnd(fndCode);
//             $('#deleteModal').modal('hide');
//         });
//
//             // '삭제' 버튼 클릭 이벤트를 모든 삭제 버튼에 대해 설정
//              var fndCode = $(this).attr('data-fndcode'); // 삭제할 공지사항 코드 가져오기
//             console.log(fndCode);
//             // 모달 창에 삭제할 공지사항의 코드 저장
//             $('#fnd-delete-btn').data('fnd-code', fndCode);
//             // 모달 창 열기
//             $('#deleteModal').modal('show');
//             // '취소' 버튼에 closeModal 함수 연결하기
//             $('#cancelDelete').click(closeModal);
//
//
//     });
//
//     function deleteFnd(fndCode) {
//         console.log(fndCode);
//
//         $.ajax({
//             url: '/content/mypage/delete/' + fndCode,
//             type: 'POST',
//             data: { fndCode: fndCode },
//             success: function(data) {
//                 console.log(data);
//                 console.log('삭제 요청이 성공적으로 처리되었습니다.');
//                 location.reload();
//             },
//             error: function(xhr, status, error) {
//                 console.error('삭제 요청 중 오류가 발생하였습니다.');
//             }
//         });
//     }
//
//
//
//         // '취소' 버튼 클릭 시 모달 닫기
//         function closeModal() {
//             $('#deleteModal').modal('hide');
//         }
//
//         // '취소' 버튼에 closeModal 함수 연결하기
//         $('#cancelDelete').click(closeModal);
//
//
// }

// 5차 0000000000 알럿 안뜸
// document.addEventListener('DOMContentLoaded', function() {
//     var deleteButtons = document.querySelectorAll('.fnd-delete-btn');
//     deleteButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//
//             // var successAmt = this.closest('.image-box').querySelector('[data-success-amt]').getAttribute('data-success-amt');
//             var fndCode = this.closest('.image-box').querySelector('.detail-btn').getAttribute('href').split('/').pop();
//
//             var successAmt = $('#successAmt').val();
//
//             $.post("content/mypage/setter-fndList", {successAmt : successAmt}, function (successAmtData) {
//                 if(successAmtData === 0) {
//                     console.log(successAmtData)
//                     openModal(fndCode); // 모달을 여는 함수에 fndCode를 넘겨줍니다.
//                 } else {
//                     console.log(successAmtData)
//                     alert('달성액이 있어 펀딩을 삭제하지 못합니다.');
//                     return; // 달성액이 0이 아니면 여기서 함수 실행을 중단합니다.
//
//                 }
//             })
//
//
//             // if ("${allFnd.successAmt}" !== 0) {
//             //     console.log(successAmt)
//             //     alert('달성액이 있어 펀딩을 삭제하지 못합니다.');
//             //     return; // 달성액이 0이 아니면 여기서 함수 실행을 중단합니다.
//             //
//             // } else {
//             //     console.log(successAmt)
//             //     openModal(fndCode); // 모달을 여는 함수에 fndCode를 넘겨줍니다.
//             // }
//         });
//     });
// });
//
// function openModal(fndCode) {
//     console.log(fndCode); // 이곳에서 fndCode를 확인할 수 있습니다.
//
//     $('#confirmDelete').data('fnd-code', fndCode); // '확인' 버튼에 fndCode 저장
//
//     $('#deleteModal').modal('show');
//
//     // '취소' 버튼에 closeModal 함수 연결
//     $('#cancelDelete').click(closeModal);
// }
//
// $(document).ready(function() {
//     // '확인' 버튼 클릭 이벤트
//     $('#confirmDelete').on('click', function() {
//         var fndCode = $(this).data('fnd-code'); // '확인' 버튼에서 fndCode 가져오기
//         deleteFnd(fndCode);
//     });
// });
//
// function deleteFnd(fndCode) {
//     console.log('fndCode : ' + fndCode);
//
//     $.ajax({
//         url: '/content/mypage/delete/' + fndCode,
//         type: 'POST',
//         data: { fndCode: fndCode },
//         success: function(data) {
//             console.log(data);
//             console.log('삭제 요청이 성공적으로 처리되었습니다.');
//             location.reload();
//         },
//         error: function(xhr, status, error) {
//             console.error('삭제 요청 중 오류가 발생하였습니다.');
//         }
//     });
// }
//
// function closeModal() {
//     $('#deleteModal').modal('hide');
// }


// 6차
$(document).ready(function() {
    // 기존 삭제 버튼 클릭 이벤트
    var deleteButtons = document.querySelectorAll('.fnd-delete-btn');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var fndCode = this.closest('.image-box').querySelector('.detail-btn').getAttribute('href').split('/').pop();
            var successAmt = $('#successAmt').val();

            $.post("/content/mypage/setter-fndList", {successAmt : successAmt}, function (successAmtData) {
                if(successAmtData === 0) {
                    console.log(successAmtData)
                    openModal(fndCode);
                } else {
                    console.log(successAmtData)
                    alert('달성액이 있어 펀딩을 삭제하지 못합니다.');
                    return;
                }
            })
        });
    });

    // 새로운 삭제 버튼 클릭 이벤트 추가
    $('.delete-btn').click(function() {
        var fndCode = $(this).data('fnd-code');

        $.ajax({
            url: "/setter-fndList/" + fndCode,
            type: "POST",
            data: { fndCode: fndCode },
            success: function(response) {
                if(response.successAmt === 0) {
                    openModal(fndCode);
                } else {
                    alert('달성액이 있어 펀딩을 삭제하지 못합니다.');
                }
            },
            error: function(xhr, status, error) {
                console.error('오류 발생: ', error);
            }
        });
    });

    // 모달 창 열기
    function openModal(fndCode) {
        console.log(fndCode);

        $('#confirmDelete').data('fnd-code', fndCode);

        $('#deleteModal').modal('show');

        $('#cancelDelete').click(closeModal);
    }

    // '확인' 버튼 클릭 이벤트
    $('#confirmDelete').on('click', function() {
        var fndCode = $(this).data('fnd-code');
        deleteFnd(fndCode);
    });

    // 펀딩 삭제 함수
    function deleteFnd(fndCode) {
        console.log('fndCode : ' + fndCode);

        $.ajax({
            url: '/content/mypage/delete/' + fndCode,
            type: 'POST',
            data: { fndCode: fndCode },
            success: function(data) {
                console.log(data);
                console.log('삭제 요청이 성공적으로 처리되었습니다.');
                location.reload();
            },
            error: function(xhr, status, error) {
                console.error('삭제 요청 중 오류가 발생하였습니다.');
            }
        });
    }

    // 모달 창 닫기
    function closeModal() {
        $('#deleteModal').modal('hide');
    }
});