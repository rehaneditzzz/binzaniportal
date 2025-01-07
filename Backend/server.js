require('dotenv').config();
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes"); // Added student routes
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'https://binzaniportal-frontnend.vercel.app', credentials: true }));

// Use routes
app.use("/api/auth", authRoutes); // Fixed: Added leading slash
app.use("/api/user", userRoutes); // Fixed: Added leading slash
app.use("/api/admin", adminRoutes); // Fixed: Added leading slash
app.use("/api/students", studentRoutes); // Student form API routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
