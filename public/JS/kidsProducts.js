// selecting elements for various section 
var MensItem = document.getElementById('item1');
var WomensItem = document.getElementById('item2');
var KidsItem = document.getElementById('item3');
var MenStore = document.getElementById('MenStore');
var WomenStore = document.getElementById('WomenStore');
var KidStore = document.getElementById('KidStore');
var thumbnails = document.querySelector('.thumbnail');
var KidsProductDetail = document.querySelector('.KidsProductDetail');








MenStore.style.display = 'none';
WomenStore.style.display = 'none';
KidStore.style.display = 'none';

export async function fetchAndDisplayKids(){
    try{

        

        const response = await fetch(`/Clothes/Kids`);
        if(response.ok){
            const Kidsdata = await response.json();
            
            
            displayKids(Kidsdata.Kids.flat());
            console.log("Kids data: ", Kidsdata);

            

        }else if(response.status==500){
            throw new Error("Error fetching Kids clothes");
        }

    }catch(error){
        console.error("Error fetching Kids clothes", error);
        
    }
}


function displayKids(Kidsdata){

    const listProduct = document.querySelector('.KidslistProduct');
    console.log("listProduct:", listProduct); // Log the selected element to the console
    console.log("Kidsdata before going to if statment: ", Kidsdata)
    // clear exisitng data before appending new ones
    listProduct.innerHTML = '';
    if(Kidsdata && Kidsdata.length > 0){
        Kidsdata.forEach(function(KidsClothes){
             // create new elemnt item
             const newKidsProduct = document.createElement('a');
             newKidsProduct.id = KidsClothes.id;
             
             
             newKidsProduct.classList.add('itemKids');
             newKidsProduct.addEventListener('click', function(){

                KidStore.style.display = 'none';
                WomensItem.style.display = 'none';
                KidsItem.style.display = 'none';
                MensItem.style.display = 'none';
                thumbnails.style.display = 'none';
                KidsProductDetail.style.display = 'block';
                fetchAndDisplayKidsClothing(KidsClothes.id);

             });

             

             newKidsProduct.innerHTML = `
                <img src="${KidsClothes.image}">
                <h2>${KidsClothes.name}</h2>
                <div class="price">$${KidsClothes.price}</div>

             
             `;



             // add the elemnts to the listproduct
             listProduct.appendChild(newKidsProduct);
             console.log("listProduct:", listProduct);
         });


    } else{
        console.log("Kidsdata is either not defined or empty")
    }

}

export async function fetchAndDisplayKidsClothing(id){
    try{

       
        

        

        

        const response = await fetch(`/Clothes/Kids/${id}`);
        console.log("response", response);
        if(response.ok){
            const Clothingdata = await response.json();
            
            
            displayKidsClothing(Clothingdata);
            console.log("Kids clothes data: ", Clothingdata);

           

            

        }else if(response.status==500){
            throw new Error("Error fetching clothing");
        }

    }catch(error){
        console.error("Error fetching clothes", error);
        
    }
}

function displayKidsClothing(Clothing){
    const Kidsdetail = document.querySelector('.Kidsdetail');
    
    // if product does not have id =productId
    
    // if clothing there, then add data porfuct in html
    Kidsdetail.querySelector('.image img').src = Clothing[0].image;
    Kidsdetail.querySelector('.name').innerText = Clothing[0].name;
    Kidsdetail.querySelector('.price').innerText = `$${Clothing[0].price}`; 
    Kidsdetail.querySelector('.description').innerText = Clothing[0].description;

    // adding data off similar products
    
    //show all products
    

    
    

}





