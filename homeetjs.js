
//выводим загруженную аватарку в превью
function readURL(input)
{
    if(input.files && input.files[0]){
        var reader= new FileReader();
        reader.onload=function(e)
        {
            var fileurl=e.target.result;
            $('.profile_pic').attr('src',fileurl);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".file_upload").on('change',function(){
readURL(this);
});

// выводим ФИ в превью
const userName = document.querySelector('.nameInput');
let nameSurname = document.querySelector('.name_surname');
userName.addEventListener('input', ()=>{
    nameSurname.innerHTML = userName.value;
})

// выводим пол в превью
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

// считаем возраст из даты рождения
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

// выводим возраст в превью
let miniAge = document.querySelector('.mini_age');
let userAge = document.querySelector('.user_age')
userAge.addEventListener('change', ()=>{
    miniAge.innerHTML = getAge(userAge.value) + ' лет';
})

// выводим текст "О себе" в превью
let userInfo = document.querySelector('.userInfo1');
let bigText = document.querySelector('.big_text');
userInfo.addEventListener('input', ()=>{
    bigText.innerHTML = userInfo.value;
})



/* const btnSend= document.getElementById('btnSend');
document.querySelector('form').addEventListener('keyup', validate, false)

function validate(e){
   btnSend.disabled = !e.target.checkValidity()
} */
 