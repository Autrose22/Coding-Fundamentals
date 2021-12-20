const questions = [
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"  
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },

    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },

    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },

    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    },

    {
        question: "How do you add a comment in a HTML?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "b. <!--This is a comment-->"
    },

    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },

    {
        question: "What does HTML stand for?",
        choices: ["a. Hypertext Mixing Language", "b. Hippos Math Lesson ", "c. Hopping Markup Land", "d. Hypertext Markup Language"],
        answer: "d. Hypertext Markup Language"
    },
];

var time = document.getElementById("time");
var timesUp = document.getElementById("timesUp");
var timeLeft = document.getElementById("timeLeft");
var startQuizBtn = document.getElementById("start-quiz-button");
var startDiv = document.getElementById("start");

var questionTitle = document.getElementById("questionTitle");
var questionDiv = document.getElementById("questionDiv");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");

var answerCheck = document.getElementById("answerCheck");
var goBackBtn = document.getElementById("goBackBtn");
var finalScore = document.getElementById("finalScore");
var viewHighScore = document.getElementById("viewHighScore");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");

var questionNum = 0;
var questionIndex = 0;
var correctAns = 0;
var scoreResult;

var totalTime = 150;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 10) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        answerCheck.textContent = "correct!";

} else {
    totalTime -=10;
    timeLeft.textContent = totalTime;
    answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
}
questionIndex++;
if (questionIndex < questions.length) {
    nextQuestion();
} else {
    gameOver();
 }
}
function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }
