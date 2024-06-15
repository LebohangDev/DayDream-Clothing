//Import the modules
import express from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session';

import { connectToDatabase, addUser} from '../server/database.js'; 


//The express module is a function. When it is executed it returns an app object
export const app = express();

//Set up Express to use body-parser with JSON formatted data.
app.use(bodyParser.json());

//Configure express to use express-session
app.use(
    expressSession({
        secret: 'cst2120 secret',
        cookie: { maxAge: 60000000000 },
        resave: false,
        saveUninitialized: true
    })
);





app.post('/Clothes/Register', async (request, response)=>{

    try{
        const db = await connectToDatabase();
        const UsersCollection = db.collection('Users');
    
        var userData = request.body;
    
        var existingUser = await UsersCollection.findOne({username: userData.username});
    
        if(existingUser){
            response.status(409).json('Username already exists');
        }
        else{
            await addUser(userData);
            response.status(201).json({ message: "User registered successfully." });
        }

    }catch(error){
        console.log("error storing userdata", error);
        response.status(500).json({message: "Error storing user information", error});

    }
   

    


})

app.post('/Clothes/Login', async(request, response)=>{
    try{
        const db = await connectToDatabase();
        const UsersCollection = db.collection('Users');

        const {username, password} = request.body;

        const userLogin = await UsersCollection.findOne({username: username, password: password});

        if(userLogin){
            request.session.username;

            response.json({
                Login: true,
                username: username
                
            });

        }
        else if(!request.session.username === username){
            response.status(401).json({message:"User not logged in!"})
        }
        else{
            response.status(509).json({
                login: false,
                message:"Username or password is incorrect!"

            })

        }

    }
    catch(error){
        console.log("failed to Login in:", error);
        response.status(500).json({message:"failed to log in internal server error:", error})

    }
})



app.get('/Clothes/Mens', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const MensCollection = db.collection("Mens");
        const MensClothes = await MensCollection.find({}).toArray();

        

        if(MensClothes){
            response.json({
                Mens: MensClothes
            });

        } else{
            response.json(401).json({message: "Failed to fetch Mens Products"})
        }
    } catch(error){
        console.log("Error fetching Mens Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})

app.get('/Clothes/Mens/:id', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const MensCollection = db.collection("Mens");
        const id = request.params.id;
        const Clothing = await MensCollection.find({"id":id}).toArray();

        response.json(Clothing);

        

    } catch(error){
        console.log("Error fetching Mens Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})

app.get('/Clothes/Womens', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const WomensCollection = db.collection("Womens");
        const WomensClothes = await WomensCollection.find({}).toArray();

        

        if(WomensClothes){
            response.json({
                Womens: WomensClothes
            });

        } else{
            response.json(401).json({message: "Failed to fetch Womens Products"})
        }
    } catch(error){
        console.log("Error fetching Womens Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})

app.get('/Clothes/Womens/:id', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const WomensCollection = db.collection("Womens");
        const id = request.params.id;
        const WomensClothing = await WomensCollection.find({"id":id}).toArray();

        response.json(WomensClothing);

        

    } catch(error){
        console.log("Error fetching Mens Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})

app.get('/Clothes/Kids', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const KidsCollection = db.collection("Kids");
        const KidsClothes = await KidsCollection.find({}).toArray();

        

        if(KidsClothes){
            response.json({
                Kids: KidsClothes
            });

        } else{
            response.json(401).json({message: "Failed to fetch Kids Products"})
        }
    } catch(error){
        console.log("Error fetching Kids Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})

app.get('/Clothes/Kids/:id', async (request, response) =>{
    try{

        // conect to mongoDB

        const db = await connectToDatabase();
        const KidsCollection = db.collection("Kids");
        const id = request.params.id;
        const KidsClothing = await KidsCollection.find({"id":id}).toArray();

        response.json(KidsClothing);

        

    } catch(error){
        console.log("Error fetching Kids Products:", error);
        response.status(500).json({  message: "Internal server error." });


    }

})


// Set up express to serve static files from the directory called 'public'
app.use(express.static('../public'));

// Start the app listening on port 8080
app.listen(8080, () => {
    console.log("Listening on 8080.");
});
