//High Scores Section

var highscoresList = document.querySelector('#highscoresList');
var backButton = document.querySelector('#backButton');
var clearButton = document.querySelector('#clear')

function showScores() {
  if (savedScore !== null) {
    var scoreList = document.createElement('sl');
    scoreList.className = "scorelistClass";
    for (var i = 0; i < savedScore.length; i++) {
      var initials = savedScore[i].inits;
      var scores = savedScore[i].userinfo
      var enteredScore = document.createElement('li');
      enteredScore.innerHTML = initials + '-' + scores;
      scoreList.appendChild(enteredScore);
    }
    highscoresList.appendChild(scoreList);
  }
};

showScores();

clearButton.addEventListener('click', function () {
  highscoresList.innerHTML = '';
  window.localStorage.clear();
});