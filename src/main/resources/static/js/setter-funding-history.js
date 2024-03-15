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
            location.reload();
        },
        error: function(xhr, status, error) {
            location.reload();
            console.error('Error:', error);
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



