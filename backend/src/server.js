const express = require("express");
const app = express();

const mongoose = require("mongoose");

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;
console.log(MONGODB);

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MONGODB Connection Error!"));

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3001;
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || "localhost";
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log(`${CORS_ADDRESS}`);

const corsOptions = {
  origin: CORS_ADDRESS,
};

app.get("/test", cors(corsOptions), (req, res) => {
  res.send("Hello! I am Sayan Nath.");
});

//Starting a Server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
