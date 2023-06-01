const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken")
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

const verifyJWT = (req,res,next) =>{
  // console.log("hetinggggggggggg");
  console.log(req.headers.authorization);

  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  console.log("token", token);

  // verify a token symmetric
  jwt.verify(token, process.env.Access_tokenJwtToken, function (error, decoded) {
    if(error) {
      return res.status(403).send({error: true, message: 'unexpected error authenticating'})
    }
    req.decoded = decoded;
    next();
   
  });
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const serviceCallations = client.db("CardDoctors").collection("Service");
    const bookService = client.db("CardDoctors").collection("BookService");


    // jwt
    app.post("/jwt", (req, res) => {
      const user = req.body
      console.log(user);

    const token = jwt.sign(user, process.env.Access_tokenJwtToken, {
      expiresIn: "1h",
    });
    res.send({token});
    console.log({token});
    })



    // service
    app.get("/service", async (req, res) => {
// db.InspirationalWomen.find({ first_name: { $regex: /Harriet/i } });
      const sort = req.query.sort
      const search = req.query.search
       const query = { title: {$regex: search , $options: 'i'} };
       const options = {
         // sort matched documents in descending order by rating
         sort: { price: sort === "ass" ? 1 : -1},
       };
      const cursor = serviceCallations.find(query,options);
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

    app.get("/seervice-booking", verifyJWT , async (req, res) => {
      // console.log(req.headers.authorization);
      const decoded = req.decoded;
      if(decoded.email !== req.query.email){
         return res.status(403).send({error: 1, message: "Invalid email"});

      }
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
