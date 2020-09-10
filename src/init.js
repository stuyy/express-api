const { config } = require("dotenv");
const express = require("express");

const app = express();

config();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

module.exports = app;
