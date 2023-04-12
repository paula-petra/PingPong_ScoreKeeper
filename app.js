//defining variables
const pl1Btn = document.querySelector('#pl1Btn');
const pl2Btn = document.querySelector('#pl2Btn');
const resetBtn = document.querySelector('#resetBtn');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const zero = 0;
const maxScore = document.querySelector('#maxScore');


//onclick function for +1 Player1 Button
pl1Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const score1 = parseInt(player1.innerText) + 1;
    player1.innerText = `${score1}`;
    win();
});

//onclick function for +1 Player2 Button
pl2Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const score2 = parseInt(player2.innerText) + 1;
    player2.innerText = `${score2}`;
    win();
});

//onclick function for Reset Button
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    reset();  
});

//onchange function for select dropdown
maxScore.addEventListener('change', () => {
    reset();
})

//function for gameo over
function win(){
    if(player1.innerText == maxScore.value || player2.innerText == maxScore.value){
        pl1Btn.disabled = true;
        pl2Btn.disabled = true;
        pl1Btn.style.backgroundColor = "rgba(76, 237, 119, 0.6)";
        pl2Btn.style.backgroundColor = "rgba(50, 203, 237, 0.6)";
        if(player1.innerText == maxScore.value){
            player1.classList.add('winner');
            player2.classList.add('loser');
        } else{
            player1.classList.add('loser');
            player2.classList.add('winner');
        }
    }
};

//reset function
function reset(){
    player1.innerText = zero;
    player2.innerText = zero;
    player1.classList.remove('loser', 'winner');
    player2.classList.remove('winner', 'loser');
    pl1Btn.disabled = false;
    pl2Btn.disabled = false;
    player1.style.color = ""
    player2.style.color = ""
    pl1Btn.style.backgroundColor = ""
    pl2Btn.style.backgroundColor = ""
}