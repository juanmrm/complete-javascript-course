/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
  CHALLENGES: see CHALLENGES.png
*/
var scores, roundScore, activePlayer, lastDice;
var gamePLaying; // We use this for state variable

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePLaying) {
    // 1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
    document.getElementById('dice-2').src = "dice-" + dice2 + ".png";

    // 3. Update the round score IF the rolled number was NOT 1
    if (dice1 !== 1 && dice2 !== 1) {
      // Add score
      roundScore += dice1 + dice2;
      // Example to modify the plain content
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }

  /* CHALLENGE 2
    // 3 If rolled number was 1 then change player
    //   If rolled number was 6 and previos was 6, active player looses global score and change player
    //   Else update round score.
    if (dice1 === 6 && lastDice === 6) {
      //PLayer looses score
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice1 !== 1) {
      // Add score
      roundScore += dice1;
      // Example to modify the plain content
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice1;
  */
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePLaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    var inputScore = document.querySelector('.final-score').value;
    var winningScore;

    // Undefined, 0, null or "" are COERCED to false
    // Anything else is COERCED to true
    if (!inputScore || Number.parseInt(inputScore) === NaN) {
      winningScore = 100;
    } else {
      winningScore = inputScore;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      hideDices();
      gamePLaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  lastDice = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

function hideDices() {
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';  
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  lastDice = 0;

  // Modify the style of dices
  hideDices();
  
  // A bit faster than querySelector for Id's
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

  gamePLaying = true;
};

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Example to read the content of an element.
// var x = document.querySelector('#score-0').textContent;
// console.log(x);