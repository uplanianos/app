
// CHECK BEFORE DELETING!
function doDelete() {
  if (confirm('¿Desea borrar todas las preguntas?')) { clearQuestions() }
}


// DELETING QUESTIONS!
function clearQuestions() {


// CLEAR STUDY QUESTIONS!
const studyQs = document.getElementsByClassName('studyQs');
if (studyQs != null) {
 for(let eachQuestion of studyQs) { eachQuestion.value = "" }
};

// CLEAR STUDY ANSWERS!
const allAnswers = document.getElementsByClassName('answers');
if (allAnswers != null) {
 for(let eachAnswer of allAnswers) { eachAnswer.value = ""; }
};

// RESET AMOUNT OF QUESTIONS BY DEFAULT!
var questAmount = document.getElementById('questAmount');
questAmount.value = 6;

// DISABLE AUDIO
disableAudio();

// RELOAD PAGE
window.location.reload();

}



// ENTER FULL SCREEN
function activate(ele) { if (ele.requestFullscreen) {
  ele.requestFullscreen();
  document.getElementById('fullscreen').style.display = 'none';
  document.getElementById('minimize').style.display = 'inline';
  }
}


// EXIT FULL SCREEN
function deactivate() { if (document.exitFullscreen) {
 document.exitFullscreen();
 document.getElementById('fullscreen').style.display = 'none';
 document.getElementById('fullscreen').style.display = 'inline';
 document.getElementById('minimize').style.display = 'none';
 }
}


const d = new Date();
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString(); d.toDateString();
  const formattedString = dateString.replace(", ", " - ⏰ ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
