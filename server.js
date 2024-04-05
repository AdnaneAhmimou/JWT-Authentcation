const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

mongoose
    .connect('mongodb://localhost:27017/authentication')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));


app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth/user', userRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));