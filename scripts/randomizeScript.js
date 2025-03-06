
// AUDIO SCRIPTS
// AUDIO SCRIPTS
// AUDIO SCRIPTS

// GLOBAL AUDIO VARIABLE!
var audioToggle;


// ENABLE / DISABLE AUDIO FUNCTIONS!
function enableAudio() {
document.getElementById("audioOn").style.display = "none";
document.getElementById("audioOff").style.display = "block";
audioToggle = "On";
}

function disableAudio() {
document.getElementById("audioOn").style.display = "block";
document.getElementById("audioOff").style.display = "none";
audioToggle = "Off";
}



// RANDOMIZE FUNCTION
// RANDOMIZE FUNCTION
// RANDOMIZE FUNCTION

// GLOBAL ANSWER VARIABLE
var theAnswer;


function goRandomize() {
var answerButton = document.getElementById("answerButton"); // setting answer button
if (answerButton != null) {answerButton.style.display = "block" }; // check if answer button exists!

var questAmount = document.getElementById('questAmount').value;
var randomQs = document.getElementById("randomQs");

// INITIAL FULL ARRAY OF NUMBERS (OF THE QUESTIONS)!
const thisArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// CREATING UPDATED ARRAY WITHOUT THE RANDOM NUMBER!
// THIS FINDS THE INDEX OF THE RANDOM NUMBER TO BE TEMPORARILY REMOVED!
const updatedArray = (arr, item)  => {
 let newArray = [...arr]
 const index = newArray.findIndex((element) => element === item)
 if (index !== -1) {
  newArray.splice(index, 1)
  return newArray
  }
 }


// RANDOMIZING VARIABLE FROM UPDATED ARRAY USING THE CORRECT AMOUNT OF QUESTIONS!
let random = Math.floor( Math.random(updatedArray(thisArray,toRemove)) * (questAmount) + 1 );
var toRemove = parseInt(random);
var theQuestion = "q" + random; // SETTING THE QUESTION VARIABLE!



// UPDATING HTML ELEMENTS!
randomQs.innerHTML = "🎲"; // Initial dice update!

// RANDOMIZING!
setTimeout(function() {
 randomQs.innerHTML = "<b>Pregunta N°" + random +":</b> " + document.getElementById(theQuestion).value }, 500);
 theAnswer = "a" + random;



// AUDIO PLAY CHECK FUNCTION
// PLAY DICE SHUFFLE AUDIO!
if (audioToggle === "On") { document.getElementById("shuffle").play(); }
}


// ANSWER FUNCTION
// ANSWER FUNCTION
// ANSWER FUNCTION

function getAnswer() {
var thisAnswer = theAnswer;
var randomQs = document.getElementById("randomQs");
document.getElementById("randomQs").innerHTML = "📖";

// SHOW ANSWER!
setTimeout(function() {
 document.getElementById("randomQs").innerHTML = "<b>Respuesta:</b> " + document.getElementById(thisAnswer).value + "!" },
 400)



// AUDIO PLAY CHECK FUNCTION
// PLAY ANSWER EFFECT AUDIO!
if (audioToggle === "On") { document.getElementById("answer").play(); }
}
