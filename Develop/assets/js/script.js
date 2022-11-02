var qContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var generateBtn = document.querySelector("#beginbutton");

var questions = [

  {
    question: "What is Javascript?",
    choices: {
      1:'A scripting language', 
      2:'A language inside HTML', 
      3:'A language in the CCS', 
      4:'None of the above'}
  },
  {
    answer: 'A scripting language'
  },
  {
    question: 'What is HTML?',
    choices: {
      1:'Longest provider of internet hosting', 
      2:'A standard system for tagging text files', 
      3:'The way to hide actions', 
      4:'A programming language'}
  },
  {
    answer: 'A standard system for tagging text files'
  },
  {
    question: "Which in an External CSS?",
    choices: {
      1: '<style>',
      2: '<head>',
      3: '<link>',
      4: 'None of the above'
    }
  },
  {
    answer: '3'
  }
];


function quiz() {
  var output = [];

  questions.forEach(
    (questions, 0) => {
    var answer = [a];

    for(0.answer) { 

      answer.push()
    }
  }
  )




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

