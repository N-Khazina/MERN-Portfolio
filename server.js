const express = require('express');
const mongoose = require('mongoose');

const app = express()
require("dotenv").config();
const dbconfig = require ("./config/dbconfig");

const portfolioRoute = require ("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
