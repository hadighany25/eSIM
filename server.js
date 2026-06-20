// ទីតាំង: esim/assets/mongodb/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ទីនេះគឺជា Connection String របស់ MongoDB Atlas របស់អ្នក
const mongoURI =
  "mongodb+srv://hadighany25_db_user:rOUK3rDZUb1zMmqL@cluster0.glmmzed.mongodb.net/esim_db?appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ ជោគជ័យ! បានភ្ជាប់ទៅកាន់ MongoDB Atlas (Cloud) រួចរាល់!");
  })
  .catch((err) => {
    console.error("❌ បរាជ័យក្នុងការភ្ជាប់ MongoDB:", err);
  });

app.get("/api/status", (req, res) => {
  res.json({ message: "Backend របស់លក់ eSIM កំពុងដំណើរការ!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server កំពុងរត់នៅលើ http://localhost:${PORT}`);
});
