const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Successfully connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());

// Enable CORS for specific origin
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from your React frontend
}));

// Import and use your routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
