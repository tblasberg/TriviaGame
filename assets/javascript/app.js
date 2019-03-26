$(document).ready(function () {

    // set global var:
    var questions = [
        "Normal adult dogs have how many teeth?",
        "What was the most popular dog name of 2011, according to VPI Pet Insurance?",
        "What is the most common training command taught to dogs?",
        "What is the name of the dog on the front of the Cracker Jack box?"
    ]


    var answers = [
        ["24", "38", "42", "32"],
        ["Lucy", "Bailey", "Bella", "Max"],
        ["Stay", "Beg", "Sit", "Dance"],
        ["Jack", "Max", "Bingo", "Fido"]
    ]


    var rightAnswer = [
        "42",
        "Bella",
        "Sit",
        "Bingo"
    ]

    var timer;
    var countStartGame = 30;
    var timerRunning = false;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    // user click on start to startGame
    function startGame() {
        console.log("startGame");
        countStartGame = 5;
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        countDown();
        $('#timeRemaining').html(countStartGame + " seconds");

    }


    // User clicks on start button to start countdown
    $("#start").on('click', startGame);

    // IT WORKS - implement on content div
    // $('#start').on('click', () => {
    //     $('.content').hide();
    //   });

    // =========================================================
    // CountDown function - to run the time for the quizz
    function countDown() {
        timer = setInterval(updateCounter, 1000);
        console.log("countdown");      
    
}

function updateCounter() {
    countStartGame--;
    $('#timeRemaining').html(countStartGame + " seconds");
    console.log("updatecounter");
        console.log(countStartGame);
        if (countStartGame > 0) {
            console.log("Time's running! " + countStartGame);
            $(".content").show();
            $(".results").hide();
        
        }
        else if (countStartGame < 1) {
            clearInterval(timer);
            console.log("time's up");
            $(".content").hide();
            $(".results").show();
        }
}

    // =========================================================


    // Should I have my content on html or js file using jquery?

    //create variables for every button answer

    var q1a1 = $('.q1a1');
    var q1a2 = $('.q1a2');
    var q1a3 = $('.q1a3');
    var q1a4 = $('.q1a4');

    var q2a1 = $('.q2a1');
    var q2a2 = $('.q2a2');
    var q2a3 = $('.q2a3');
    var q2a4 = $('.q2a4');

    var q3a1 = $('.q3a1');
    var q3a2 = $('.q3a2');
    var q3a3 = $('.q3a3');
    var q3a4 = $('.q3a4');











    function check() {



    }

    //user clicks on only one answer
    //other buttons are disabled


    //countdown stops or user finishs the questions
    //after countdows is stopped, it is shown the screen with results:
    //Correct Answers:
    //Wrong Answers:
    //Unanswered







})


//CHECK THE FRIDGE ACTIVITY
