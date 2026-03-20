let subject = localStorage.getItem("subject");

// fallback if opened directly
if (!subject) subject = "web";

// ✅ FULL QUESTION BANK (REAL QUESTIONS)
let questionBank = {

web: [
{q:"What does HTML stand for?", options:["HyperText Markup Language","Home Tool Markup","Hyperlinks"], ans:0},
{q:"CSS is used for?", options:["Styling","Logic","Database"], ans:0},
{q:"JavaScript is?", options:["Programming Language","Database","Server"], ans:0},
{q:"DOM means?", options:["Document Object Model","Data Model","None"], ans:0},
{q:"API stands for?", options:["Application Programming Interface","App Program","None"], ans:0},
{q:"Frontend includes?", options:["UI","Server","DB"], ans:0},
{q:"Backend includes?", options:["Server","UI","CSS"], ans:0},
{q:"Responsive design means?", options:["Flexible layout","Fixed","None"], ans:0},
{q:"HTTP is?", options:["Protocol","Language","None"], ans:0},
{q:"URL means?", options:["Web address","Code","None"], ans:0}
],

python: [
{q:"Python is?", options:["Interpreted","Compiled","None"], ans:0},
{q:"Keyword for function?", options:["def","func","function"], ans:0},
{q:"List is?", options:["Mutable","Immutable","None"], ans:0},
{q:"Tuple is?", options:["Immutable","Mutable","None"], ans:0},
{q:"Loop keyword?", options:["for","loop","repeat"], ans:0},
{q:"Condition keyword?", options:["if","loop","def"], ans:0},
{q:"Import keyword?", options:["import","include","use"], ans:0},
{q:"Indentation is?", options:["Mandatory","Optional","None"], ans:0},
{q:"File extension?", options:[".py",".js",".java"], ans:0},
{q:"Output function?", options:["print()","echo()","log()"], ans:0}
],

db: [
{q:"Primary key is?", options:["Unique","Duplicate","Null"], ans:0},
{q:"SQL stands for?", options:["Structured Query Language","Simple Query","None"], ans:0},
{q:"Insert data?", options:["INSERT","ADD","PUT"], ans:0},
{q:"Delete data?", options:["DELETE","REMOVE","DROP"], ans:0},
{q:"Update data?", options:["UPDATE","CHANGE","SET"], ans:0},
{q:"Select data?", options:["SELECT","GET","FETCH"], ans:0},
{q:"Row is?", options:["Record","Column","Field"], ans:0},
{q:"Column is?", options:["Field","Row","Data"], ans:0},
{q:"DBMS is?", options:["Database system","App","Code"], ans:0},
{q:"Foreign key?", options:["Link table","Primary","None"], ans:0}
],

java: [
{q:"Java is?", options:["Both compiled & interpreted","Compiled only","None"], ans:0},
{q:"Main method?", options:["main()","start()","run()"], ans:0},
{q:"OOP stands for?", options:["Object Oriented Programming","Only Program","None"], ans:0},
{q:"Class is?", options:["Blueprint","Function","Loop"], ans:0},
{q:"Object is?", options:["Instance","Class","Loop"], ans:0},
{q:"Inheritance means?", options:["Reuse","Delete","Loop"], ans:0},
{q:"Polymorphism?", options:["Many forms","Single","None"], ans:0},
{q:"Encapsulation?", options:["Wrap data","Delete","None"], ans:0},
{q:"Abstraction?", options:["Hide details","Show all","None"], ans:0},
{q:"File extension?", options:[".java",".py",".js"], ans:0}
],

js: [
{q:"JS used for?", options:["Both frontend & backend","Only frontend","None"], ans:0},
{q:"Variable keyword?", options:["let","int","var"], ans:0},
{q:"Function keyword?", options:["function","def","func"], ans:0},
{q:"Array syntax?", options:["[]","{}","()"], ans:0},
{q:"Object syntax?", options:["{}","[]","()"], ans:0},
{q:"Console log?", options:["console.log","print","echo"], ans:0},
{q:"Event example?", options:["click","loop","function"], ans:0},
{q:"DOM used for?", options:["HTML control","CSS","DB"], ans:0},
{q:"Promise is?", options:["Async","Sync","Loop"], ans:0},
{q:"File extension?", options:[".js",".py",".java"], ans:0}
],

os: [
{q:"OS stands for?", options:["Operating System","Open System","None"], ans:0},
{q:"Example?", options:["Windows","HTML","CSS"], ans:0},
{q:"Process is?", options:["Running program","File","None"], ans:0},
{q:"Thread is?", options:["Part of process","Whole","None"], ans:0},
{q:"Scheduling?", options:["CPU management","Memory","None"], ans:0},
{q:"Memory example?", options:["RAM","CPU","Disk"], ans:0},
{q:"Kernel?", options:["Core","App","None"], ans:0},
{q:"File system?", options:["Store data","Delete","None"], ans:0},
{q:"Multitasking?", options:["Many tasks","One","None"], ans:0},
{q:"Boot means?", options:["Start OS","Stop","None"], ans:0}
],

cn: [
{q:"IP address is?", options:["Identifier","Code","None"], ans:0},
{q:"HTTP stands for?", options:["HyperText Transfer Protocol","High Transfer","None"], ans:0},
{q:"TCP is?", options:["Reliable","Unreliable","None"], ans:0},
{q:"UDP is?", options:["Fast","Slow","None"], ans:0},
{q:"DNS is used for?", options:["Domain names","Data","None"], ans:0},
{q:"Router does?", options:["Routes data","Stores","None"], ans:0},
{q:"LAN means?", options:["Local Area Network","Wide","None"], ans:0},
{q:"WAN means?", options:["Wide Area Network","Local","None"], ans:0},
{q:"Firewall is?", options:["Security","Speed","None"], ans:0},
{q:"Protocol means?", options:["Rules","Code","None"], ans:0}
],

ds: [
{q:"DS stands for?", options:["Data Structure","Data System","None"], ans:0},
{q:"Array is?", options:["Linear","Non-linear","None"], ans:0},
{q:"Stack follows?", options:["LIFO","FIFO","None"], ans:0},
{q:"Queue follows?", options:["FIFO","LIFO","None"], ans:0},
{q:"Linked list uses?", options:["Nodes","Array","None"], ans:0},
{q:"Tree is?", options:["Hierarchy","Linear","None"], ans:0},
{q:"Graph uses?", options:["Nodes & edges","Array","None"], ans:0},
{q:"Search means?", options:["Find","Delete","None"], ans:0},
{q:"Sort means?", options:["Arrange","Delete","None"], ans:0},
{q:"Algorithm is?", options:["Steps","Code","None"], ans:0}
]

};

// ✅ SAFE LOAD
let questions = questionBank[subject] || questionBank["web"];

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

    document.getElementById("progressText").innerText =
        "Question " + (currentQ + 1) + " / 10";

    document.getElementById("questionBox").innerText =
        q.q || "Question not found";

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
