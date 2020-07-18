let button = document.getElementById('submit');
let email = document.getElementById('emailInput');
let mensage = document.getElementById('demo');

button.onclick = validateEmail

function validateEmail(){
    if(!email.checkValidity()){
        mensage.innerHTML = email.validationMessage;
    }
};

// function myFunction() {
//     var inpObj = document.getElementById("id1");
//     if (!inpObj.checkValidity()) {
//       document.getElementById("demo").innerHTML = inpObj.validationMessage;
//     } else {
//       document.getElementById("demo").innerHTML = "Input OK";
//     } 
//   } 

