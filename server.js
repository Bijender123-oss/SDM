
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const complaintRoutes = require('./routes/complaintRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON requests

// Routes
app.use('/complaints', complaintRoutes);

// MongoDB connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/mydb'; // change mydb to your DB name
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});