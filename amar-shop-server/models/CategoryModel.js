import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        // trim: true,
        type: String,
        toLowerCase: true

    }
}, {versionKey: false, timestamps: true})


export default mongoose.model("Category", categorySchema);