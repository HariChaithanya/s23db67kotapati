const mongoose = require("mongoose")
const guitarSchema = mongoose.Schema({
    guitar_type: String,
    guitar_price: {
        type: Number,
        min: [0, 'The guitar price must be greater than or equal to 0'], 
        max: [4500, 'The guitar price cannot exceed 4500'], 
        required: [true, 'guitar price is required'] 
    },
    guitar_color: String
})
module.exports = mongoose.model("guitar", guitarSchema)