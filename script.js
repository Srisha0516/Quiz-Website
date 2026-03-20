let subject = localStorage.getItem("subject");

let questionBank = {

web: [
    {q:"REST stands for?", options:["Representational State Transfer","Remote Execution","Runtime State"], ans:0},
    {q:"HTTP method to update?", options:["GET","POST","PUT"], ans:2}
],

python: [
    {q:"Python is?", options:["Compiled","Interpreted","Both"], ans:1},
    {q:"Keyword for function?", options:["def","func","function"], ans:0}
],

db: [
    {q:"Primary key?", options:["Unique","Duplicate","Null"], ans:0},
    {q:"SQL stands for?", options:["Structured Query Language","Simple Query","None"], ans:0}
]

};

document.getElementById("title").innerText =
    "Subject: " + subject.toUpperCase();

let questions = questionBank[subject];

function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestions();
    startTimer();
}

function loadQuestions() {
    let container = document.getElementById("questions");

    questions.forEach((q, i) => {
        container.innerHTML += `<p>${i+1}. ${q.q}</p>` +
        q.options.map((opt, j) =>
            `<input type="radio" name="q${i}" value="${j}">${opt}<br>`
        ).join("");
    });
}

let time = 60;

function startTimer() {
    let t = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "⏱️ Time: " + time;

        if (time <= 0) {
            clearInterval(t);
            submitQuiz(true);
        }
    },1000);
}

function submitQuiz(timeout=false) {

    let score = 0;

    questions.forEach((q,i)=>{
        let ans = document.querySelector(`input[name="q${i}"]:checked`);
        if(ans && ans.value == q.ans) score++;
    });

    localStorage.setItem("score", score);

    if(timeout){
        alert("⛔ Time's up!");
    }

    window.location.href = "result.html";
}
