const userEnteredId = document.querySelector('.userIdLogin');
const userEnteredPw = document.querySelector('.userPwLogin');
const userEnteredBtn = document.querySelector('.userLoginBtn');

function userClickLoginBtn () {
    if (userEnteredId.value.trim() === '') {
        alert();
    } else if (userEnteredPw.value.trim() === '') {
        alert();
    } else if ((userEnteredId.value.trim() === '') && (userEnteredPw.value.trim() === '')) {
        alert();
    }
}