const pl1Btn = document.querySelector('#pl1Btn');
const pl2Btn = document.querySelector('#pl2Btn');
const reset = document.querySelector('#resetBtn');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const zero = 0;
const maxScore = document.querySelector('#maxScore');

pl1Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const score1 = parseInt(player1.innerText) + 1;
    player1.innerText = `${score1}`;
    win();
});

pl2Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const score2 = parseInt(player2.innerText) + 1;
    player2.innerText = `${score2}`;
    win();
});

reset.addEventListener('click', (e) => {
    e.preventDefault();
    player1.innerText = zero;
    player2.innerText = zero;
    pl1Btn.disabled = false;
    pl2Btn.disabled = false;
});

function win(){
    if(player1.innerText == maxScore.value || player2.innerText == maxScore.value){
        pl1Btn.disabled = true;
        pl2Btn.disabled = true;
    }
};