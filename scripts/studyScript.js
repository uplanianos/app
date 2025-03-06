
// INITIAL TRIVIA CHECKS!
// INITIAL TRIVIA CHECKS!
// INITIAL TRIVIA CHECKS!


// SAMPLE QUESTIONS 1 / CHECK FUNCTION!
function sampleQuestions1() {
if (confirm('¿Remplazar todas las preguntas con 15 ejemplos generales?')) {
 resetTrivia();
 sampleQs1();
 }
}



// RESET / CLEAR TRIVIA FUNCTION!
// RESET / CLEAR TRIVIA FUNCTION!
// RESET / CLEAR TRIVIA FUNCTION!

function resetTrivia() {
// SETTING UP & CLEARING QUESTIONS!
 const allQuestions = document.getElementsByClassName('studyQs');
 for(let eachQuestion of allQuestions) { eachQuestion.value = ""; }

// SETTING UP & CLEARING ANSWERS!
 const allAnswers = document.getElementsByClassName('answers');
 for(let eachAnswer of allAnswers) { eachAnswer.value = ""; }

// RESETTING ANSWER BUTTON!
 document.getElementById("answerButton").style.display = "none";
}


// START OF ACTUAL STUDY QUESTIONS!
// START OF ACTUAL STUDY QUESTIONS!
// START OF ACTUAL STUDY QUESTIONS!

// SAMPLE QUESTIONS 1!
function sampleQs1() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Preguntas generales listas.<br>Ya puedes estudiar!";

document.getElementById("q1").value = "¿Cuáles son los cinco tipos de sabores primarios?";
document.getElementById("a1").value = "Los sabores primarios son ácido, amargo, dulce, salado y umami";

document.getElementById("q2").value = "¿Cuál es el lugar más frío de la tierra?";
document.getElementById("a2").value = "La Antártida, que está cubierta de capas con un espesor de entre dos mil y tres mil metros";

document.getElementById("q3").value = "¿Dónde originaron los juegos olímpicos?";
document.getElementById("a3").value = "Se originaron en Grecia. Se llaman así porque se celebraban en la ciudad de Olimpia";

document.getElementById("q4").value = "¿Qué tipo de animal es la ballena?";
document.getElementById("a4").value = "La ballena es un mamífero marino de hasta 30 metros de longitud";

document.getElementById("q5").value = "¿Qué cantidad de huesos hay en el cuerpo humano?";
document.getElementById("a5").value = "Un adulto tiene 206, mientras que los recién nacidos tienen alrededor de 300 huesos";

document.getElementById("q6").value = "¿Cuándo acabó la II Guerra Mundial?";
document.getElementById("a6").value = "La II Guerra Mundial finalizó en 1945";

document.getElementById("q7").value = "¿Quién pintó “la última cena”?";
document.getElementById("a7").value = "El autor de esta magnífica pintura fue Leonardo da Vinci";

document.getElementById("q8").value = "¿Cuándo empezó la Primera Guerra Mundial?";
document.getElementById("a8").value = "El año de inicio de la Primera Guerra mundial es en 1914";

document.getElementById("q9").value = "¿Cómo se denomina el resultado de la multiplicación?";
document.getElementById("a9").value = "El resultado de la multiplicación se llama producto";

document.getElementById("q10").value = "¿Cuál es el océano más grande?";
document.getElementById("a10").value = "El Océano Pacífico, con una superficie total de 165.700.000 km²";

document.getElementById("q11").value = "¿Qué año llegó Cristóbal Colón a América?";
document.getElementById("a11").value = "La fecha en la Cristóbal Colón llegó a América es en 1492";

document.getElementById("q12").value = "¿En qué año comenzó la II Guerra Mundial?";
document.getElementById("a12").value = "Este famoso conflicto bélico se inició en 1939";

document.getElementById("q13").value = "¿Cuál es tercer planeta en el sistema solar?";
document.getElementById("a13").value = "El planeta que ocupa el tercer puesto en cuanto a la distancia del sol es la Tierra";

document.getElementById("q14").value = "¿En qué lugar del cuerpo se produce la insulina?";
document.getElementById("a14").value = "En el páncreas es donde se produce la insulina";

document.getElementById("q15").value = "¿Cómo se le llama a una colección de revistas, diarios y publicaciones periódicas?";
document.getElementById("a15").value = "El nombre de las publicaciones periódicas o diarias es la hemeroteca";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// TRIVIA START COUNTDOWN FUNCTION!
function startCountdown() {
let goButton = document.getElementById("goButton");
goButton.style.backgroundColor = "red";
goButton.innerHTML = "Estudiando en...!";
setTimeout(function() { goButton.innerHTML = "Estudiando en 3!" }, 1000);
setTimeout(function() { goButton.innerHTML = "Estudiando en 2!" }, 2000);
setTimeout(function() { goButton.innerHTML = "Estudiando en 1!" }, 3000);
setTimeout(function() { slideQuestDown(); showRandomizer() }, 4000);
setTimeout(function() { goButton.innerHTML = "Estudiar!"; goButton.style.backgroundColor = "" }, 4500);
enableAudio();
}

