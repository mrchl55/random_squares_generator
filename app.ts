function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

function generateSquares(count: number): void {
  const container = document.getElementById("squaresWrapper") as HTMLDivElement;

  for (let i = 0; i < count; i++) {
    const square = document.createElement("div");
    square.className = "square";

    const size = getRandomValue(30, 100);
    const color = getRandomColor();
    const posX = getRandomValue(0, 800 - size);
    const posY = getRandomValue(0, 600 - size);

    Object.assign(square.style, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      left: `${posX}px`,
      top: `${posY}px`,
    });

    square.addEventListener("click", () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

const container = document.getElementById("squaresWrapper") as HTMLDivElement;
const countInput = document.getElementById("squareCount") as HTMLInputElement;

document.getElementById("generateBtn")?.addEventListener("click", () => {
  const count = parseInt(countInput.value);

  if (count >= 100 && count <= 500) {
    generateSquares(count);
  } else {
    alert("Please enter a number between 100 and 500");
  }
});

document.getElementById("clearBtn")?.addEventListener("click", () => {
  container.innerHTML = "";
});
