
// var nextBtn = document.getElementById('next');
// var backBtn = document.getElementById('back');


function quiz() {
    [
    {
        question: "what is the capital of USA?", choices: ["ORL", "SEA", "DC", "ATL"], answer: 2
    },

    { 
        question: "what is the capital of GA?", choices: ["ORL", "SEA", "DC", "ATL"], answer: 3
    },

    {
        question: "what's the best animal?", choices: ["dogs", "cats", "frogs", "hippos"], answer: 0
    }
  ];

    var container = document.getElementById('container');
        
        for (var i = 0; i < questions.length; i++) 
        {
            var questionContainer = document.createElement('div');
            questionContainer.textContent = questions[i].question;

        var options = questions[i].choices;
        
        for (var opt in options) 
        {
             //create radiobutton
            //append radiobutton to a div 
            var radioBtn = document.createElement('radio');
            div.appendChild(radioBtn);
        
        }
      container.appendChild(questionContainer);
        }
        console.log(quiz);
}

var submitBtn = document.getElementById('submit');

function results() {
    window.alert("Good job! Your score is" + 5);
}

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

//Timer
function countdown() {
    var timeLeft = 12;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() { 
      // As long as the `timeLeft` is greater than 1
  
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }

    startBtn.onclick = countdown;

    //score at the end 
    
    submitBtn.onclick = results; 