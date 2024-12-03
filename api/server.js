const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const habbitRoutes = require("./routes/habbitRoutes");
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/habits", habbitRoutes);
console.log("hello world");








app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
