const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.SECRET_user}:${process.env.SECRET_KEY}@car-doctors.i48ymo7.mongodb.net/?retryWrites=true&w=majority`;

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

    const serviceCallations = client.db("CardDoctors").collection("Service");
    const bookService = client.db("CardDoctors").collection("BookService");

    app.get("/service", async (req, res) => {
      const cursor = serviceCallations.find();
      const result = await cursor.limit(6).toArray();
      res.send(result);
    });

    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 0,
          title: 1,
          price: 1,
          description: 1,
          img: 1,
          date: 1,
        },
      };

      const result = await serviceCallations.findOne(query, options);
      res.send(result);
    });

    //  ooder_BookService

    app.get("/seervice-booking", async (req, res) => {
      // console.log(req.query);
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await bookService.find(query).toArray();
      res.send(result);
    });

    app.post("/seervice-booking", async (req, res) => {
      const booking = req.body;
      // console.log(booking);

      const result = await bookService.insertOne(booking);
      res.send(result);
    });
   


    app.patch("/seervice-booking/:id", async (req, res) => {
      const id = req.params.id;
      const updateBooking = req.body;
      console.log(updateBooking);
       const filter = { _id : new ObjectId(id)};
        const updateDoc = {
          $set: {
            status: updateBooking.status
          },
        };
     const result = await bookService.updateOne(filter, updateDoc);
     res.send(result);
      
    })



    app.delete("/seervice-booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await bookService.deleteOne(query)
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Car doctor: listening on port ${port}`);
});
