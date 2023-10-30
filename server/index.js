const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
 const userRoutes = require("./routes/userRoutes");
// const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use('/api/auth',userRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

  const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);