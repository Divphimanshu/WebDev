const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who invented the C language?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    answer: "Dennis Ritchie"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${option}" />
      ${option}
    `;
    optionsBox.appendChild(label);
  });
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
