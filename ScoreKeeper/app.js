
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector('#p2Display')
}

//Move this elements to an object for p1 and p2
// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0; //moved to an object
// let p2Score = 0;
let winningScore=3;
let isGameOver = false;

function updateScore(player, opponent){
    player.score +=1;
    if(player.score === winningScore){
        isGameOver=true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener("click", function(){
    //This part was moved to updatedScore function
//     if(!isGameOver){
//         p1Score += 1;
//         if(p1Score === winningScore){
//             isGameOver=true;
//             p1Display.classList.add('winner');
//             p2Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }      
//         p1Display.textContent=p1Score;
//     }
    updateScore(p1,p2);
})


p2.button.addEventListener("click", function(){
        //This part was moved to updatedScore function
//     if(!isGameOver){
//         p2Score += 1;
//         if(p2Score === winningScore){
//             isGameOver=true;
//             p2Display.classList.add('winner');
//             p1Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }      
//         p2Display.textContent=p2Score;
//     }
    updateScore(p2,p1);
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset)

//Update reset function refrencing p1 and p2 objects
function reset(){
    isGameOver=false;
    // we move all this part to a loop
    // p1.score=0;
    // p2.score=0;
    // p1.display.textContent = p1.score;
    // p2.display.textContent = p2.score;
    // p1.display.classList.remove('winner', 'loser');
    // p2.display.classList.remove('winner', 'loser');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent = p.score;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}


