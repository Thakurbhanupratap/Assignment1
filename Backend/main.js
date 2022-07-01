const express  = require("express");
require("./db/conn");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", cors(), async(req,res) => {
    res.send("hello from the server.");
});

app.use("/user/",userRoutes);
app.use("/user/",todoRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})