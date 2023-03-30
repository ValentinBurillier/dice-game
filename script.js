/* ----------- LIST OF VARIABLES -----------*/
let scoresCours = [...document.getElementsByClassName('scoreCours')];
let scoresTotal = [...document.getElementsByClassName('scoreTotal')];
let p1cours = Number(scoresCours[0].textContent);

  // FELICITATION MESSSAGE
let message = [...document.getElementsByClassName('win')][0];

  // BUTTONS
let holdBtn = document.getElementsByClassName('btn-hold')[0];
let rollDiceBtn = document.getElementsByClassName('btn-rollDice')[0];

  // JOUEURS
let joueur1 = 'Joueur 1';
let joueur2 = 'Joueur 2';

let player1 = true;
let player2 = false;

/* START GAME() ON CLICK START BUTTON */
let btnStart = document.getElementsByClassName('btn-start')[0];
btnStart.addEventListener('click', game);


/* --------- LIST OF FUNCTIONS ----------*/

/* GAME */
function game() {

  // REMOVE START BUTTON
  btnStart.classList.remove('btn--enable');
  btnStart.classList.add('btn--disabled');

  // GET AND DISPLAY HOLD BUTTON
  holdBtn.classList.remove('btn--disabled');
  holdBtn.classList.add('btn--enable');

  // GET AND DISPLAY ROLL DICE BUTTON
  rollDiceBtn.classList.remove('btn--disabled')
  rollDiceBtn.classList.add('btn--enable');

  // RESET SCORES
  reset();

  // TURN PLAYERS
  playersTurn(player1, player2);
}

/* GENERER NB ALEATOIRE ENTRE 1 ET 6 */
function random() {
  return Math.round(Math.random() * (6 - 1) + 1)
};

/* RESET */
function reset() {
  // SCORE EN COURS
  scoresCours.forEach((score) => score.textContent = 0)
  // SCORE TOTAL
  scoresTotal.forEach((total) => total.textContent = 0)
}


/* PLAYERS TURN */
function playersTurn (player1, player2) {
  rollDiceBtn.addEventListener('click',  () => {
    if (player1 === true && player2 === false) {
      let numberDice = random();
      if (numberDice === 1) {
        player1 = !player1
        player2 = !player2
        resetScoreP1()
      } else {
        let p1cours = Number(scoresCours[0].textContent);
        let cours = numberDice + p1cours;
        scoresCours[0].textContent = cours;
      }
      
    } else if (player1 === false && player2 === true) {
      let numberDice = random();
      if (numberDice === 1) {
        player1 = !player1
        player2 = !player2
        resetScoreP2()
      } else {
        let p2cours = Number(scoresCours[1].textContent);
        let cours = numberDice + p2cours;
        scoresCours[1].textContent = cours;
      }

    }
  })

  holdBtn.addEventListener('click', () => {
    if (player1 === true && player2 === false) {
      let p1cours = Number(scoresCours[0].textContent);
      scoresTotal[0].textContent = p1cours + Number(scoresTotal[0].textContent);
      scoresCours[0].textContent = 0;
      let scoreP1 = scoresTotal[0].textContent
      verification(scoreP1, joueur1);
      player1 = !player1
      player2 = !player2
    } else if(player1 === false && player2 === true) {
      let p2cours = Number(scoresCours[1].textContent);
      scoresTotal[1].textContent = p2cours + Number(scoresTotal[1].textContent);
      scoresCours[1].textContent = 0;
      let scoreP2 = scoresTotal[1].textContent
      verification(scoreP2, joueur2);
      player1 = !player1
      player2 = !player2
    }
  })
}

/* SCORE VERIFICATION */
function verification(score, player) {
  if (score > 100) {
    // REMOVE START BUTTON
    btnStart.classList.remove('btn--disabled');
    btnStart.classList.add('btn--enable');

    // GET AND DISPLAY HOLD BUTTON
    holdBtn.classList.remove('btn--enable');
    holdBtn.classList.add('btn--disabled');

    // GET AND DISPLAY ROLL DICE BUTTON
    rollDiceBtn.classList.remove('btn--enable')
    rollDiceBtn.classList.add('btn--disabled');
    
    btnStart.textContent = 'RESTART'
    messageFelicitation()
  }
}

/* MESSAGE FELICITATION */
function messageFelicitation() {
    message.classList.remove('section__win--disabled');
    message.classList.add('section__win--enable')
}

/* RESET SCORE EN COURS PLAYER 1 */
function resetScoreP1() {
  let resetP1 = document.getElementsByClassName('scoreCoursP1')[0];
  resetP1.textContent = 0;
}

/* RESET SCORE EN COURS PLAYER 1 */
function resetScoreP2() {
  let resetP2 = document.getElementsByClassName('scoreCoursP2')[0];
  resetP2.textContent = 0;
}