document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.manager_table tr').forEach((row, index) => {
        if (index > 0) {
            row.addEventListener('click', function() {
                openModal(this);
            });
        }
    });

    var updateButton = document.getElementById('update-btn');
    if (updateButton) {
        updateButton.addEventListener('click', function() {
            var title = document.getElementById('text-block');
            var content = document.querySelector('.text');

            var titleInput = document.createElement('input');
            titleInput.type = "text";
            titleInput.value = title.innerText;
            title.parentNode.replaceChild(titleInput, title);

            var contentInput = document.createElement('textarea');
            contentInput.value = content.innerText;
            content.parentNode.replaceChild(contentInput, content);

            var saveButton = document.createElement('button');
            saveButton.innerText = "저장하기";
            saveButton.addEventListener('click', function() {
                title = document.createElement('span');
                title.id = "text-block";
                title.className = "text-box";
                title.innerText = titleInput.value;
                titleInput.parentNode.replaceChild(title, titleInput);

                content = document.createElement('div');
                content.className = "text";
                content.innerText = contentInput.value;
                contentInput.parentNode.replaceChild(content, contentInput);

                this.parentNode.removeChild(this);
            });
            this.parentNode.appendChild(saveButton);
        });
    }

    var closeButton = document.getElementById('close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            var noticeModal = document.getElementById('notice-modal');
            if (noticeModal) {
                noticeModal.style.display = "none";
            }
        });
    }

    window.onclick = function(event) {
        var noticeModal = document.getElementById('notice-modal');
        if (noticeModal && event.target == noticeModal) {
            noticeModal.style.display = 'none';
        }
    };
});

function openModal(row) {
    var title = row.cells[1].innerText;
    var textBlock = document.getElementById('text-block');
    if (textBlock) {
        textBlock.innerText = title;
    }
    var noticeModal = document.getElementById('notice-modal');
    if (noticeModal) {
        noticeModal.style.display = 'block';
    }
}