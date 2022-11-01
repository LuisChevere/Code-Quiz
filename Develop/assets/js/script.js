var generateBtn = document.querySelector("#generate");

KeyboardEvent()



function startTimer(){
        var timeLeft = 5;
      
        var timeInterval = setInterval(function () {

          if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;

          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;

          } else {
            timerEl.textContent = '';
    
            clearInterval(timeInterval);
            displayMessage();
            winGames()
          }

        }, 1000);
      }
      
generateBtn.addEventListener("click",startTimer);