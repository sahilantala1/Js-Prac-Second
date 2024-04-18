let gameSeq = [];
let userSeq = [];

let gameStarted = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "purple", "green"];

document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    gameStarted = true;
    ("Game started");
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level  ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  btnFlash(randBtn);
}

function checkAns(Idx) {
  if (userSeq[Idx] === gameSeq[Idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game Over! Your Score ${level} Click any key To restart`;
    restart();
  }
}

function btnClick() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btns of allBtns) {
  btns.addEventListener("click", btnClick);
}

function restart() {
  gameStarted = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
