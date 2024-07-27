const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// dotenv configuration
dotenv.config();


// rest Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));
//ports
const PORT = 3000;


// listen

app.listen(PORT, ()=>{
    console.log(`Server is running on http://${PORT}`);
})