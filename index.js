const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config();


//Middlewares
app.use(cors());
app.use(express.json());


// MongoDb Connection String
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DBUser}:${process.env.DBPassword}@trekking-trips.0cayigf.mongodb.net/?retryWrites=true&w=majority&appName=trekking-trips`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        app.get('/', async (req, res) => {
            res.send("Express server is running");
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
    }
    finally {
        // // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("server is running on", port);
})