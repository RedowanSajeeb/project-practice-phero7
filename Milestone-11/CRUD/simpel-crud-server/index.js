const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

const port = process.env.PORT || 300;
// midelw
app.use(express.json());
app.use(cors());
// redowansajeeb72
// XNey7tR4qLhKfYRD
// ----------------

const uri =
  "mongodb+srv://redowansajeeb72:XNey7tR4qLhKfYRD@cluster0.mhy0dhb.mongodb.net/?retryWrites=true&w=majority";

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

    // const database = client.db("usersDB").collection("users");

    const database = client.db("usersDB");
    const usersCollection = database.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post("/users", async (req, res) => {
      const userbodyReq = req.body;
      console.log("new user", userbodyReq);

      const result = await usersCollection.insertOne(userbodyReq);
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const user = await usersCollection.findOne(query);
      res.send(user);
    });

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(user);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatetUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updatetUser,
        options
      );
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;

      console.log("please delete user", id);

      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
      if (result.deletedCount > 0) {
      }
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

app.get("/", (req, res) => {
  res.send("welcome bro");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
