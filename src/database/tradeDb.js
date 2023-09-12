import mongoose from "mongoose";

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connection successfully')
    } catch (error) {
        console.log('Error while connecting to databse', error)
    }
}

export default Connection