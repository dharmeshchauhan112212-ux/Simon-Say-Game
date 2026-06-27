let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let hscore = 0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("touchstart", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});
//for button flash

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100)
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randomInx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomInx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    btnFlash(randomBtn);
};
//button press by user
function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn"); // acess all btns 
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);    // set event for each btn
}

// function for seq check
function check(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    }
    else {
        h2.innerHTML = `Game over! your score was <b>${level-1}.</b> <br>Restart the Game..`;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = "white" ;
        },150);

        reset();
    }
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
};
