// set global var:
var questionOne = {
    question: "Normal adult dogs have how many teeth?",
    answers: ["24", "38", "42", "32"],
    rightAnswer: "42",
    image: "../images/teeth.png", 
    }

var questionTwo = {
    question: "What was the most popular dog name of 2011, according to VPI Pet Insurance?",
    answers: ["Lucy", "Bailey", "Bella", "Max"],
    rightAnswer: "Bella",
    image: "../images/bella.jpeg",
    }


var questionThree = {
    question: "What is the most common training command taught to dogs?",
    answers: ["Stay", "Beg", "Sit", "Dance"],
    rightAnswer: "Sit",
    image: "../images/sit.jpg", // get an image
    }


var questionFive = {
    question: "What is the name of the dog on the front of the Cracker Jack box?",
    answers: ["Jack", "Max", "Bingo", "Fido"],
    rightAnswer: "Bingo",
    image: "../images/cracker_jack.JPG", // get an image
}

// it's working
// console.log(questionFive.answers[0]);


var countStartGame = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

// user click on start to startGame
function startGame(){
    console.log("game starting");
}
// timer beggins 30 seconds countdown
setTimeout(startGame, 1000); //change this after tests for 30 seconds 

// question is displayed 
// 4 answers are displayed
//     TODO: answer is highlighted when mouse is on (css - psedo class)
// When an answer is clicked, countdown stops, it shows if it was right ou wrong for 5 seconds (interval?)
//     if wrong, right answer is shown
//     wrongAnswers ++;
//     if right, counter stops, it shows "CORRECT"
//     correctAnswers ++;
// If timer reaches 0, correct answer is shown for 5 seconds, unanswered ++, and next question loads



// OBSERVATIONS:

// every time you click on the answer you have to clear the clearInterval, update the display and set a timer to display the answer