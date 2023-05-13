const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome Chocolate Management System/server");
});

const uri = `mongodb+srv://${process.env.DB_User_name}:${process.env.password}@chocolatemanagementsyst.x82ez6b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const chocolateCollectionMDbs = client.db("chocolateM").collection("Dbs");

    // -send-mongodb-server
    app.post("/chocolates", async (req, res) => {
      const addChocolates = req.body;
      // console.log(addChocolates);
      const result = await chocolateCollectionMDbs.insertOne(addChocolates);
      res.send(result);
    });
    // data-get-mongodb
    app.get("/chocolates", async (req, res) => {
      const find = chocolateCollectionMDbs.find();
      const result = await find.toArray();
      res.send(result);
    });

    // -----------------put
    app.get("/chocolates/:id", async (req, res) => {
      const id = req.params.id;
      const quary = {_id: new ObjectId(id)}
      const result = await chocolateCollectionMDbs.findOne(quary)
      res.send(result);

    });
    
    app.put("/chocolates/:id", async (req, res) => {
      const id = req.params.id;
      const chocolates = req.body;
      const filter = {_id: new ObjectId(id) };
      const options = { upsert: true };
      const upchocolates = {
        $set: {
          name: chocolates.name,
          img: chocolates.img,
          country: chocolates.country,
          category: chocolates.category,
        },
      };
      const results = await chocolateCollectionMDbs.updateOne(
        filter,
        upchocolates,
        options
      );
      res.send(results);
    });

    //  - delate-to-mongodb
    app.delete("/chocolates/:id", async (req, res) => {
      const id = req.params.id;
      const quray = { _id: new ObjectId(id) };
      const result = await chocolateCollectionMDbs.deleteOne(quray);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`listening on Chocolate Management System/server ${port}`);
});
