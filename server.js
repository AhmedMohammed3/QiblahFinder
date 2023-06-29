const express = require('express');
const qiblahRoutes = require('./routes/compass');
const path = require('path');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send('Welcome to Qiblah Direction Getter');
});

app.use('/compass', qiblahRoutes);

app.listen(PORT, () => {
    console.log(`Listennig to ${PORT}`);
})