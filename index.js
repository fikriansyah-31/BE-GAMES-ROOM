const express = require('express');
require('dotenv').config();
const cors = require('cors');
const uuid = require('uuid');
// Get routes to the variabel
const router = require('./src/routes');
// import here

const app = express();

let corsOptions = {
    origin: '*',
};

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));
// Add endpoint grouping and router
app.use('/api/v1/', router);

const uniqueId = uuid.v4();
console.log('Unique ID:', uniqueId);


app.listen(port, () => console.log(`Listening on port ${port}!`));
