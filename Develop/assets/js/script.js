var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var generateBtn = document.querySelector("#beginbutton");
var time = document.getElementById('time');
var savedScore = JSON.parse(localStorage.getItem('userDate'));
var score = 0;
var scores = 50;
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

generateBtn.addEventListener("click",beginQuiz);

function beginQuiz() {
  if(savedScore !==null){

  }
}

function showResults() { }

quiz()

generateBtn.addEventListener("click", showResults);

// function startTimer() {
//   var timeLeft = 100;

//   var timeInterval = setInterval(function () {

//     if (timeLeft > 1) {
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       timeLeft--;

//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;

//     } else {
//       timerEl.textContent = '';

//       clearInterval(timeInterval);
//       displayMessage();
//       winGames()
//     }

//   }, 1000);
// }

