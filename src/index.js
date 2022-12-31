require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.listen(PORT, () => {
   console.log('Api rodando na porta: ', PORT);
});
