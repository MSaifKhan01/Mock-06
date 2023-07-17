const mongoose = require('mongoose');
const quizSchema = mongoose.Schema({

    creator: String,
    title: String,
    description: String,
    questions: [
        {
            title: String,
            answerOptions: Array,
            correctOptions: Array
        },

    ],
    leaderboard: [
        {
            email: String,
            score: Number
        }
    ]



})
const QuizModel = mongoose.model("quiz", quizSchema)
module.exports = { QuizModel }