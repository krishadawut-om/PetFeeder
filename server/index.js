const express = require('express');
const cors = require('cors')
const getDbConnection = require('./DBconnection')

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

app.get('/test', async (req,res) => {
    try {
        const db = await getDbConnection()
        const [rows] = await db.execute(`SELECT * FROM pet_feeder_table`)
        res.send({rows})
        await db.end()
    } catch (err) {
        console.log(err)
    }
})

app.get('/foodLeft', async (req, res) => {
    try {
        const db = await getDbConnection()
        const [rows] = await db.execute(
                        `select *
                        from pet_feeder_table
                        order by id desc
                        limit 1`)
        res.send({rows})
        await db.end()
    } catch (err) {
        console.log(err)
    }
})

app.get('/updateFood', async (req, res) => {
    // try {
    //     const db = await getDbConnection()
    //     const [rows] = await db.execute(
    //                     `insert into pet_feeder_table (current_value)
    //                     values (20)`)
    //     res.send({rows})
    //     await db.end()
    // } catch (err) {
    //     console.log(err)
    // }

    res.send({status: "Fed your dog successfuly! :)"})
})

app.listen(8080, "localhost", () => {
    console.log("Started at port 8080")
});