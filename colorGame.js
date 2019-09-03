var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.getElementsByTagName("h1")[0];
var messageDisplay = document.getElementById("message");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.getElementById("reset");
var squares = document.querySelectorAll(".square");
var colors = [];
var numSquares = 6;
var pickedColor;

init();

function init() {
    setUpSquares();
    setUpModeButtons();
    setUpResetButton();
    reset();
}

function changeColors() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
}

function colorPicked() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpResetButton() {
    resetButton.addEventListener("click", function() {
        reset();
    });
}

function setUpSquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors();
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(num) {
    colors = generateRandomColors(numSquares);
    pickedColor = colorPicked();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}
