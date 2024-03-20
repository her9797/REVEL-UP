/* 등록 시 이전, 다음 버튼으로 페이지 이동하는 것처럼 보이는 화면 구현 js */
function insert1() {

    document.getElementById("insert1").style.display = "flex";
    document.getElementById("insert2").style.display = "none";
    document.getElementById("insert3").style.display = "none";
    document.getElementById("insert4").style.display = "none";
    document.getElementById("insert5").style.display = "none";
    document.getElementById("insert6").style.display = "none";
};

function insert2() {

    document.getElementById("insert1").style.display = "none";
    document.getElementById("insert2").style.display = "flex";
    document.getElementById("insert3").style.display = "none";
    document.getElementById("insert4").style.display = "none";
    document.getElementById("insert5").style.display = "none";
    document.getElementById("insert6").style.display = "none";
};

function insert3() {

    document.getElementById("insert1").style.display = "none";
    document.getElementById("insert2").style.display = "none";
    document.getElementById("insert3").style.display = "flex";
    document.getElementById("insert4").style.display = "none";
    document.getElementById("insert5").style.display = "none";
    document.getElementById("insert6").style.display = "none";
};

function insert4() {

    document.getElementById("insert1").style.display = "none";
    document.getElementById("insert2").style.display = "none";
    document.getElementById("insert3").style.display = "none";
    document.getElementById("insert4").style.display = "flex";
    document.getElementById("insert5").style.display = "none";
    document.getElementById("insert6").style.display = "none";
};

function insert5() {

    document.getElementById("insert1").style.display = "none";
    document.getElementById("insert2").style.display = "none";
    document.getElementById("insert3").style.display = "none";
    document.getElementById("insert4").style.display = "none";
    document.getElementById("insert5").style.display = "flex";
    document.getElementById("insert6").style.display = "none";
};

function insert6() {

    document.getElementById("insert1").style.display = "none";
    document.getElementById("insert2").style.display = "none";
    document.getElementById("insert3").style.display = "none";
    document.getElementById("insert4").style.display = "none";
    document.getElementById("insert5").style.display = "none";
    document.getElementById("insert6").style.display = "flex";
};

function validateAndProceed() {
    // 폼 유효성을 검사합니다.
    if (validateForm()) {
        // 유효성 검사를 통과하면 다음 단계로 이동합니다.
        insert2(); // 다음 단계로 이동하는 함수 호출
    }
}

function validateForm() {
    var agreementCheckbox = document.getElementById("agreementCheckbox");
    var privacyCheckbox = document.getElementById("privacyCheckbox");

    if (!agreementCheckbox.checked) {
        alert("이용약관에 동의해야 합니다.");
        return false; // 폼 제출을 중지합니다.
    }

    if (!privacyCheckbox.checked) {
        alert("개인정보 수집 및 이용에 동의해야 합니다.");
        return false; // 폼 제출을 중지합니다.
    }

    // 이상이 없으면 폼 제출을 진행합니다.
    return true;
}


