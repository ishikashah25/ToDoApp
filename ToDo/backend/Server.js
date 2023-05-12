const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config(); 
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const routes = require("./routes/ToDoRoute");
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));