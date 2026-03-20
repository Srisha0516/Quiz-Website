let subject = localStorage.getItem("subject");

let questionBank = {
web: [
{q:"REST stands for?", options:["Representational State Transfer","Remote Execution","Runtime State"], ans:0},
{q:"HTTP method to update?", options:["GET","POST","PUT"], ans:2},
{q:"HTML used for?", options:["Structure","Style","Logic"], ans:0},
{q:"CSS used for?", options:["Logic","Design","Database"], ans:1},
{q:"JS is?", options:["Backend only","Frontend only","Both"], ans:2},
{q:"DOM stands for?", options:["Document Object Model","Data Object Model","None"], ans:0},
{q:"API is?", options:["Interface","Database","Server"], ans:0},
{q:"Frontend includes?", options:["HTML","SQL","Java"], ans:0},
{q:"Backend includes?", options:["Python","CSS","HTML"], ans:0},
{q:"Responsive design?", options:["Fixed","Adaptive","Dynamic"], ans:2}
],

// (you can keep other subjects same as before)
};

let questions = questionBank[subject];

let currentQ = 0;
let score = 0;
let userAnswers = [];

document.getElementById("title").innerText =
    "Subject: " + subject.toUpperCase();

function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
    startTimer();
}

// 🎯 SHOW ONE QUESTION
function showQuestion() {

    let q = questions[currentQ];

    document.getElementById("progressText").innerText =
        "Question " + (currentQ + 1) + " / " + questions.length;

    document.getElementById("questionBox").innerText = q.q;

    let optionsHTML = "";

    q.options.forEach((opt, i) => {
        optionsHTML += `
        <label>
            <input type="radio" name="option" value="${i}">
            ${opt}
        </label><br>`;
    });

    document.getElementById("optionsBox").innerHTML = optionsHTML;
}

// ➡️ NEXT QUESTION
function nextQuestion() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    userAnswers.push(Number(selected.value));

    currentQ++;

    if (currentQ < questions.length) {
        showQuestion();
    } else {
        submitQuiz();
    }
}

// 🧠 SUBMIT
function submitQuiz() {

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.ans) score++;
    });

    localStorage.setItem("score", score);
    window.location.href = "result.html";
}

// ⏱️ TIMER
let time = 60;

function startTimer() {
    let t = setInterval(() => {
        time--;
        document.getElementById("timer").innerText =
            "⏱️ Time: " + time;

        if (time <= 0) {
            clearInterval(t);
            alert("⛔ Time's up!");
            submitQuiz();
        }
    }, 1000);
}
