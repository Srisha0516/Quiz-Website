let subject = localStorage.getItem("subject");

// 🛠️ DEFAULT FIX (IMPORTANT)
if (!subject) {
    subject = "web"; // fallback
}

// ✅ REAL QUESTIONS (sample for all subjects)
let questionBank = {

web: [
{q:"What is HTML?", options:["Structure","Style","Logic"], ans:0},
{q:"CSS is used for?", options:["Design","Data","Logic"], ans:0},
{q:"JS is?", options:["Language","DB","Server"], ans:0},
{q:"DOM means?", options:["Document Object Model","Data Model","None"], ans:0},
{q:"API is?", options:["Interface","App","None"], ans:0},
{q:"Frontend?", options:["UI","DB","Server"], ans:0},
{q:"Backend?", options:["Server","UI","CSS"], ans:0},
{q:"Responsive?", options:["Flexible","Fixed","None"], ans:0},
{q:"HTTP?", options:["Protocol","Code","None"], ans:0},
{q:"URL?", options:["Address","Code","None"], ans:0}
],

cn: [
{q:"IP address?", options:["Identifier","Code","None"], ans:0},
{q:"HTTP?", options:["Protocol","Lang","None"], ans:0},
{q:"TCP?", options:["Reliable","Fast","None"], ans:0},
{q:"UDP?", options:["Fast","Slow","None"], ans:0},
{q:"DNS?", options:["Domain system","Data","None"], ans:0},
{q:"Router?", options:["Routes data","Stores","None"], ans:0},
{q:"LAN?", options:["Local","Wide","None"], ans:0},
{q:"WAN?", options:["Wide","Local","None"], ans:0},
{q:"Firewall?", options:["Security","Speed","None"], ans:0},
{q:"Protocol?", options:["Rules","Code","None"], ans:0}
],

python: Array(10).fill({q:"Python question", options:["A","B","C"], ans:0}),
db: Array(10).fill({q:"DB question", options:["A","B","C"], ans:0}),
java: Array(10).fill({q:"Java question", options:["A","B","C"], ans:0}),
js: Array(10).fill({q:"JS question", options:["A","B","C"], ans:0}),
os: Array(10).fill({q:"OS question", options:["A","B","C"], ans:0}),
ds: Array(10).fill({q:"DS question", options:["A","B","C"], ans:0})

};

// 🛠️ SAFE FALLBACK
let questions = questionBank[subject] || questionBank["web"];

let currentQ = 0;
let score = 0;
let userAnswers = [];

document.getElementById("title").innerText =
    "Subject: " + subject.toUpperCase();

// 🚀 START QUIZ
function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
    startTimer();
}

// 🎯 SHOW QUESTION
function showQuestion() {

    let q = questions[currentQ];

    document.getElementById("progressText").innerText =
        "Question " + (currentQ + 1) + " / 10";

    document.getElementById("questionBox").innerText = q.q;

    let optionsHTML = "";

    q.options.forEach((opt, i) => {
        optionsHTML += `
        <label>
            <input type="radio" name="option" value="${i}">
            ${opt}
        </label>`;
    });

    document.getElementById("optionsBox").innerHTML = optionsHTML;
}

// ➡️ NEXT
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
