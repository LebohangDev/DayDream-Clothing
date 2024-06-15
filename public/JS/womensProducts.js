
// selecting elements for various section 
var MensItem = document.getElementById('item1');
var WomensItem = document.getElementById('item2');
var KidsItem = document.getElementById('item3');
var MenStore = document.getElementById('MenStore');
var WomenStore = document.getElementById('WomenStore');
var thumbnails = document.querySelector('.thumbnail');
var WomensProductDetail = document.querySelector('.WomensProductDetail');








MenStore.style.display = 'none';
WomenStore.style.display = 'none';

export async function fetchAndDisplayWomens(){
    try{

        

        const response = await fetch(`/Clothes/Womens`);
        if(response.ok){
            const Womensdata = await response.json();
            
            
            displayWomens(Womensdata.Womens.flat());
            console.log("Womens data: ", Womensdata);

            

        }else if(response.status==500){
            throw new Error("Error fetching Womens clothes");
        }

    }catch(error){
        console.error("Error fetching Womens clothes", error);
        
    }
}


function displayWomens(Womensdata){

    const listProduct = document.querySelector('.WomenslistProduct');
    console.log("listProduct:", listProduct); // Log the selected element to the console
    console.log("Womensdata before going to if statment: ", Womensdata)
    // clear exisitng data before appending new ones
    listProduct.innerHTML = '';
    if(Womensdata && Womensdata.length > 0){
        Womensdata.forEach(function(WomensClothes){
             // create new elemnt item
             const newWomensProduct = document.createElement('a');
             newWomensProduct.id = WomensClothes.id;
             
             
             newWomensProduct.classList.add('itemWomens');
             newWomensProduct.addEventListener('click', function(){

                WomenStore.style.display = 'none';
                WomensItem.style.display = 'none';
                KidsItem.style.display = 'none';
                MensItem.style.display = 'none';
                thumbnails.style.display = 'none';
                WomensProductDetail.style.display = 'block';
                fetchAndDisplayWomensClothing(WomensClothes.id);

             });

             

             newWomensProduct.innerHTML = `
                <img src="${WomensClothes.image}">
                <h2>${WomensClothes.name}</h2>
                <div class="price">$${WomensClothes.price}</div>

             
             `;



             // add the elemnts to the listproduct
             listProduct.appendChild(newWomensProduct);
             console.log("listProduct:", listProduct);
         });


    } else{
        console.log("mensdata is either not defined or empty")
    }

}

export async function fetchAndDisplayWomensClothing(id){
    try{

       
        

        

        

        const response = await fetch(`/Clothes/Womens/${id}`);
        console.log("response", response);
        if(response.ok){
            const Clothingdata = await response.json();
            
            
            displayWomensClothing(Clothingdata);
            console.log("Womens clothes data: ", Clothingdata);

           

            

        }else if(response.status==500){
            throw new Error("Error fetching clothing");
        }

    }catch(error){
        console.error("Error fetching clothes", error);
        
    }
}

function displayWomensClothing(Clothing){
    const Womensdetail = document.querySelector('.Womensdetail');
    
    // if product does not have id =productId
    
    // if clothing there, then add data porfuct in html
    Womensdetail.querySelector('.image img').src = Clothing[0].image;
    Womensdetail.querySelector('.name').innerText = Clothing[0].name;
    Womensdetail.querySelector('.price').innerText = `$${Clothing[0].price}`; 
    Womensdetail.querySelector('.description').innerText = Clothing[0].description;

    // adding data off similar products
    
    //show all products
    

    
    

}





