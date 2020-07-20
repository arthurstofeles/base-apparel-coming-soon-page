let button = document.getElementById('submit');
let email = document.getElementById('emailInput');
let mensage = document.getElementById('demo');

button.onclick = validateEmail

function validateEmail(){
    if(!email.checkValidity()){
        mensage.innerHTML = email.validationMessage;
    }
};