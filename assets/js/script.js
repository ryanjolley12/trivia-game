// I shared my code with my study group and I think some people are using my questions variables and StartBtn functions. 

var nextBtn = document.getElementById('next');
var backBtn = document.getElementById('back');
var div = document.getElementById('div');
var container = document.getElementById('container');
var playAgainBtn = document.getElementById("pa");

var submitBtn = document.getElementById('submit');

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var clickCounter=0;
var nextBtn = document.getElementById('next');

var questions = [
    { question: "1. What is the capital of USA?", 
          choices: 
              [" New York", 
              " Dallas", 
              " Atlanta", 
              " Washington, D.C."],
          answer: "Washington, D.C." },
    { question: "2. What is the capital of GA?", 
          choices: 
             [" ORL", 
              " SEA", 
              " DC", 
              " ATL"], 
          answer: "DC" },
    { question: "3. What is a common household pet?", 
          choices: 
              [" dogs", 
              " dragons", 
              " horses", 
              " hippos"], 
          answer: "dogs" },
    { question: "4. What color are strawberries?", 
          choices: 
              [" red", 
              " blue", 
              " yellow", 
              "green"], 
          answer: "red" },
    { question: "5. What is 4x3?", 
          choices: 
              [" TEN ", 
              " SEVEN ", 
              " TWELVE ", 
              " SIXTEEN "], 
          answer: "TEN" },
  ];

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
        confirm("You are out of time. Please click submit");
        // if (confirm == true) {
        //     var onSubmit = results
        // var onSubmit = results 
        // if (confirm==true) {
        //     results() 
        // var confirm = confirm("You are out of time. Please click SUBMIT");
        // if (confirm == true) {
        //     results()  }
       

        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  container.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches("h4")) {
      var chosenAnser = e.target.getAttribute("data-value");
      compareAnswers(chosenAnswer);
    }
  });

  function quizStart() {
      countdown();

      var questionContainer = document.createElement('div');
      questionContainer.textContent = questions[0].question;

      container.appendChild(questionContainer);

      var choicesContainer = document.createElement('choices-div');
      choicesContainer.textContent = questions[0].choices;

      container.appendChild(choicesContainer);

  }

  nextBtn.onclick= function() {
    clickCounter++;

    if (clickCounter==1) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[1].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[1].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickCounter==2) {
    
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[2].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[2].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickCounter==3) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[3].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[3].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickCounter==4) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[4].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[4].choices;
  
        container.appendChild(choicesContainer);
    }

  };
  
  var clickBack = 0
  var backBtn = document.getElementById('back');

  backBtn.onclick= function() {
    clickBack++;

    if (clickBack==1) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[3].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[3].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickBack==2) {
    
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[2].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[2].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickBack==3) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[1].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[1].choices;
  
        container.appendChild(choicesContainer);
    }

    else if (clickBack==3) {
        var questionContainer = document.createElement('div');
        questionContainer.textContent = questions[0].question;
    
        container.appendChild(questionContainer);

        var choicesContainer = document.createElement('choices-div');
        choicesContainer.textContent = questions[0].choices;
  
        container.appendChild(choicesContainer);
    }
  };


    startBtn.onclick = quizStart;

    //score at the end 
    
    submitBtn.onclick = results; 


//Results 
var score = 0 

function results() {
    window.alert("Good job! Your score is" + score + '/' + questions.length);
    window.confirm("Play again?")
    confirm.onclick = quizStart
    preventDefault();
}
