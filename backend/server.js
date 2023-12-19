require("dotenv").config();
const connectDatabase = require("./config/database");
const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoute");
const cors = require("cors");
const path = require("path");


const bodyParser = require("body-parser");
const laptopRoutes = require("./routes/Laptop");
const categoryRoutes = require("./routes/Category");
//config
//config

//connect database
const mongoose = require("mongoose");
const { getCategory } = require("./controllers/Category");
mongoose.connect(process.env.DB_URL, {}).then(() => {
  console.log("MONGODB CONNECTION ESTABLISHED SUCCESSFULLY");
});


//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("*", function (req, res) {
  res.sendFile(path.join("../client/build/index.html"));
});
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/laptop", laptopRoutes);
app.use("/api/category", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is working on ${process.env.PORT}`);
});
