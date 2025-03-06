

function slideQuestDown() {
const questButton = document.getElementById("questButton");
const questDiv = document.getElementById("questions");
const clearButton = document.getElementById("clearButton");

for (var i = 10; i < 1000; i++) {
  (function(i) {
    setTimeout(function() {
      questDiv.style.top = i + "px";
    }, 100);
  })(i);
 }
setTimeout(function() {
 questDiv.style.display = 'none';
 questButton.style.display = 'block';
 clearButton.style.display = 'none';
 }, 850)
}

function showRandomizer() {
const randomDiv = document.getElementById("randomizer");
 setTimeout(function() { randomDiv.style.display = "block"}, 100);
 setTimeout(function() { randomDiv.style.width = '85%' }, 400);
 setTimeout(function() { randomDiv.style.visibility = "visible"}, 800);
}



function slideQuestUp() {
const questButton = document.getElementById("questButton");
const clearButton = document.getElementById("clearButton");
const questDiv = document.getElementById("questions");
 setTimeout(function() { questDiv.style.display = 'block';}, 200);
 setTimeout(function() { questDiv.style.top = '60px'; questButton.style.display = 'none'; clearButton.style.display = 'block';}, 300);
 setTimeout(function() { window.scrollTo(0, document.body.scrollHeight) }, 2000);
}

function hideRandomizer() {
const randomDiv = document.getElementById("randomizer");
 setTimeout(function() { randomDiv.style.width = '25%' }, 100);
 setTimeout(function() { randomDiv.style.visibility = "hidden"}, 800);
 setTimeout(function() { randomDiv.style.display = "none"}, 1200);

// HIDDING ANSWER BUTTON!
var answerButton = document.getElementById("answerButton");
if (answerButton != null) {answerButton.style.display = "none"}

}
