const quizData = [
    {
        question: "What does JS stands for?",
        a: "Java Source",
        b: "Jungle Script",
        c: "Jupiter Saturn",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What is the latet version of HTML?",
        a: "HTML22",
        b: "HTML5",
        c: "HTML4",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "How to declare a className in CSS?",
        a: "#className",
        b: ".className",
        c: "className",
        d: "declareClassName",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_value = document.getElementById('a_value')
const b_value = document.getElementById('b_value')
const c_value = document.getElementById('c_value')
const d_value = document.getElementById('d_value')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_value.innerText = currentQuizData.a
    b_value.innerText = currentQuizData.b
    c_value.innerText = currentQuizData.c
    d_value.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Your Result <br> ${score}/${quizData.length}</h2>
           <button class="btn" onclick="location.reload()">Reload</button>
           `
        }
    }
})