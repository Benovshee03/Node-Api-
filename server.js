const express = require('express');
const { default: mongoose } = require('mongoose');
// const mongoose = require('mongoose');  // mongoşu bağlamak için
require('dotenv').config();  // .env dosyasını okumak için

const app = express();
app.use(express.json());  // expressin json veri almasını sağlar

mongoose
    .connect(process.env.DATABASE_SERVER_URL, {
        useNewUrlParser: true,  
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database!');
    }).catch((err) => {
        console.log('Connection failed!', err);
    });

const PORT = process.env.PORT || 5001;  // .env dosyasında PORT yoksa 5001 portunu kullanır
app.listen(PORT, () => console.log(`server running on port ${PORT}`));