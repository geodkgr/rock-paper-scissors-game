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

const SITE = document.getElementsByClassName("wholeSite");
const pOne = document.getElementsByClassName(".playerOne");
const pTwo = document.getElementsByClassName(".playerTwo");

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
}