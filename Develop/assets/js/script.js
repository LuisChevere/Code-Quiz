var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var beginBtn = document.querySelector("#beginbutton");
var time = document.getElementById('time');
var timer = document.getElementById('timer');
var savedScore = JSON.parse(localStorage.getItem('userinfo'));
var titleitem = document.getElementById('title-item')
var nxtQuestion
var information = document.getElementById('info');
var alert = document.getElementById('alert');
var btnScore = document.getElementById('btnScore');
var myScore = document.getElementById('myscore');
var addScore = document.getElementById('addscore');
var questionAnswer = document.getElementById('Q-a');
var score = 0;
var scores = 50;
var currentindex = 0;
var allScored = [];
var questions = [

  {
    question: "What is Javascript?",
    choices: [
      'A scripting language',
      'A language inside HTML',
      'A language in the CCS',
      'None of the above']
  },
  {
    answer: 'A scripting language'
  },
  {
    question: 'What is HTML?',
    choices: [
      'Longest provider of internet hosting',
      'A standard system for tagging text files',
      'The way to hide actions',
      'A programming language'],

    answer: 'A standard system for tagging text files'
  },
  {
    question: "Which in an External CSS?",
    choices: [
      '<style>',
      '<head>',
      '<link>',
      'None of the above',
    ]
  },
  {
    answer: '<link>'
  }
];

beginBtn.addEventListener("click", beginQuiz);
function beginQuiz() {
  // if (savedScore !==null) {
  //   allScored = savedScore;
  // }
  // information.classList.add('d-none')
  // beginBtn.classList.add('d-none')
  // timer.classList.remove('d-none')
  // questions.classList.remove('d-none')
  // nxtQuestion = questions[currentindex]

  // displaynxtquestion(nxtQuestion)

  // startTimer()

}

btnScore.addEventListener('click', function() {
  var names = document.getElementById('scoreInput').value
  highscores(names, count)
});

function startTimer() {

  var timeInterval = setInterval(function () {
    timer.innerText = count
    count--;


  }, 1000);
}

function highscores(a, b) {
  var userinfo = {
    inits: a,
    userinfo: b
  };
  allScored.push(userinfo);

  localStorage.setItem("userInfo", JSON.stringify(allScored));
  location.href = "highscore.html";
}

function showQuestion(question) {
  titleitem.innerText = question.title
  question.choices.foreach(Element => {
    var btn = document.createElement('btn')
    btn.className = "btn-prmry"
    btn.innerText = Element.questionAnswer.appendchild(btn)
    btn.addEventListener('click', nxtQuestion)
  });
}

function displaynxtquestion(e) {
  currentindex++
  if (currentindex < questions.length) {
    correction(e.target.innerText == nxtQuestion.answer)
    questionAnswer.innerHTML = ""
    if (currentindex < questions.length) {
      nxtQuestion = questions[currentindex]
    } else {
      currentindex = 0
      displaynxtquestion(nxtQuestion)
    }

  } else {
    finishgame()

  }
}
function correction(answr) {
  if (answr) {
    alert.innerText = "Right"
  } else {
    alert.innerText = "Wrong"
    count = count - 10
    timer.innerHTML = count
  }

  setTimeout(function () {
    alert.innerText = ""
  }, 1000);

}

function finishgame() {
  myScore, innerText = count
  addScore.classList.remove('none')
  timer.classList.remove('none')
  questions.classList.remove('none')
  addScore.classList.remove('none')

}

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