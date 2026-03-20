let subject = localStorage.getItem("subject");

// 🧠 FULL QUESTION BANK (8 SUBJECTS × 10 QUESTIONS)

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
{q:"Responsive design?", options:["Fixed","Adaptive","Dynamic layout"], ans:2}
],

python: [
{q:"Python is?", options:["Compiled","Interpreted","Both"], ans:1},
{q:"Keyword for function?", options:["def","func","function"], ans:0},
{q:"List is?", options:["Mutable","Immutable","None"], ans:0},
{q:"Tuple is?", options:["Mutable","Immutable","Both"], ans:1},
{q:"Loop keyword?", options:["loop","for","repeat"], ans:1},
{q:"Condition?", options:["if","loop","def"], ans:0},
{q:"Library import?", options:["include","import","use"], ans:1},
{q:"Indentation?", options:["Optional","Mandatory","None"], ans:1},
{q:"Python file ext?", options:[".py",".java",".js"], ans:0},
{q:"Output?", options:["print()","echo()","log()"], ans:0}
],

db: [
{q:"Primary key?", options:["Unique","Duplicate","Null"], ans:0},
{q:"SQL stands for?", options:["Structured Query Language","Simple Query","None"], ans:0},
{q:"Insert data?", options:["ADD","INSERT","PUT"], ans:1},
{q:"Delete data?", options:["REMOVE","DELETE","DROP"], ans:1},
{q:"Update data?", options:["CHANGE","UPDATE","SET"], ans:1},
{q:"Select data?", options:["GET","SELECT","FETCH"], ans:1},
{q:"Table row?", options:["Column","Record","Field"], ans:1},
{q:"Column?", options:["Field","Row","Data"], ans:0},
{q:"DBMS?", options:["Database system","App","Code"], ans:0},
{q:"Foreign key?", options:["Link table","Primary","None"], ans:0}
],

java: [
{q:"Java is?", options:["Compiled","Interpreted","Both"], ans:2},
{q:"Main method?", options:["main()","start()","run()"], ans:0},
{q:"OOP stands for?", options:["Object Oriented Programming","Only Program","None"], ans:0},
{q:"Class is?", options:["Blueprint","Function","Loop"], ans:0},
{q:"Object is?", options:["Instance","Class","Loop"], ans:0},
{q:"Inheritance?", options:["Reuse","Delete","Loop"], ans:0},
{q:"Polymorphism?", options:["Many forms","Single","None"], ans:0},
{q:"Encapsulation?", options:["Wrap data","Delete","Loop"], ans:0},
{q:"Abstraction?", options:["Hide details","Show all","None"], ans:0},
{q:"Extension?", options:[".java",".py",".js"], ans:0}
],

js: [
{q:"JS used for?", options:["Frontend","Backend","Both"], ans:2},
{q:"Variable keyword?", options:["var","int","let"], ans:2},
{q:"Function?", options:["function","def","func"], ans:0},
{q:"Array?", options:["[]","{}","()"], ans:0},
{q:"Object?", options:["{}","[]","()"], ans:0},
{q:"Console log?", options:["print","console.log","echo"], ans:1},
{q:"Event?", options:["Click","Loop","Function"], ans:0},
{q:"DOM?", options:["HTML control","CSS","DB"], ans:0},
{q:"Promise?", options:["Async","Sync","Loop"], ans:0},
{q:"JS file?", options:[".js",".py",".java"], ans:0}
],

os: [
{q:"OS stands for?", options:["Operating System","Open System","None"], ans:0},
{q:"Example?", options:["Windows","HTML","CSS"], ans:0},
{q:"Process?", options:["Program running","File","None"], ans:0},
{q:"Thread?", options:["Part process","Whole","None"], ans:0},
{q:"Scheduling?", options:["CPU manage","Memory","None"], ans:0},
{q:"Memory?", options:["RAM","CPU","Disk"], ans:0},
{q:"Kernel?", options:["Core","App","None"], ans:0},
{q:"File system?", options:["Store data","Delete","None"], ans:0},
{q:"Multitasking?", options:["Many tasks","One","None"], ans:0},
{q:"Boot?", options:["Start OS","Stop","None"], ans:0}
],

cn: [
{q:"IP?", options:["Address","Code","None"], ans:0},
{q:"HTTP?", options:["Protocol","Language","None"], ans:0},
{q:"TCP?", options:["Connection","No connect","None"], ans:0},
{q:"UDP?", options:["Fast","Slow","None"], ans:0},
{q:"DNS?", options:["Domain system","Data","None"], ans:0},
{q:"Router?", options:["Route data","Store","None"], ans:0},
{q:"LAN?", options:["Local network","Wide","None"], ans:0},
{q:"WAN?", options:["Wide network","Local","None"], ans:0},
{q:"Firewall?", options:["Security","Data","None"], ans:0},
{q:"Protocol?", options:["Rules","Data","None"], ans:0}
],

ds: [
{q:"DS stands for?", options:["Data Structure","Data System","None"], ans:0},
{q:"Array?", options:["Linear","Non","None"], ans:0},
{q:"Stack?", options:["LIFO","FIFO","None"], ans:0},
{q:"Queue?", options:["FIFO","LIFO","None"], ans:0},
{q:"Linked list?", options:["Nodes","Array","None"], ans:0},
{q:"Tree?", options:["Hierarchy","Linear","None"], ans:0},
{q:"Graph?", options:["Nodes edges","Array","None"], ans:0},
{q:"Search?", options:["Find","Delete","None"], ans:0},
{q:"Sort?", options:["Arrange","Delete","None"], ans:0},
{q:"Algorithm?", options:["Steps","Code","None"], ans:0}
]

};


// 🔥 SAME LOGIC (NO CHANGE BELOW)

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
    container.innerHTML = "";

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
