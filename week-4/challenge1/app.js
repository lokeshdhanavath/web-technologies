let scoreA = document.querySelector("#scoreA");
let scoreB = document.querySelector("#scoreB");
let buttons = document.querySelectorAll(".btn button");
let timeDisplay = document.querySelector("#time");
let foulA = document.querySelector("#foulA");
let foulB = document.querySelector("#foulB");
let btn =document.querySelectorAll(".btns button");
let foulsA = 0;
let foulsB = 0;
let teamA = 0;
let teamB = 0;
let timer;
let seconds = 0;
let minutes = 0;
let isRunning = false;

// Event listeners for buttons
buttons[0].addEventListener("click", () => {
    teamA++;
    scoreA.innerText = teamA;
});

buttons[1].addEventListener("click", () => {
    teamB++;
    scoreB.innerText = teamB;
});

function reset () {
    teamA = 0;
    teamB = 0;
    isRunning = false;
    seconds = 0;
    minutes = 0;
    clearInterval(timer);
    scoreA.innerText = 0;
    scoreB.innerText = 0;
    timeDisplay.innerText = "0:00"
}
function startTimer() {
    if (!isRunning){
        isRunning = true;
        timer = setInterval(() =>{
            seconds++;
            if (seconds === 60){
                minutes++;
                seconds=0;
            }
            timeDisplay.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        
        },1000);
    }
}
btn[0].addEventListener("click",()=>{
    foulsA++;
    foulA.innerText = foulsA;
 })
 btn[1].addEventListener("click",()=>{
    foulsB++;
    foulB.innerText = foulsB;
 })
