export function checkPassword(password, passwordInput, button){
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
    var result = passwordRegex.test(password);
    if (result){
        button.disabled = false;
        passwordInput.style.color = "green";
        document.getElementById('msg').innerText = '';
    }
    else{
        button.disabled = true;
        passwordInput.style.color = "red";
        document.getElementById('msg').innerText = 'password must be atleast 6 charcters long and have 1 capital Letter';
        
    }
    return result;

}

export function checkUsername(username, button){
    var userRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    
    var result = userRegex.test(username);
    if(result){
        button.disabled = false;
        document.getElementById('msg').innerText = '';
        
;       
    }
    else{
        button.disabled = true;
        document.getElementById('msg').innerText = 'invalid username';
        

    }
    return result;
    
}

export function checkEmail(email, button){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
    var result = emailRegex.test(email);
    if(result){
        button.disabled = false;
        document.getElementById('msg').innerText = '';
        
    }
    else{
        button.disabled = true;
        document.getElementById('msg').innerText = 'invalid Email';
        
        
    }
    return result;

}