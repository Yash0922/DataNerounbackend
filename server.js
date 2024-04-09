const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const errorMiddleware = require('./Middlewares/error.middleware');
const authRoutes = require('./Routes/authRoutes');
const dataRoutes = require('./Routes/dataRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://yashkumarpal987:Yash%4015182204@cluster0.ss532hp.mongodb.net/DataNeuron ', {
});

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});