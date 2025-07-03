const button = document.getElementById("flipper-btn");
const colorCode = document.getElementById("color-code");

function getRandomColor() {
  // Generate a random hex color code
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
