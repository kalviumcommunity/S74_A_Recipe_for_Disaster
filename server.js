require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB Connection Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Home route showing DB connection status
app.get('/', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
    res.send({ message: "Database Connection Status", status: dbStatus });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});