// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  renderQuestion();

  // Display the quiz view
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);

}

function renderQuestion(questionIndex) {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex];
  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  
  if (answer === questions[runningQuestionIndex].correct) {
    score++;
  }
  
  if (runningQuestionIndex < questions.length - 1 ) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    renderScore();
  }
}

function renderScore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  hide(dom_quiz);
  show(dom_score);

  // calculate score percent
  const scorePercent = Math.round((100 * score) / questions.length);
  
  // display emoji based on scorePercent
  let comment = "";
  if (scorePercent <= 20) {
    comment = "HUMM !";
    image = "../../img/20.png";
  } else if (scorePercent <= 40) {
    comment = "YOU CAN IMPROVE !";
    image = "../../img/40.png";
  } else if (scorePercent <= 60) {
    comment = "NOT BAD !";
    image = "../../img/60.png";
  } else if (scorePercent <= 80) {
    comment = "GOOD !";
    image = "../../img/80.png";
  } else {
    comment = "AMAZING !";
    image = "../../img/100.png";
  }

  dom_score.innerHTML = `
    <img src="${image}" style="display:block; margin:auto;" />
    <h2 style="text-align:center;" >${comment}</h2>
    <p style="text-align:center;">Your score is ${scorePercent}%</p>
  `;
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