// 사업자번호 유효성 검사 함수
function validateSttrRegistNo() {
    var registNo = document.getElementById('regist-no1').value;
    var errorElement = document.getElementById('sttrRegistNoError');

    if (registNo.length < 1 ||registNo.length > 10) {
        errorElement.textContent = "10자의 올바른 사업자번호를 작성해 주세요.";
        document.getElementById('regist-no1').value = registNo.slice(0, 30);
        return false; // 유효성 검사 실패
    } else {
        errorElement.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function validateSttrCompany() {
    var sttrCompany = document.getElementById('company-name1').value;
    var sttrCompanyError = document.getElementById('sttrCompanyError');

    if (sttrCompany.trim() === "") {
        sttrCompanyError.textContent = "상호(법인명)를 입력해 주세요.";
        return false;
    } else {
        sttrCompanyError.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function validateSttrName() {
    var sttrName = document.getElementById('ceo-name1').value;
    var sttrNameError = document.getElementById('sttrNameError');

    if (sttrName.trim() === "") {
        sttrNameError.textContent = "대표자명을 입력해 주세요.";
        return false;
    } else {
        sttrNameError.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function validateSttrBank() {
    var sttrBank = document.getElementById('setter-bank1').value;
    var sttrBankError = document.getElementById('sttrBankError');

    if (sttrBank.trim() === "") {
        sttrBankError.textContent = "은행을 입력해 주세요.";
        return false;
    } else {
        sttrBankError.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function validateSttrAccNo() {
    var sttrAccNo = document.getElementById('setter-account-number1').value;
    var sttrAccNoError = document.getElementById('sttrAccNoError');

    if (sttrAccNo.trim() === "") {
        sttrAccNoError.textContent = "계좌번호를 입력해 주세요.";
        return false;
    } else {
        sttrAccNoError.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function validateSttrAccHolder() {
    var sttrAccHolder = document.getElementById('setter-account-holder1').value;
    var sttrAccHolderError = document.getElementById('sttrAccHolderError');

    if (sttrAccHolder.trim() === "") {
        sttrAccHolderError.textContent = "예금주를 입력해 주세요.";
        return false;
    } else {
        sttrAccHolderError.textContent = "";
        return true; // 유효성 검사 통과
    }
}

function checkInputs0() {
    var businessCertif = document.getElementById('businessCertif').files.length;
    var sttrImg = document.getElementById('sttrImg').files.length;
    var errorMessage = "";

    if (!validateSttrRegistNo()) {
        return false;
    }

    if (businessCertif === 0) {
        errorMessage += "사업자등록증을 업로드 해주세요.\n";
        console.log(errorMessage);

    }

    if (sttrImg === 0) {
        errorMessage += "세터 프로필 사진을 입력 해주세요.\n";
        console.log(errorMessage);

    }

    if (!validateSttrCompany ) {
        return false;
    }

    if (!validateSttrName()) {
        return false;
    }

    if (!validateSttrBank()) {
        return false;
    }

    if (!validateSttrAccNo()) {
        return false;
    }

    if (!validateSttrAccHolder()) {
        return false;
    }

    // 다른 입력 필드들도 유사하게 확인

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    return true;
}


// 펀딩명 유효성 검사 함수
function validateTitle() {
    var title = document.getElementById('fndName').value;
    var errorElement = document.getElementById('titleError');

    if (title.length > 19) {
        errorElement.textContent = "펀딩명은 18자를 넘을 수 없습니다.";
        document.getElementById('fndName').value = title.slice(0, 19);
        return false; // 유효성 검사 실패
    } else {
        errorElement.textContent = "";
        return true; // 유효성 검사 통과
    }
}

// 목표 금액 확인 함수
function validateGoalAmount() {
    var goalAmt = parseInt(document.getElementById('funding-goal-amount').value); // 목표 금액을 정수로 변환
    var amountErrorElement = document.getElementById('amountError');

    if (goalAmt < 500000 || goalAmt > 100000000 || isNaN(goalAmt)) { // isNaN 함수로 숫자가 아닌 경우를 확인
        if (goalAmt > 100000000) { // 목표 금액이 1억을 넘는 경우에만 초기화
            document.getElementById('funding-goal-amount').value = ""; // 입력된 값 초기화
        }
        amountErrorElement.textContent = "목표 금액은 최소 50만원부터 최대 1억원까지 설정해 주세요.";
        return false; // 유효성 검사 실패
    } else {
        amountErrorElement.textContent = "";
        return true; // 유효성 검사 성공
    }
}

// 모든 입력 값 확인 함수
function checkInputs1() {
    // var titleValid = validateTitle(); // 펀딩명 유효성 검사 결과

    var thumbnailImage = document.getElementById('thumbnailImage').files.length;
    var mainThumbnail = document.getElementById('mainThumbnail').files.length;
    var endDate = document.getElementById('funding-end-date').value;
    // var errorElement = document.getElementById('titleError');
    var errorMessage = "";

    if (!validateTitle()) {
        return false; // 펀딩명 유효성 검사 실패 시 종료
    }

    // 대표 이미지 확인
    if (thumbnailImage === 0) {
        errorMessage += "대표이미지 사진을 등록해 주세요.\n";
        console.log(errorMessage);
    }

    // 상세페이지 썸네일 확인
    if (thumbnailImage === 0 || mainThumbnail === 0) {
        errorMessage += "상세페이지 썸네일 사진을 등록해 주세요.\n";
        console.log(errorMessage);
    }

    // 펀딩 종료일 확인
    if (!endDate) {
        errorMessage += "펀딩 종료일을 선택해 주세요.\n";
        console.log(errorMessage);
    }

    // 목표 금액 확인
    if (!validateGoalAmount()) {
        return false; // 목표 금액 유효성 검사 실패 시 종료
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        console.log(errorMessage);
        return false;
    }

    return true; // 모든 유효성 검사 통과
}


function validateStory() {
    var storyLength = document.getElementById('funding-story3').value.length;
    var storyErrorElement = document.getElementById('storyError');

    if (storyLength < 1 || storyLength > 791) { // 길이가 1 미만 또는 500 이상인 경우
        storyErrorElement.textContent = "펀딩 스토리는 1자 이상, 790자 이하여야 합니다.";
        if (storyLength > 791) { // 길이가 745자를 초과한 경우
            storyTextarea.value = storyTextarea.value.slice(0, 791); // 746자 이후의 문자열은 제거
        }
        return false; // 유효성 검사 실패'
    } else {
        storyErrorElement.textContent = "";
        return true; // 유효성 검사 성공
    }
}

function checkInputs2() {
    var detailImage = document.getElementById('detailImage').files.length;
    var errorMessage = "";

    if (detailImage === 0) {
        errorMessage += "상세 페이지 이미지를 업로드 해 주세요.\n";
    }

    if (!validateStory()) { // validateStory 함수를 호출하고 반환된 결과를 확인
        return false; // 펀딩 스토리 유효성 검사 실패
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    return true; // 모든 유효성 검사 통과
}

function validateGiftTitle() {
    var giftTitle = document.getElementById('reward-title4').value;
    var giftTitleErrorElement = document.getElementById('giftTitleError');

    if (giftTitle.trim() === "") { // 선물명이 공백일 경우
        giftTitleErrorElement.textContent = "선물명을 입력해 주세요.";
        return false;
    } else if (giftTitle.length > 30) {
        giftTitleErrorElement.textContent = "선물명은 30자를 넘을 수 없습니다.";
        return false;
    } else {
        giftTitleErrorElement.textContent = "";
        return true;
    }
}

function validateGiftAmount() {
    var giftAmount = parseInt(document.getElementById('reward-amount4').value);
    var giftAmountLimitElement = document.getElementById('reward-amount-limit4');

    if (giftAmount < 10000 || giftAmount > 1000000 || isNaN(giftAmount)) {
        giftAmountLimitElement.textContent = "최소 1만원 ~ 최대 100만원 사이에서 설정해 주세요.";
        return false;
    } else {
        giftAmountLimitElement.textContent = "";
        return true;
    }
}

function checkInputs3() {
    var giftTitleValid = validateGiftTitle();
    var giftAmountValid = validateGiftAmount();

    if (!giftTitleValid || !giftAmountValid) { // 선물명이나 선물금액이 유효하지 않은 경우
        return false;
    }

    return true;
}
