var _a, _b;
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}
function generateSquares(count) {
    const container = document.getElementById("squaresWrapper");
    for (let i = 0; i < count; i++) {
        const square = document.createElement("div");
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
        square.className = "square";
        square.addEventListener("click", () => {
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
}
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const countInput = document.getElementById("squareCount");
    const count = parseInt(countInput.value);
    if (count >= 100 && count <= 500) {
        generateSquares(count);
    }
    else {
        alert("Please enter a number between 100 and 500");
    }
});
(_b = document.getElementById("clearBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const container = document.getElementById("squaresWrapper");
    container.innerHTML = "";
});
