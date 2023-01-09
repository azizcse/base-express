const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./routes/api/index')

app.use('/api', apiRouter)

app.listen(3000,()=>{
    console.log("Server started on port: 3000")
});