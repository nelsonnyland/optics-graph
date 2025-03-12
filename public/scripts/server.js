var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
// Define Mongoose Schema
const DataSchema = new mongoose.Schema({
    label: String,
    value: Number
}, { timestamps: true });
const DataModel = mongoose.model("Data", DataSchema);
// API endpoint to fetch data
app.get("/api/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield DataModel.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.listen(PORT, () => console.log(`Server running on prot ${PORT}`));
