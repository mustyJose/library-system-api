const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Library API running');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });


    const authorRoutes = require("./routes/authorRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attendantRoutes = require("./routes/attendantRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use("/authors", authorRoutes);
app.use("/students", studentRoutes);
app.use("/attendants", attendantRoutes);
app.use("/books", bookRoutes);