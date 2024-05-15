var introEl = document.getElementById("intro")
var questionSectionEl = document.getElementById("question-sectio")
var initialInputEl = document.getElementById("initial-input")
var highscoreEl = document.getElementById("highscore")
var startQuizEl = document.getElementById("start-quiz")
var questionTitleEl = document.getElementById("question-title")
var choiceListEl = document.getElementById("choice-list")

function sstartQuiz(){
    introEl.classList.add("hide")
}

startQuizEl.addEventListener("click", sstartQuiz)