// 다음 섹션으로 이동하는 함수
function moveToNextSection(currentSectionId) {
    var currentSection = document.getElementById(currentSectionId);
    var nextSectionId = parseInt(currentSectionId.split('-')[1]) + 1;
    var nextSection = document.getElementById('contents-' + nextSectionId);

    if (nextSection) {
        currentSection.style.display = 'none';
        nextSection.style.display = 'block';
    }
}

// 이전 섹션으로 이동하는 함수
function moveToPreviousSection(currentSectionId) {
    var currentSection = document.getElementById(currentSectionId);
    var previousSectionId = parseInt(currentSectionId.split('-')[1]) - 1;
    var previousSection = document.getElementById('contents-' + previousSectionId);

    if (previousSection) {
        currentSection.style.display = 'none';
        previousSection.style.display = 'block';
    }
}

// 초기에 첫 번째 섹션을 보여주기
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contents-1').style.display = 'block';
});