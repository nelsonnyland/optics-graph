import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
// app.use(express.static(path.join(__dirname, "../public")));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/views/index.html"));
// })

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string, {
    dbName: "chartdb"
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define Mongoose Schema
const OpticsSchema = new mongoose.Schema({
    element: String,
    sp_num: Number
}, { timestamps: true });

const DataModel = mongoose.model("Optics", OpticsSchema, "optics");

// API endpoint to fetch data
app.get("/api/data", async (req, res) => {
    console.log("Entering get request");
    try {
        const data = await DataModel.find();
        //data.forEach(item => console.log(item));
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));