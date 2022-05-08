const EMOJIS = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

var SITE = document.querySelector(".wholeSite");
var pOne = document.querySelector(".playerOne");
var pTwo = document.querySelector(".playerTwo");

let x = 0
let i = 0
const u = document.querySelector("#one");
const ai = document.querySelector("#two");
const endGame = document.querySelector(".end")
const z = document.querySelector("#hTwo");

function rock() {
    var r = Math.floor(Math.random() * EMOJIS.length);
    if (EMOJIS[0].name === EMOJIS[r].beats) {
        alert("You lost")
        ai.innerHTML = ++i;
    } else if (EMOJIS[0].beats === EMOJIS[r].name) {
        alert("You won")
        u.innerHTML = ++x;
    } else if (EMOJIS[0].name === EMOJIS[r].name) {
        alert("Tie")
    }
    return isWinner();
};

function paper() {
    var r = Math.floor(Math.random() * EMOJIS.length);
    if (EMOJIS[1].name === EMOJIS[r].beats) {
        alert("You lost")
        ai.innerHTML = ++i;
    } else if (EMOJIS[1].beats === EMOJIS[r].name) {
        alert("You won")
        u.innerHTML = ++x;
    } else if (EMOJIS[1].name === EMOJIS[r].name) {
        alert("Tie")
    }
    return isWinner();
};

function scissors() {
    var r = Math.floor(Math.random() * EMOJIS.length);
    if (EMOJIS[2].name === EMOJIS[r].beats) {
        alert("You lost")
        ai.innerHTML = ++i;
    } else if (EMOJIS[2].beats === EMOJIS[r].name) {
        alert("You won")
        u.innerHTML = ++x;
    } else if (EMOJIS[2].name === EMOJIS[r].name) {
        alert("Tie")
    }
    return isWinner();
}

function isWinner() {
    if (i === 10) {
        alert("Computer won !!!!!");
        setTimeout(() => {
           location.reload() 
        }, 1000);
        
    } else if (x === 10) {
        alert("You won !!!!!!!!!!!!!!!!!!");
        setTimeout(() => {
            location.reload();
        }, 1000);
        
    }
}


// if (i === 10) {
//    alert("Computer won !!!!!");
// } else if (x === 10) {
//    alert("You won !!!!!!!!!!!!!!!!!!");
// }