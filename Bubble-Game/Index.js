let Hit = 0;

//function for creating multiple bubbles starts here
function makeBubble(){
    
    //for storing value 
    let clutter = ""
    //for creating multiple bubbles we use for loop
    for (let i = 0; i <=210; i++) {
        //generating random numbers
        let num =Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${num}</div>`
        
    }
    document.querySelector('.bottom-bar').innerHTML=clutter;
}

let timer = 60;
//function for runtimer
function runtimer() {
    let timerInt = setInterval(function(
      
        ) {
            if(timer>0){
                timer--;
                document.querySelector('#timerVal').textContent = timer; 
            }
            else(
                clearInterval(timerInt)
                )  
            }, 1000);
        }
        
//function for hitVal
function hitVal() {
    Hit = Math.floor(Math.random()*10);
    document.querySelector('#HitVal').textContent= Hit;
}

let score = 0
timer = 60;
//function for IncScore
function IncScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent=score;
}

document.querySelector('.bottom-bar').addEventListener('click', function(details){
    let clickedNum = Number(details.target.textContent);
    if (clickedNum == Hit) {
        IncScore();
        hitVal()
    }
});
runtimer();
hitVal();
makeBubble();
