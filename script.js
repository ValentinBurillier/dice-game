/* ----------- LIST OF VARIABLES -----------*/
let scoresCours = [...document.getElementsByClassName('scoreCours')];
let scoresTotal = [...document.getElementsByClassName('scoreTotal')];
let p1cours = Number(scoresCours[0].textContent);

  // FELICITATION MESSSAGE
let message = [...document.getElementsByClassName('win')][0];
let messageP = message.children[1]

  // GIF ANIMATION
let gif = document.getElementsByClassName('gif')[0];

  // BUTTONS
let holdBtn = document.getElementsByClassName('btn-hold')[0];
let rollDiceBtn = document.getElementsByClassName('btn-rollDice')[0];
let btnRestart = document.getElementsByClassName('btn-restart')[0];
btnRestart.classList.replace('btn--enable', 'btn--disabled')
  // JOUEURS
let joueur1 = 'PLAYER 1';
let joueur2 = 'PLAYER 2';

let player1 = true;
let player2 = false;

  // Images dice
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');

  // CONTAINER GREEN BORDER
let SectionTL = document.getElementsByClassName('sectionTL')[0];
let SectionBR = document.getElementsByClassName('sectionBR')[0];

  // AUDIO SUCCESS
let soundSuccess = document.getElementsByTagName('audio')[0];
soundSuccess.pause()

/* START GAME() ON CLICK START BUTTON */
let btnStart = document.getElementsByClassName('btn-start')[0];
btnStart.addEventListener('click', game);


/* --------- LIST OF FUNCTIONS ----------*/

/* GAME */
function game() {

  // REMOVE FELICITATIONS MESSAGE
  message.classList.replace('section__win--enable', 'section__win--disabled');
  soundSuccess.pause()
  soundSuccess.currentTime = 0;

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
  SectionTL.classList.add('green-border');
  SectionBR.classList.remove('green-border');

  gif.classList.replace('gif--enable', 'gif--disabled')

  rollDiceBtn.addEventListener('click',  () => {
    if (player1 === true && player2 === false) {
      let numberDice = random();
      dices(numberDice)
      if (numberDice === 1) {
        player1 = !player1
        player2 = !player2
        resetScoreP1()
        SectionTL.classList.remove('green-border');
        SectionBR.classList.add('green-border');
      } else {
        let p1cours = Number(scoresCours[0].textContent);
        let cours = numberDice + p1cours;
        scoresCours[0].textContent = cours;
      }
      
    } else if (player1 === false && player2 === true) {
      let numberDice = random();
      dices(numberDice)
      if (numberDice === 1) {
        player1 = !player1
        player2 = !player2
        resetScoreP2()
        SectionTL.classList.add('green-border');
        SectionBR.classList.remove('green-border');
      } else {
        let p2cours = Number(scoresCours[1].textContent);
        let cours = numberDice + p2cours;
        scoresCours[1].textContent = cours;
      }

    }
  })

  holdBtn.addEventListener('click', () => {
    console.log(player1, player2)
    if (player1 === true && player2 === false) {
      let p1cours = Number(scoresCours[0].textContent);
      scoresTotal[0].textContent = p1cours + Number(scoresTotal[0].textContent);
      scoresCours[0].textContent = 0;
      let scoreP1 = scoresTotal[0].textContent
      verification(scoreP1, joueur1);
      player1 = !player1
      player2 = !player2
      SectionTL.classList.remove('green-border');
      SectionBR.classList.add('green-border');
    } else if(player1 === false && player2 === true) {
      let p2cours = Number(scoresCours[1].textContent);
      scoresTotal[1].textContent = p2cours + Number(scoresTotal[1].textContent);
      scoresCours[1].textContent = 0;
      let scoreP2 = scoresTotal[1].textContent
      verification(scoreP2, joueur2);
      player1 = !player1
      player2 = !player2
      SectionTL.classList.add('green-border');
      SectionBR.classList.remove('green-border');
    }
  })
}

