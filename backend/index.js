const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors') 


connectToMongo();
const app = express()
const port = 3004
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})