import { fetchAndDisplayMens } from "./mensProducts.js";
import { fetchAndDisplayWomens } from "./womensProducts.js";
import { fetchAndDisplayKids } from "./kidsProducts.js";
document.addEventListener("DOMContentLoaded", function() {

    // selecting elements for various section 
    var MensItem = document.getElementById('item1');
    var WomensItem = document.getElementById('item2');
    var KidsItem = document.getElementById('item3');
    var MenStore = document.getElementById('MenStore');
    var WomenStore = document.getElementById('WomenStore');
    var KidStore = document.getElementById('KidStore');
    var thumbnails = document.querySelector('.thumbnail');
    var MensProductDetail = document.querySelector('.ProductDetail');
    var WomensProductDetail = document.querySelector('.WomensProductDetail');
    var KidsProductDetail = document.querySelector('.KidsProductDetail');
    var Login = document.querySelector('.Login');
    var register = document.querySelector('.Register');
    var logoutMessage = document.querySelector('.Logout-Message');
    var SubscribeSection = document.querySelector('.Subscribe');
    var Contacts  = document.querySelector('.Contacts')
    var About = document.querySelector('.About');
   


    KidStore.style.display = 'none'
    WomenStore.style.display = 'none';
    MenStore.style.display = 'none';
    MensProductDetail.style.display = 'none';
    WomensProductDetail.style.display = 'none';
    KidsProductDetail.style.display = 'none';
    Login.style.display = 'none';
    register.style.display = 'none';
    logoutMessage.style.display = 'none';
    MensProductDetail.style.display = 'none';
    WomensProductDetail.style.display = 'none';
    KidsProductDetail.style.display = 'none'
    SubscribeSection.style.display = 'none';
    Contacts.style.display = 'none';
    About.style.display = 'none';

   
   


    function displayDiv(div){
        KidStore.style.display = 'none'
        WomenStore.style.display = 'none';
        MenStore.style.display = 'none';
        MensProductDetail.style.display = 'none';
        WomensProductDetail.style.display = 'none';
        SubscribeSection.style.display = 'none';
        KidsProductDetail.style.display = 'none';
        Login.style.display = 'none';
        register.style.display = 'none';
        logoutMessage.style.display = 'none';
        MensProductDetail.style.display = 'none';
        WomensProductDetail.style.display = 'none';
        KidsProductDetail.style.display = 'none';
        Contacts.style.display = 'none';
        About.style.display = 'none';
        div.style.display = 'block';

    }

    
    
    // Function to toggle display of the specific section
    function IntervalDisplay(ids) {
        var currentIndex = 0;
        setInterval(function() {
            // Hide all items
            ids.forEach(function(id) {
                id.classList.add('hidden');
            });
            // Show the current item
            ids[currentIndex].classList.remove('hidden');
            // Increment the index and reset to 0 if it exceeds the length of the array
            currentIndex = (currentIndex + 1) % ids.length;
        }, 6000); // Repeat every 6 seconds
    }
    // Call the toggleDisplay function with the array of items
    IntervalDisplay([MensItem, WomensItem, KidsItem, ]);


    // event listeners for thumbnails

    document.getElementById('thumbnail1').addEventListener('click', function(){
        displayDiv(MenStore);
        thumbnails.style.display = 'none';
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        fetchAndDisplayMens(); 
    });

    document.getElementById('thumbnail2').addEventListener('click', function(){
        displayDiv(WomenStore);
        thumbnails.style.display = 'none';
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        fetchAndDisplayWomens();
    });

    document.getElementById('thumbnail3').addEventListener('click', function(){
        displayDiv(KidStore);
        thumbnails.style.display = 'none';
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        fetchAndDisplayKids();
    });

    document.getElementById("Home").addEventListener('click', function(){
        thumbnails.style.display = 'flex';
        displayDiv(WomensItem);
        displayDiv(KidsItem);
        displayDiv(MensItem);
       
    });

    document.querySelector('.back').addEventListener('click', function(){

        displayDiv(MenStore);
    });

    document.querySelector('.Womensback').addEventListener('click', function(){
        displayDiv(WomenStore);
    });

    document.querySelector('.Kidsback').addEventListener('click', function(){
        displayDiv(KidStore);
    })

    document.getElementById('SignIn').addEventListener('click', function(){
        displayDiv(Login);
        thumbnails.style.display = 'none';
    })

    document.getElementById("SignUp").addEventListener('click', function(){
        displayDiv(register);
        thumbnails.style.display = 'none';

    })
    document.getElementById("Logout").addEventListener('click', function(){
        logoutMessage.style.display = 'block';
    })
    document.getElementById('Sub').addEventListener('click', function(){
        displayDiv(SubscribeSection);
        
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        thumbnails.style.display = 'none';
    })

    document.getElementById('Contacts').addEventListener('click', function(){
        displayDiv(Contacts);
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        thumbnails.style.display = 'none';
    })

    document.getElementById('About').addEventListener('click', function(){
        displayDiv(About);
        WomensItem.style.display = 'none'
        MensItem.style.display = 'none'
        KidsItem.style.display = 'none'
        thumbnails.style.display = 'none';

    })


    

    // Scrolling logic for left and right icons
    const Container = document.getElementById('listProduct');
    const WomensContainer = document.getElementById('WomenslistProduct');
    const KidsContainer = document.getElementById('KidslistProduct');
    const LeftIcon = document.getElementById('leftIcon');
    const RightIcon = document.getElementById('rightIcon');
    const WomenLeftIcon = document.getElementById('WomenleftIcon');
    const WomenRightIcon = document.getElementById('WomenrightIcon');
    const KidsLeftIcon = document.getElementById('KidsleftIcon');
    const KidsRightIcon = document.getElementById('KidsrightIcon');
    const scrollAmount = 200;


    function scrollLeft(){
        Container.scrollBy({left: -scrollAmount, behaviour: 'smooth'})
        WomensContainer.scrollBy({left: -scrollAmount, behaviour: 'smooth'})
        KidsContainer.scrollBy({left: -scrollAmount, behaviour: 'smooth'})
    }

    function scrollRight(){
        Container.scrollBy({left: scrollAmount, behaviour: 'smooth'})
        WomensContainer.scrollBy({left: scrollAmount, behaviour: 'smooth'})
        KidsContainer.scrollBy({left: scrollAmount, behaviour: 'smooth'})
    }

    LeftIcon.addEventListener('click', scrollLeft);
    RightIcon.addEventListener('click', scrollRight);
    WomenLeftIcon.addEventListener('click', scrollLeft);
    WomenRightIcon.addEventListener('click', scrollRight);
    KidsLeftIcon.addEventListener('click', scrollLeft);
    KidsRightIcon.addEventListener('click', scrollRight);


    

    
  



    
    

   
    
    
    
   


})

// Selected subscription

   


// function to subscription plan, passing variables plans and select
export function Selected(plans, select){

    // for each plans button and its index 
      plans.forEach(function(plan, index){

          
          // add event listerner for each button 
          plan.addEventListener('click', function(){

       
            // for each event listener clicked passing that button clciked  and its index
              plans.forEach(function(p, pindex){
                  // if the corrosponding index of button pressed and index of button match
                  if(pindex === index){
                      //do not dispaly the selected button
                      p.style.display = 'none';
                      // for each 'selected!' button, passing the index of the button and corrosponding 'selected!' button
                      select.forEach(function(s, seleIndex){

                          // if a match betwen the index of the select plan button and the 'selected!' button
                          if(index === seleIndex){
                              // display the 'selected!' button
                              s.style.display = 'block';
                          }
      
                          else{
                              s.style.display = 'none';
                          } 
                      })
                  }else{
                      p.style.display = 'block';
                
                  }
                  
              })
          })
      })
  }


  

export function notSelected(plans){
    console.log(plans);
    plans.forEach(function(plan){
        plan.addEventListener('click', function(){
            alert("you must be logged in!");
        })
    })
}

