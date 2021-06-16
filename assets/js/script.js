// I shared my code with my study group and I think some people are using my questions variables and StartBtn functions. 

var nextBtn = document.getElementById('next');
var backBtn = document.getElementById('back');
var div = document.getElementById('div');


var questions = [
    { question: "1. What is the capital of USA?", 
          choices: 
              [" a. New York", 
              " b. Dallas", 
              " c. Atlanta", 
              " d. Washington, D.C. "], 
          answer: 2 },
    { question: "2. What is the capital of GA?", 
          choices: 
             [" a. ORL", 
              " b. SEA", 
              " c. DC", 
              " d. ATL"], 
          answer: 3 },
    { question: "3. What is a common household pet?", 
          choices: 
              [" a. dogs", 
              " b. dragons", 
              " c. horses", 
              " d. hippos"], 
          answer: 0 },
    { question: "4. What color are strawberries?", 
          choices: 
              [" a. red", 
              " b. blue", 
              " c. yellow", 
              "d. green"], 
          answer: 0 },
    { question: "5. What is 4x3?", 
          choices: 
              [" a. TEN ", 
              " b. SEVEN ", 
              " c. TWELVE ", 
              " d. SIXTEEN "], 
          answer: 0 },
  ];

  // var answerLetters = ["a","b","c","d"];
  // for (i +)

  var container = document.getElementById('container');


var submitBtn = document.getElementById('submit');


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

//Results 
var score = 0 
/*
var email = localStorage.getItem('email');
var performance = localStorage.getItem(score); */

function results() {
    window.alert("Good job! Your score is" + score + '/' + questions.length);
}


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

  function quizStart() {
      countdown();

      var questionContainer = document.createElement('div');
      questionContainer.textContent = questions[0].question;

      container.appendChild(questionContainer);

      var choicesContainer = document.createElement('choices-div');
      choicesContainer.textContent = questions[0].choices;

      container.appendChild(choicesContainer);


  }

  var clickCounter=0;
  var nextBtn = document.getElementById('next');

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

    // nextBtn.onclick = quizNext;

  

    /*
    var score = 0;
var userAnswer = "";
var questionBox = document.getElementById('questions');
var aSelection = document.getElementById('aButton');
var bSelection = document.getElementById('bButton');
var cSelection = document.getElementById('cButton');
var dSelection = document.getElementById('dButton');
​
var soundCorrect = "";
var soundWrong = "";
​
​
displayQuestion = function (){ //var startScreen hide, call timer, call getQuestion. no other logic in playGame- else goes into displYQuestion or compareAnswers
     //have start button that playGame(); and is hidden afterwards 
​
   var questionNumber = 0;
   if (questionNumber < questions.length){
       var currentQuestion = document.createElement('h3');
       currentQuestion.classList.add('mybuttons') 
       currentQuestion.textContent = questions[questionNumber].q;
       questionBox.appendChild(currentQuestion);
​
       for(i = 0; i < questions[i].a.length; i++){
           var answerChoices = document.createElement('button');
           answerChoices.classList.add('btn-success', 'btn', 'button')  //get button id's/value taskinator module edit and delete id's?
           answerChoices.setAttribute("id", (i + 1));  //asigns unique ID to each button 
           answerChoices.innerHTML = ((i+1) + ". " + questions[questionNumber].a[i]);
           currentQuestion.appendChild(answerChoices);
           console.log(questionNumber);
           console.log(i);
       }
   }
​*/