require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}\n✅ MongoDB connected`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();
