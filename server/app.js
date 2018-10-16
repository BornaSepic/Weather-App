const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const router = require('./routes')
const tools = require('./tools')

const app = express();

app.use('/', router);
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.listen(3000, () => {
    console.log('App is running on port 3000')
});