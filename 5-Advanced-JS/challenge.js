// Ver descripcion en CHALLENGE-1.PNG Y CHALLENGE-2.PNG
(function () {
  
  function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };
  
  var questions = [
    new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0),
    new Question('What\'s the name of this courser\'s  teacher?', ['John', 'Michael', 'Jonas'], 2),
    new Question('What does best describe coding?', ['Boring','Hard','Fun','Tedious'], 2)
  ];

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (answer, callback) {
    var sc;
    if (answer === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' +  score);
    console.log('-------------------------------------');
  }

  function score() {
    var sc = 0;
    return function(correct) {
      if(correct) {
        sc++;
      }
      return sc;
    }
  }
  var keepScore = score();
  
  function nextQuestion() {
    const n = Math.round(Math.random() * (questions.length - 1));
    const q = questions[n];
    q.displayQuestion();
    var answer = prompt('Please select the correct answer.');
    if(answer !== 'exit') {
      q.checkAnswer(parseInt(answer), keepScore);
      nextQuestion();  
    }
  }

  nextQuestion();

})();




