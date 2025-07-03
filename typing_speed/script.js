const sampleText = document.getElementById("sample-text").textContent;
const inputText = document.getElementById("input-text");
const startBtn = document.getElementById("start-btn");
const results = document.getElementById("results");
const timeDisplay = document.getElementById("time");
const speedDisplay = document.getElementById("speed");
const accuracyDisplay = document.getElementById("accuracy");

let startTime, endTime;

function calculateSpeed() {
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000; // in seconds
  const wordsTyped = inputText.value.trim().split(/\s+/).length;
  const speed = Math.round((wordsTyped / timeTaken) * 60);

  // Calculate accuracy
  let correctChars = 0;
  for (let i = 0; i < inputText.value.length; i++) {
    if (inputText.value[i] === sampleText[i]) {
      correctChars++;
    }
  }
  const accuracy = Math.round((correctChars / sampleText.length) * 100);

  timeDisplay.textContent = timeTaken.toFixed(2);
  speedDisplay.textContent = speed;
  accuracyDisplay.textContent = accuracy;

  results.classList.remove("hidden");
}

startBtn.addEventListener("click", () => {
  inputText.value = "";
  inputText.disabled = false;
  inputText.focus();
  results.classList.add("hidden");
  startTime = new Date();
});

// When user finishes typing and presses Enter
inputText.addEventListener("input", () => {
  if (inputText.value.length === sampleText.length) {
    inputText.disabled = true;
    calculateSpeed();
  }
});
