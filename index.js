const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const morgan = require('morgan');
const errorMiddleware = require('./Middlewares/error.middleware');
const authRoutes = require('./Routes/authRoutes');
const dataRoutes = require('./Routes/dataRoutes');
const functions = require('firebase-functions');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://yashkumarpal987:Yash%4015182204@cluster0.ss532hp.mongodb.net/DataNeuron ', {
});
app.use(cors());
// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use(errorMiddleware);
exports.api = functions.https.onRequest(app)
const PORT = process.env.PORT || 8423;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

