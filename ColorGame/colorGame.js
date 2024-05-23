// alert("hello!!");
var numOfSquares = 6;
// var colors = generateRandomColor(numOfSquares);
// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easybtn");
// var hardBtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setModeButtons();
    
    setSquares();
    

    reset();
}

function setModeButtons(){
    for (var i=0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "easy" ? numOfSquares=3 : numOfSquares=6;
            
    
            reset();
            //figure out how many squares show 
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}

function setSquares(){
    for (var i=0; i < squares.length; i++){
    
        //Add click listeners
        squares[i].addEventListener("click", function() {
           //grab a color of a clicked square
           var clickedColor = this.style.backgroundColor;
           //compare color to picked color 
           if(clickedColor===pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
    
           }else{
            // alert("Wrong!!!")
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Try Again!";
           }
        });
    }
}
function reset(){
    //generate all new colors
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    //Removes the message "Correct"
    messageDisplay.textContent = "";
    //return the button to "new colors"
    resetButton.textContent = "New Colors";
    //Change colors of squares
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numOfSquares=3;
//     colors = generateRandomColor(numOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numOfSquares = 6;
//     colors = generateRandomColor(numOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
        
//             squares[i].style.display = "block";
//         }
//     }
// })

resetButton.addEventListener("click", function() {
    reset();
    // //generate all new colors
    // colors = generateRandomColor(numOfSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change colors of squares
    // colorDisplay.textContent = pickedColor;
    // //Removes the message "Correct"
    // messageDisplay.textContent = "";
    // //return the button to "new colors"
    // this.textContent = "New Colors"
    // //Change colors of squares
    // for(var i=0; i< squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
})

// colorDisplay.textContent = pickedColor;



function changeColors(color) {
    //loop through all squares
    for (var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i=0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor());

    }
    //return that array
    return arr;
}

function randomColor() {
    //make a "red" from 0-255
    var r = Math.floor(Math.random()*256);
    //make a "green" from 0-255
    var g = Math.floor(Math.random()*256);
    //make a "blue" from 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}