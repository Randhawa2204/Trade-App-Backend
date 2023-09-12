import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    }
})

const Stocks = mongoose.model('stock', stockSchema)

export default Stocks