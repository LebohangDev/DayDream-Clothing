import { MongoClient, ServerApiVersion } from 'mongodb';

const password = "Lesotho1726";
const userName = "lk669";
const server =  "cluster0.jocm7ve.mongodb.net";

const encodedUsername = encodeURIComponent(userName);
const encodedPassword = encodeURIComponent(password);

const connectionURL = `mongodb+srv://${encodedUsername}:${encodedPassword}@${server}/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionURL, { 
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

// fucntion to connect to database 
export async function connectToDatabase() {
    try {
        await client.connect();
        return client.db("DayDream_Clothes");
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}

export async function addUser(newUser){
    var db = await connectToDatabase();
    var UsersCollection = db.collection('Users');
    const result = await UsersCollection.insertOne(newUser);
    return result;

}

