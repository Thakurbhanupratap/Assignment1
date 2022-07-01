const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo : {
        type: String
    },
    user : {
        type: String,
    }
});

const TODO = mongoose.model("TODO", todoSchema);

module.exports = TODO;