const express = require('express');
const cors = require('cors');
const { connection } = require('./Connection/connection');
const { UserRouter } = require('./Routes/user.routes');
const { Quizrouter } = require('./Routes/quiz.routes');
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("HomeRoute")
})

app.use("/user", UserRouter)
app.use("/quiz", Quizrouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected To DB");
    } catch (error) {
        console.log(error);
        console.log("Error while Connecting To Database");
    }
    console.log("server is Connected ");
})