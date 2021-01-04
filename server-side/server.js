const express = require("express");
const mongoose = require("mongoose");
const burgerRouter = require("./routes/burgerRoutes");
const cartRouter = require("./routes/cartRoutes");
const cors = require("cors");

//app config
const app = express();
const PORT = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://database:Hyperpass0!@cluster0.maaco.mongodb.net/blubberburgerdb?retryWrites=true&w=majority";
//middleware
app.use(express.json());
app.use(cors());
//DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

//API Endpoints
app.use("/api/v1/burgers", burgerRouter);
app.use("/api/v1/cart", cartRouter);
app.get("/", (req, res) => res.status(200).send("Hello World"));
// Listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
