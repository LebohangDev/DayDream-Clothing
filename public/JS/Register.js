// importing validations form validation.js

import { checkEmail, checkPassword, checkUsername } from "./Validation.js";

// initiizalize varaibles button, phoneInput, passwordInput, emailInput
var button;
var passwordInput;
var usernameInput;
var emailInput;

// on window refresh call init function to intialilize everything

window.onload = init;

function init(){

    button = document.querySelector('.submit input');
    button.disabled = true;


    emailInput = document.querySelector('.Email');
    usernameInput = document.getElementById('UsernameRegister');
    passwordInput = document.getElementById('PasswordRegister');
    


    emailInput.addEventListener('input', ()=> checkEmail(emailInput.value, button));
    usernameInput.addEventListener('input', ()=> checkUsername(usernameInput.value, button));
    passwordInput.addEventListener('input', ()=> checkPassword(passwordInput.value, passwordInput, button));
   



}


window.register = async()=>{
    var username = document.getElementById("UsernameRegister");
    var email = document.getElementById("EmailRegister");
    var password = document.getElementById("PasswordRegister");
    var confirmPassword = document.getElementById("ConfirmPasswordInput")
    var gender = document.querySelector('.Gender-Category label');

    var userJSON = JSON.stringify({username: username.value, email: email.value, password: password.value, gender: gender.value });

    if(password.value !== confirmPassword.value){
        document.getElementById('msg').innerText = "Passwords do not match!";
        console.log("password:", password.value);
        console.log("confirmPassword:", confirmPassword.value);
        password.value ="";
        confirmPassword.value= "";
        return;
    }

    else{
        
    try{
        const response = await fetch(`Clothes/Register` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userJSON
        })
        if (response.ok){
            // clear previous error message
            document.getElementById('msg').innerText = "";

            document.getElementById('msg').innerText = "Congratulations, Succesfully Registered!";
            clearform();

             // Reload the page after 2 seconds
             setTimeout(() => {
                location.reload();
            }, 2000);

        }else{
            if(response.status === 409){
                document.getElementById('msg').innerText = "Username already exists!";
                username.value = "";
                return;
            }
           
        }
    } catch(error){
        console.error("Error storing user data", error);
    }

    }



    
}

function clearform(){
    document.getElementById("UsernameRegister").value = "";
    document.getElementById("EmailRegister").value = "";
    document.getElementById("PasswordRegister").value = "";
    document.getElementById("ConfirmPasswordInput").value = "";
    document.querySelector(".Gender-Category input").value = "";

     // disable the submit button again
     button.disabled = true;

}

