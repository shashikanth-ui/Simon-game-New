let btns = document.querySelectorAll("button");
let player = [];
let computer = [];

btns.forEach(btn => btn.disabled = true);
document.querySelector("p").addEventListener("click",()=>{
    rand();
    document.querySelector("p").innerText = "You Can Do this";
    btns.forEach(btn => btn.disabled = false);
})


function rand(){
    let r = Math.floor(Math.random()*4);
    if (r == 0){
        computer.push("red");
        let audio1 = new Audio("./sounds/red.mp3");
        document.getElementById("red").classList.add("active");
        setTimeout(() => {
        document.getElementById("red").classList.remove("active");
        audio1.play();
        audio1.currentTime = 0;
        }, 250);


    }else if (r == 1){
        computer.push("blue");
        let audio2 = new Audio("./sounds/blue.mp3");
        document.getElementById("blue").classList.add("active");
        setTimeout(() => {
        document.getElementById("blue").classList.remove("active");
        audio2.play();
        audio2.currentTime = 0;
        }, 250);


    }else if (r == 2){
        computer.push("green");
        let audio3 = new Audio("./sounds/green.mp3");
        document.getElementById("green").classList.add("active");
        setTimeout(() => {
        document.getElementById("green").classList.remove("active");
        audio3.play();
        audio3.currentTime = 0;
        }, 250);


    }else{
        computer.push("yellow");
        let audio4 = new Audio("./sounds/yellow.mp3");
        document.getElementById("yellow").classList.add("active");
        setTimeout(() => {
        document.getElementById("yellow").classList.remove("active");
        audio4.play();
        audio4.currentTime = 0;
        }, 250);
    }

}


btns.forEach(button =>{
        button.addEventListener("click",()=>{

        let audio = new Audio(`./sounds/${button.id}.mp3`);
        player.push(button.id);
        setTimeout(() => {
        audio.play();
        audio.currentTime = 0;
        }, 250);

        check();

    })

})


function check() {
    let allMatch = true;
    for (let i = 0; i < player.length; i++) {
        if (player[i] !== computer[i]) {
            allMatch = false;
            break;
        }
    }

    if (!allMatch) {
        endGame();
        return;
    }

    if (player.length === computer.length) {
        player = [];
        setTimeout(rand, 1000);
    }
}

function endGame() {

        document.querySelector("p").innerText = "Game Over! Click me to restart.";
        let audioEnd = new Audio("./sounds/gameover.wav");
        audioEnd.play();
        document.querySelector("p").style.display = "block";
        player = [];
        computer = [];
        btns.forEach(btn => btn.disabled = true);
        document.querySelector("p").addEventListener("click", startGame, { once: true });
}
