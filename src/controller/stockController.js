import { response } from "express";
import Stocks from "../model/stocks.js";

export const getAllStocks = async (req, res) => {  
    try {
       const data = await Stocks.find()
       return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({'msg' : 'Server Error'})
    }
}

export const getStockById = async(req, res) => {
    try {
        const id = req.params.id
        const data = await Stocks.findById(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({'msg' : 'Server Error'})
    }
}

export const updateStocks = async () => {
    try {
        const data = await Stocks.find()
        data.map(async(el) => await Stocks.updateOne({_id: el._id},{$set: {price: Math.round(Math.random() * 1000)}}))
    } catch (error) {
        console.log('Error inn Database, cannot update', error)
    }
}