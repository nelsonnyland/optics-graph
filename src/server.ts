import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define Mongoose Schema
const DataSchema = new mongoose.Schema({
    label: String,
    value: Number
}, { timestamps: true });

const DataModel = mongoose.model("Data", DataSchema);

// API endpoint to fetch data
app.get("/api/data", async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on prot ${PORT}`));