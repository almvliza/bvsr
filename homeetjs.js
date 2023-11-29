const userName = document.querySelector('.nameInput');

/* const form = document.querySelector('.box_1');
const telegram = document.querySelector('.telegram');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector(".small1");
    small1.innerText = sasi;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    const re = @;
    if (!(re.test(input.value.trim()))) {
      showError(input, "телеграм неверный");
    }
} */

/* form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkRequired([userName, telegram])) {
      checkEmail(telegram);
    }
});
 */

let nameSurname = document.querySelector('.name_surname');
userName.addEventListener('input', ()=>{
    nameSurname.innerHTML = userName.value;
})

let miniSex = document.querySelector('.mini_sex');
let radioGender = document.querySelectorAll('.radio_gender')
radioGender.forEach( (item) => {
    item.addEventListener('change', ()=>{
    if (item.value == 'y') {
         miniSex.innerHTML = 'Парень';
    }
    if (item.value == 'z') {
        miniSex.innerHTML = 'Девушка';
    }}) 
})

function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

let miniAge = document.querySelector('.mini_age');
let userAge = document.querySelector('.user_age')
userAge.addEventListener('change', ()=>{
    miniAge.innerHTML = getAge(userAge.value) + ' лет';
})

let userInfo = document.querySelector('.userInfo1');
let bigText = document.querySelector('.big_text');
userInfo.addEventListener('input', ()=>{
    bigText.innerHTML = userInfo.value;
})

