const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bhanuApp")
  .then(() => {
    console.log("Db connected successfully....");
  })
  .catch((e) => {
    console.log(e);
  });
