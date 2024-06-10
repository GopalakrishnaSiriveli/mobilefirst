const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase'; 

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
