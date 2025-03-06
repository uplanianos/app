
// LOAD QUESTIONS SCRIPT
// LOAD QUESTIONS SCRIPT
// LOAD QUESTIONS SCRIPT

function loadQuestions() {
var questAmount = document.getElementById('questAmount').value;
var i = questAmount;
var theQs = parseInt(i) - parseInt(6);
var start = parseInt(6);
var end = parseInt(15);

// DISPLAY HIDDEN QUESTIONS (BY AMOUNT PREVIOUSLY SET)!
if (i >= 7 && i <= end) {
 for (let step = 6; step < end; step++) {
  start++;
  var thisQuest = "list" + start;
  document.getElementById(thisQuest).style.display = "block";
  end = i;
  }
 }

// DISPLAYING & HIDDING BUTTONS!
// DISPLAYING & HIDDING BUTTONS!
// DISPLAYING & HIDDING BUTTONS!

if (i <= 6) {document.getElementById("deleteQuestButton").style.display = "none"}
if (i >= 7 && i < 15 ) {document.getElementById("deleteQuestButton").style.display = "block"}
if (i == 15) {document.getElementById("addQuestButton").style.display = "none";}
}


// SHOW MORE QUESTIONS SCRIPT!
// SHOW MORE QUESTIONS SCRIPT!
// SHOW MORE QUESTIONS SCRIPT!

function showMoreQs() {
var questAmount = document.getElementById('questAmount').value;

var i = questAmount;
++i; // UPDATING AMOUNT OF LISTS!

// CHECKING IF VALUE IS BETWEEN 7 AND 15!
if (i >= 7 && i <= 15 ) {
 document.getElementById('questAmount').value = i;
 var thisQuest = "list" + i;
 document.getElementById(thisQuest).style.display = "block";
 document.getElementById("deleteQuestButton").style.display = "block";
 }
if (i == 15 ) {document.getElementById("addQuestButton").style.display = "none";}
}


// SHOW LESS QUESTIONS SCRIPT!
// SHOW LESS QUESTIONS SCRIPT!
// SHOW LESS QUESTIONS SCRIPT!

function showLessQs() {
var questAmount = document.getElementById('questAmount').value;

var i = questAmount;

// CHECKING IF VALUE IS BETWEEN 7 AND 15!
if (i >= 7 && i <= 15) {
 var thisQuest = "list" + i;
 document.getElementById(thisQuest).style.display = "none";
 document.getElementById("addQuestButton").style.display = "block";
 // UPDATING AMOUNT OF LISTS!
 i = i - 1; // UPDATING AMOUNT OF LISTS
 document.getElementById('questAmount').value = i;
 }
if (i == 6 ) {document.getElementById("deleteQuestButton").style.display = "none"}
if (i == 15 ) {document.getElementById("addQuestButton").style.display = "none"}
}
