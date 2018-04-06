const mongoose = require("mongoose")

const barSchema = new mongoose.Schema({
  name: {type:String},
  location: {type:String},
  rating: {type:Number, default: 3},
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Bar = mongoose.model("Bar", barSchema)

module.exports = Bar