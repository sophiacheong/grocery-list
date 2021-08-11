const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const PORT = 3000;

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(PORT, () => console.log(`Listening at :${PORT}`))