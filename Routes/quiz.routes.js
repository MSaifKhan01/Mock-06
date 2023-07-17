const express = require('express');
const { QuizModel } = require('../Model/quiz.model');
const Quizrouter = express.Router()

Quizrouter.post("/post", async (req, res) => {
    try {
        const { creator, title, description, questions, leaderboard } = req.body

        const addQuiz = new QuizModel({ creator, title, description, questions, leaderboard :[]})
        await addQuiz.save()
        res.status(200).send({ msg: "Quiz Added sucessfully", ok: true })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

Quizrouter.get("/get", async (req, res) => {
    try {
        const data = await QuizModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

Quizrouter.delete("/delete/:id/:email", async (req, res) => {
    try {
        const { id, email } = req.params
        const user = await QuizModel.findOne({ _id: id })
        console.log(user)
        console.log(email)
        if (user.creator != email) {
            return res.status(400).send({ msg: "You are not authorized" })
        }
        const deletequiz = await QuizModel.findByIdAndDelete({ _id: id })
        return res.status(200).send({ msg: "Quiz Deleted" })
    } catch (error) {
        return res.status(400).send({ msg: error.message })
    }
})

Quizrouter.get("/takeQuize", async (req, res) => {
    try {
        const quizId = req.query.id
        const quizdata = await QuizModel.findById(quizId)
        return res.status(200).send(quizdata)
    } catch (error) {
        return res.status(400).send({msg:error.message})
    }
})

module.exports = { Quizrouter }