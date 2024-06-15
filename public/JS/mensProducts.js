
// selecting elements for various section 
var MensItem = document.getElementById('item1');
var WomensItem = document.getElementById('item2');
var KidsItem = document.getElementById('item3');
var MenStore = document.getElementById('MenStore');
var thumbnails = document.querySelector('.thumbnail');
var MensProductDetail = document.querySelector('.ProductDetail');






MenStore.style.display = 'none';
MensProductDetail.style.display = 'none';

export async function fetchAndDisplayMens(){
    try{

        

        const response = await fetch(`/Clothes/Mens`);
        if(response.ok){
            const Mensdata = await response.json();
            
            
            displayMens(Mensdata.Mens.flat());
            console.log("mens data: ", Mensdata);

            

        }else if(response.status==500){
            throw new Error("Error fetching Mens clothes");
        }

    }catch(error){
        console.error("Error fetching Mens clothes", error);
        
    }
}


function displayMens(Mensdata){

    const listProduct = document.querySelector('.listProduct');
    console.log("listProduct:", listProduct); // Log the selected element to the console
    console.log("Mensdata before going to if statment: ", Mensdata)
    // clear exisitng data before appending new ones
    listProduct.innerHTML = '';
    if(Mensdata && Mensdata.length > 0){
        Mensdata.forEach(function(MensClothes){
             // create new elemnt item
             const newMensProduct = document.createElement('a');
             newMensProduct.id = MensClothes.id;
             
             
             newMensProduct.classList.add('itemMens');
             newMensProduct.addEventListener('click', function(){

                MenStore.style.display = 'none';
                WomensItem.style.display = 'none';
                KidsItem.style.display = 'none';
                MensItem.style.display = 'none';
                thumbnails.style.display = 'none';
                MensProductDetail.style.display ='block';
                fetchAndDisplayClothing(MensClothes.id);
                

             });

             

             

             newMensProduct.innerHTML = `
                <img src="${MensClothes.image}">
                <h2>${MensClothes.name}</h2>
                <div class="price">$${MensClothes.price}</div>

             
             `;


             
             // add the elemnts to the listproduct
             listProduct.appendChild(newMensProduct);
             console.log("listProduct:", listProduct);
         });


    } else{
        console.log("mensdata is either not defined or empty")
    }

}

export async function fetchAndDisplayClothing(id){
    try{

       
        

        

        

        const response = await fetch(`/Clothes/Mens/${id}`);
        console.log("response", response);
        if(response.ok){
            const Clothingdata = await response.json();
            
            
            displayClothing(Clothingdata);
            console.log("clothes data: ", Clothingdata);

           

            

        }else if(response.status==500){
            throw new Error("Error fetching clothing");
        }

    }catch(error){
        console.error("Error fetching clothes", error);
        
    }
}

function displayClothing(Clothing){
    const detail = document.querySelector('.detail');
    
    // if product does not have id =productId
    
    // if clothing there, then add data porfuct in html
    detail.querySelector('.image img').src = Clothing[0].image;
    detail.querySelector('.name').innerText = Clothing[0].name;
    detail.querySelector('.price').innerText = `$${Clothing[0].price}`; 
    detail.querySelector('.description').innerText = Clothing[0].description;

    // adding data off similar products
    
    //show all products
    

    
    

}





