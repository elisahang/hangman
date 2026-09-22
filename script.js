let word1 = ["d","o","g"];
let turnsLeft = 8;
let guessedlet = []

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


const keyboard = document.querySelector(".keyboard");
const word = document.querySelector("#word");
const screen = document.querySelector(".screen");

const button = document.querySelector("#start");
const game = document.querySelector(".game");
const lose = document.querySelector(".lose");
button.addEventListener("click",()=>{
    screen.style.display = "none";
    game.style.display = "block";
});

const button2 = document.querySelector("#how");
const howto = document.querySelector(".howto");
button2.addEventListener("click",()=>{
    screen.style.display = "none";
    howto.style.display = "block";

});

const buttonx = document.querySelector("#x");
buttonx.addEventListener("click", ()=> {
    howto.style.display = "none";
    screen.style.display = "block";
});


for (const letter of letters) {
    const Button = document.createElement("Button");
    const message = document.querySelector("#message");

    Button.textContent = letter;

    Button.addEventListener("click", () => {
        if (word1.includes(Button.textContent)){
            Button.style.backgroundColor = "yellowgreen";
            message.textContent = "Your guess is correct :)";
            guessedlet.push(letter);
            showWord();
        } else {
            Button.style.backgroundColor = "tomato";
            turnsLeft--;
            message.textContent = "Your guess was incorrect :(";
            drawHangman();
            if (turnsLeft===0){
                lose.style.display = "block";
            }
        }
    });

    keyboard.append(Button);
}


function showWord(){
    word.textContent = "";
    for (const letter of word1){
        if (guessedlet.includes(letter)){
            word.textContent += letter + " ";
        } else{
            word.textContent += "__ ";
        }
    }
}

showWord()

const c = document.getElementById("Canvas");
const ctx = c.getContext("2d");

function drawHangman(){
    if (turnsLeft===7){
        ctx.beginPath();
        ctx.arc(200, 150, 35, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    } else if (turnsLeft === 6){
        ctx.moveTo(200,185);
        ctx.lineTo(200,255); 
        ctx.stroke();   
    } else if(turnsLeft===5){
        ctx.moveTo(200,255);
        ctx.lineTo(235,300); 
        ctx.stroke(); 
    } else if (turnsLeft===4){
        ctx.moveTo(200,255);
        ctx.lineTo(165,300); 
        ctx.stroke(); 
    } else if (turnsLeft===3){
        ctx.moveTo(200,220);
        ctx.lineTo(165,190); 
        ctx.stroke(); 
    } else if (turnsLeft===2){
        ctx.moveTo(200,220);
        ctx.lineTo(235,190); 
        ctx.stroke(); 
    } else if (turnsLeft===1){
        ctx.beginPath();
        ctx.moveTo(180,150);
        ctx.lineTo(190,140);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(180,140);
        ctx.lineTo(190,150);
        ctx.closePath();
        ctx.stroke();
    } else if (turnsLeft===0){
        ctx.beginPath();
        ctx.moveTo(210,140);
        ctx.lineTo(220,150);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(220,140);
        ctx.lineTo(210,150);
        ctx.closePath();
        ctx.stroke();

    }
}

ctx.beginPath();
ctx.moveTo(70,350);
ctx.lineTo(280,350);

ctx.moveTo(100,350);
ctx.lineTo(100,80);

ctx.moveTo(100,80);
ctx.lineTo(200,80);

ctx.moveTo(200,80);
ctx.lineTo(200,115);

ctx.stroke();

