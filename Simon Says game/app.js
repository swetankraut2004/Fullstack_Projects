// Initializing:
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highestScore = 0;
let recentLevel = 0; // Added recentLevel variable

let h2 = document.querySelector("h2"); // Fix: Select single h2 element instead of NodeList

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash"); // Flash is added for button once level up
    setTimeout(function () {
        btn.classList.remove("flash"); // Flash is removed for button
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = []; // For new level, user sequence gets reset
    level++;
    h2.innerText = `Level ${level}`; // Fix: Use backticks for template literals

    let randIdx = Math.floor(Math.random() * 3); // Fix: Randomly choose any button index (0-3)
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Fix: Select a single button instead of NodeList

    gameSeq.push(randColor); // Add selected color to the game sequence
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    if (randBtn) {
        btnFlash(randBtn); // Random button flashes with each level up
    }
}

// To match and check if the sequence matched:
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); // levelUp happens 1 sec after each level is completed (to get time to recognize the next sequence)
        }
    } else {
        recentLevel = level; // Store recent level before game over
        if (highestScore <= level) {
            highestScore = level;
            h2.innerHTML = `<b> Congratulations! New High Score! </b>`;
        }
        setTimeout(function () {
            h2.innerHTML = `Game Over! Your score was <b>${recentLevel}</b> <br>, and <b> Highest Score is: ${highestScore} </b>. Press any key to start.`; // Using recentLevel
        }, 2000);

        document.querySelector("body").style.backgroundColor = "red"; // If game over, flash red
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset(); // New game will be started
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    // To match the correct sequence in which the buttons were flashed
    let userColor = btn.getAttribute("id"); // Fix: Declare userColor
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); // Check the last index color that user has entered in the sequence
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { // Fix: Use `let` in for loop
    btn.addEventListener("click", btnPress); // For every button click, user will get a flash
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


/* 
// Initializing:
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2"); // Fix: Select single h2 element instead of NodeList

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash"); // Flash is added for button once level up
    setTimeout(function () {
        btn.classList.remove("flash"); // Flash is removed for button
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = []; // For new level, user sequence gets reset
    level++;
    h2.innerText = `Level ${level}`; // Fix: Use backticks for template literals

    let randIdx = Math.floor(Math.random() * 3); // Fix: Randomly choose any button index (0-3)
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Fix: Select a single button instead of NodeList

    gameSeq.push(randColor); // Add selected color to the game sequence
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    if (randBtn) {
        btnFlash(randBtn); // Random button flashes with each level up
    }
}

// To match and check if the sequence matched:
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); // levelUp happens 1 sec after each level is completed (to get time to recognize the next sequence)
        }
    } else {
        if (highestScore <= level) {
            highestScore = level;
            h2.innerHTML = `<b> Congratulations! New High Score! </b>`;
        }
        setTimeout(function () {
            h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>, and <b> Highest Score is: ${highestScore} </b>. Press any key to start.`;
        }, 2000);

        document.querySelector("body").style.backgroundColor = "red"; // If game over, flash red
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset(); // New game will be started
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    // To match the correct sequence in which the buttons were flashed
    let userColor = btn.getAttribute("id"); // Fix: Declare userColor
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); // Check the last index color that user has entered in the sequence
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { // Fix: Use `let` in for loop
    btn.addEventListener("click", btnPress); // For every button click, user will get a flash
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
 */