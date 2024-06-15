import {Selected, notSelected} from './index.js';


var SignOut = document.getElementById('Logout');
var SignIn = document.getElementById('SignIn');
var SignUp = document.getElementById('SignUp');

SignOut.style.display ='none';

window.isRegistered = async() =>{
    var username = document.getElementById('UsernameInput').value;
    var password = document.getElementById('PasswordInput').value;
    

    

    try{

        var userLogin = JSON.stringify({username, password});

        const response = await fetch(`Clothes/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: userLogin
        })
        if(response.ok){
            // clear the previous message
            document.getElementById("msg2").innerText = "";
            document.getElementById("msg2").innerText ="Welcome to DayDream, "+ username + "!"
            Logout();
            document.getElementById("Logout").addEventListener('click', ()=>{

                setTimeout(()=>{
                    location.reload();
                    

                }, 2000)
        
            
            })
           

            setTimeout(()=>{
                document.getElementById("UsernameInput").value = "";
                document.getElementById("PasswordInput").value = "";
                document.getElementById("msg2").innerText = "";
                

                
            }, 2000)


            
            var selectedPlan1 = document.querySelector(".selectPlan-buttons1");
            var selectedPlan2 = document.querySelector(".selectPlan-buttons2");
            var selectedPlan3 = document.querySelector(".selectPlan-buttons3");
    
            var selection1 = document.querySelector('.selected1');
            var selection2 = document.querySelector('.selected2');
            var selection3 = document.querySelector('.selected3');
    
            var loggedIn = username;
    
            if(loggedIn){
                    
    
                   
    
                   
                Selected([selectedPlan1, selectedPlan2, selectedPlan3], [selection1, selection2, selection3]);
    
                    
    
                    
    
    
            }
            else{
                
                notSelected([selectedPlan1, selectedPlan2, selectedPlan3])
    
              
    
            }
                    

        

           

        }
        else{
            if(response.status === 509){
                document.getElementById("msg2").innerText ="Username or password is incorrect!"
            }
        }
            


    }catch(error){
        console.log("Error logging in:", error)
       

    }
}

function Logout(){
    SignOut.style.display = 'block';
    SignIn.style.display = 'none';
    SignUp.style.display = 'none';
}

