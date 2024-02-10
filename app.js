const express = require('express');
const { connectToDatabase } = require('/Users/movina/Desktop/Semester_3/Devops/CW/hospital_management_system/HospitalManagementSysDEV/db/connection.js');
const app = express();
const port = 3000;
connectToDatabase()
  .then(() => {
    // Start your server or perform other actions after database connection
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    // Handle the error
  });

  
/* const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://movinayoob1993:Libertyforme%4022@cluster0.yw903th.mongodb.net/hospitalDB?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
 */