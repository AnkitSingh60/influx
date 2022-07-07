const mongoose = require("mongoose");

const dataSchema =  new mongoose.Schema({
    code: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      }
})

const Data = new mongoose.model("data", dataSchema);

module.exports = Data;