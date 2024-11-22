const userBirthYear = document.querySelector(".inputYear");
const outputBoxResult = document.querySelector(".outputBox");
const inputButtonClick = document.querySelector(".inputButton");

const mainTitle = document.querySelector(".mainTitle");
const comment = document.querySelector(".comment");
const plzInto = document.querySelector(".plzInto");
const languageSelector = document.querySelector(".languageSelector");

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".side");

openBtn.addEventListener("click", function () {
    sidebar.classList.add("showSidebar");
});
closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("showSidebar");
});

const langResource = {
    ja: {
        alOne: "数字の年度を入力してください",
        alTwo: "正しい年度を入力してください",
        alThree: "このサービスは1900年以後の出生者を対象とします",
        outOne: "あなたの韓国式の年齢は",
        outTwo: "歳です。\n 友達に教えてあげてみるのはどうでしょうか？",
        mainTitleOne: "韓国式の年齢計算機",
        commentOne: "私の韓国の年齢はなに？\n下に生まれた年度を入力してください",
        userBirthYearOne: "生まれた年度を入力",
        inputBtnOne: "計算する",
        plzIntoOne: "ここに結果が表示されます"
    },
    en: {
        alOne: "Please enter a numeric year",
        alTwo: "Please enter a valid year",
        alThree: "This service is for those born after 1900",
        outOne: "Your Korean age is ",
        outTwo: " years.\n How about sharing this with a friend?",
        mainTitleOne: "Korean Age Calculator",
        commentOne: "What's my Korean age?\nEnter your birth year below",
        userBirthYearOne: "Enter birth year",
        inputBtnOne: "Calculate",
        plzIntoOne: "Your result will appear here"
    },
};

let lang = languageSelector.value;

function updateText() {
    let messages = langResource[lang];
    mainTitle.innerText = messages.mainTitleOne;
    comment.innerText = messages.commentOne;
    inputButtonClick.innerText = messages.inputBtnOne;
    userBirthYear.placeholder = messages.userBirthYearOne;
    outputBoxResult.innerText = "";
}

languageSelector.addEventListener("change", function() {
    lang = languageSelector.value;

    updateText();
});

updateText();

let today = new Date();
let yearForCalculator = today.getFullYear();

function clickedButton () {

    let messages = langResource[lang];

    if (userBirthYear.value.trim() === "") {
        alert(messages.alOne);
    } else {
        const yearYear = Number(userBirthYear.value);

        if (isNaN(yearYear)) {
            alert(messages.alOne);
        } else if (yearYear < 0) {
            alert(messages.alTwo);
        } else if (yearYear < 1900) {
            alert(messages.alThree);
        } else if (yearYear > yearForCalculator) {
            alert(messages.alTwo);
        } else {
            function koreaAgeResult(thenYourAge) {
                return (yearForCalculator) - thenYourAge + 1;
            }
            const realKoreaAgeResult = koreaAgeResult(yearYear);

            outputBoxResult.innerText = (messages.outOne) + realKoreaAgeResult + (messages.outTwo)
        }
    } 
}

inputButtonClick.addEventListener("click", clickedButton);

userBirthYear.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        clickedButton();
    }
});