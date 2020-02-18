var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var secondsLeft = 5;
var timeEl = document.createElement("h1");
document.body.appendChild(timeEl);

function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  var poemArray = poem.split(" ");
  var arrLen = poemArray.length;
  var i = 0;
  var poemInterval = setInterval(function(){
    arrLen--;
    timeEl.textContent = poemArray[i];
    i++;

    if(arrLen === 0){
      clearInterval(poemInterval);
    }
  }, 1000);
}

prepareRead();