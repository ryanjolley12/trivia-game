var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');


//Timer
function countdown() {
  var timeLeft = 2;

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

var nextBtn = document.getElementById('next');
var backBtn = document.getElementById('back');
var submitBtn = document.getElementById('submit');
var questions = [
    { q: 'What is the best food', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];




function quiz() {
//score at the end 
alert('You got ' + score + '/' + questions.length);
}


startBtn.onclick = countdown;
startBtn.onclick = quiz;



