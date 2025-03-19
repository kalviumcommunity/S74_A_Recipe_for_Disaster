require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')

// Import Routes
const foodFailRoutes = require('./routes');
const router = require('./controllers/user')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB Connection Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));


app.use('/api', foodFailRoutes); // Prefix all routes with /api
app.use('/api/user',router)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