function dices(numberDice) {
  switch(numberDice) {
    case 1:
      img1.classList.add('img--enable');
      img1.classList.remove('img--disabled');
      img2.classList.add('img--disabled');
      img2.classList.remove('img--enable');
      img3.classList.add('img--disabled');
      img3.classList.remove('img--enable');
      img4.classList.add('img--disabled');
      img4.classList.remove('img--enable');
      img5.classList.add('img--disabled');
      img5.classList.remove('img--enable');
      img6.classList.add('img--disabled');
      img6.classList.remove('img--enable');
      console.log('1');
      break;
    case 2:
      img1.classList.add('img--disabled');
      img1.classList.remove('img--enable');
      img2.classList.add('img--enable');
      img2.classList.remove('img--disabled');
      img3.classList.add('img--disabled');
      img3.classList.remove('img--enable');
      img4.classList.add('img--disabled');
      img4.classList.remove('img--enable');
      img5.classList.add('img--disabled');
      img5.classList.remove('img--enable');
      img6.classList.add('img--disabled');
      img6.classList.remove('img--enable');
      break;
    case 3:
      img1.classList.add('img--disabled');
      img1.classList.remove('img--enable');
      img2.classList.add('img--disabled');
      img2.classList.remove('img--enable');
      img3.classList.add('img--enable');
      img3.classList.remove('img--disabled');
      img4.classList.add('img--disabled');
      img4.classList.remove('img--enable');
      img5.classList.add('img--disabled');
      img5.classList.remove('img--enable');
      img6.classList.add('img--disabled');
      img6.classList.remove('img--enable');
      break;
    case 4:
      img1.classList.add('img--disabled');
      img1.classList.remove('img--enable');
      img2.classList.add('img--disabled');
      img2.classList.remove('img--enable');
      img3.classList.add('img--disabled');
      img3.classList.remove('img--enable');
      img4.classList.add('img--enable');
      img4.classList.remove('img--disabled');
      img5.classList.add('img--disabled');
      img5.classList.remove('img--enable');
      img6.classList.add('img--disabled');
      img6.classList.remove('img--enable');
      break;
    case 5:
      img1.classList.add('img--disabled');
      img1.classList.remove('img--enable');
      img2.classList.add('img--disabled');
      img2.classList.remove('img--enable');
      img3.classList.add('img--disabled');
      img3.classList.remove('img--enable');
      img4.classList.add('img--disabled');
      img4.classList.remove('img--enable');
      img5.classList.add('img--enable');
      img5.classList.remove('img--disabled');
      img6.classList.add('img--disabled');
      img6.classList.remove('img--enable');
      break;
    case 6:
      img1.classList.add('img--disabled');
      img1.classList.remove('img--enable');
      img2.classList.add('img--disabled');
      img2.classList.remove('img--enable');
      img3.classList.add('img--disabled');
      img3.classList.remove('img--enable');
      img4.classList.add('img--disabled');
      img4.classList.remove('img--enable');
      img5.classList.add('img--disabled');
      img5.classList.remove('img--enable');
      img6.classList.add('img--enable');
      img6.classList.remove('img--disabled');
      break;

    default:
      console.log('error display dice image');
  };};

/* SCORE VERIFICATION */
function verification(score, player) {
  if (score >= 100) {
    let playerWin = player

    // REMOVE START BUTTON
    btnStart.classList.remove('btn--disabled');
    btnStart.classList.add('btn--enable');

    // GET AND DISPLAY HOLD BUTTON
    holdBtn.classList.remove('btn--enable');
    holdBtn.classList.add('btn--disabled');

    // GET AND DISPLAY ROLL DICE BUTTON
    rollDiceBtn.classList.remove('btn--enable')
    rollDiceBtn.classList.add('btn--disabled');
    
    btnRestart.classList.replace('btn--disabled', 'btn--enable')
    messageFelicitation(playerWin)

    btnRestart.addEventListener('click', () => {
      console.log("click")
      holdBtn.classList.replace('btn--disabled', 'btn--enable')
      rollDiceBtn.classList.replace('btn--disabled', 'btn-enable')
      btnRestart.classList.replace('btn--enable', 'btn--disabled')
      btnStart.classList.replace('btn--enable', 'btn--disabled')
      message.classList.replace('section__win--enable', 'section__win--disabled')
      gif.classList.replace('gif--enable', 'gif--disabled')
      reset()
      location.reload()
    })
  }
}

/* FELICITATION */
function messageFelicitation(playerWin) {
    message.classList.remove('section__win--disabled');
    message.classList.add('section__win--enable')
    messageP.textContent = `${playerWin} a gagné !`
    soundSuccess.play()
    gif.classList.replace('gif--disabled', 'gif--enable')
}

/* RESET SCORE EN COURS PLAYER 1 */
function resetScoreP1() {
  let resetP1 = document.getElementsByClassName('scoreCoursP1')[0];
  resetP1.textContent = 0;
}

/* RESET SCORE EN COURS PLAYER 2 */
function resetScoreP2() {
  let resetP2 = document.getElementsByClassName('scoreCoursP2')[0];
  resetP2.textContent = 0;
}