const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
app.use(express.json());
app.use(cors());
//require('dotenv').config();
//console.log(process.env)

app.use(require('./routes/routes'));
//require('./databases/mongo');
//require('./databases/mysql');

const port = 5000;


app.listen(port, () => console.log(`Express: Server running...`));