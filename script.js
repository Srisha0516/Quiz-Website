let timeLeft = 60;
let timer = document.getElementById("timer");
let progress = document.getElementById("progress");

let interval = setInterval(() => {
    timeLeft--;
    timer.innerText = "⏱️ Time Left: " + timeLeft + "s";

    progress.style.width = ((60 - timeLeft) / 60) * 100 + "%";

    if (timeLeft <= 0) {
        clearInterval(interval);
        checkAnswers();
    }
}, 1000);


function checkAnswers() {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === "a") score++;
    if (q2 && q2.value === "c") score++;
    if (q3 && q3.value === "b") score++;
    if (q4 && q4.value === "b") score++;
    if (q5 && q5.value === "a") score++;

    let message = "";

    if (score === 5) message = "🔥 Pro Developer!";
    else if (score >= 3) message = "👏 Good job!";
    else message = "📚 Keep learning!";

    document.getElementById("result").innerText =
        "You scored " + score + "/5";

    document.getElementById("message").innerText = message;
}
