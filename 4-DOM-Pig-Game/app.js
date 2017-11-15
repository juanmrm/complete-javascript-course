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
    var currentDice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + currentDice + ".png";

    // 3 If rolled number was 1 then change player
    //   If rolled number was 6 and previos was 6, active player looses global score and change player
    //   Else update round score.
    if (currentDice === 6 && lastDice === 6) {
      //PLayer looses score
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = '0';
      nextPlayer();
    } else if (currentDice !== 1) {
      // Add score
      roundScore += currentDice;
      // Example to modify the plain content
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = currentDice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePLaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
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

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  lastDice = 0;

  // Modify the style
  document.querySelector('.dice').style.display = 'none';
  
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