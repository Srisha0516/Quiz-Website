let subject = localStorage.getItem("subject");

// fallback if something goes wrong
if (!subject) subject = "web";

let questionBank = {

web: [
{q:"What does HTML stand for?", options:["HyperText Markup Language","Home Tool Markup","Hyperlinks"], ans:0},
{q:"CSS is used for?", options:["Styling","Logic","Database"], ans:0},
{q:"JavaScript is?", options:["Programming Language","Database","Server"], ans:0},
{q:"DOM means?", options:["Document Object Model","Data Object Model","None"], ans:0},
{q:"API stands for?", options:["Application Programming Interface","App Program","None"], ans:0},
{q:"Frontend includes?", options:["UI","Server","DB"], ans:0},
{q:"Backend includes?", options:["Server","UI","CSS"], ans:0},
{q:"Responsive design means?", options:["Flexible layout","Fixed","None"], ans:0},
{q:"HTTP is?", options:["Protocol","Language","None"], ans:0},
{q:"URL means?", options:["Web address","Code","None"], ans:0}
],

cn: [
{q:"IP address is?", options:["Unique identifier","Code","None"], ans:0},
{q:"HTTP is?", options:["Protocol","Language","None"], ans:0},
{q:"TCP is?", options:["Reliable","Fast","None"], ans:0},
{q:"UDP is?", options:["Fast","Slow","None"], ans:0},
{q:"DNS stands for?", options:["Domain Name System","Data Network","None"], ans:0},
{q:"Router does?", options:["Routes data","Stores","None"], ans:0},
{q:"LAN is?", options:["Local Area Network","Wide","None"], ans:0},
{q:"WAN is?", options:["Wide Area Network","Local","None"], ans:0},
{q:"Firewall is?", options:["Security","Speed","None"], ans:0},
{q:"Protocol means?", options:["Rules","Data","None"], ans:0}
],

python: Array(10).fill({q:"Python Question", options:["A","B","C"], ans:0}),
db: Array(10).fill({q:"DB Question", options:["A","B","C"], ans:0}),
java: Array(10).fill({q:"Java Question", options:["A","B","C"], ans:0}),
js: Array(10).fill({q:"JS Question", options:["A","B","C"], ans:0}),
os: Array(10).fill({q:"OS Question", options:["A","B","C"], ans:0}),
ds: Array(10).fill({q:"DS Question", options:["A","B","C"], ans:0})

};

// 🔥 IMPORTANT FIX
let questions = questionBank[subject];

if (!questions) {
    questions = questionBank["web"];
}

let currentQ = 0;
let score = 0;
let userAnswers = [];

document.getElementById("title").innerText =
    "Subject: " + subject.toUpperCase();

// START
function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
}

// SHOW QUESTION
function showQuestion() {

    let q = questions[currentQ];

    // 🔴 SAFETY CHECK
    if (!q) {
        document.getElementById("questionBox").innerText = "Error loading question!";
        return;
    }

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

// NEXT
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

// SUBMIT
function submitQuiz() {

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.ans) score++;
    });

    localStorage.setItem("score", score);
    window.location.href = "result.html";
}

// TIMER
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
