const express = require('express');
const cors = require('cors')

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({
        test : success
    })
});

app.get('/foodLeft', (req, res) => {
    res.send({
        percent : '47'
    })
})

app.get('/updateFood', (req, res) => {
    res.send({
        percent : '99'
    })
})

app.listen(8080, "localhost", () => {
    console.log("Started at port 8080")
});