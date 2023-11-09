const mongoose = require("mongoose")
const guitarSchema = mongoose.Schema({
    guitar_type: String,
    guitar_price: Number,
    guitar_color: String
})
module.exports = mongoose.model("guitar", guitarSchema)