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

    //Populate html with content (questions and answers)
    //Questions:

    for (var i=0; i < questions.length; i++){
        var divQuestion = $('.question');
        console.log(questions[i]);        
        divQuestion.attr("data-question", questions[i]);
        divQuestion.html(questions[i]);       
        // questions[i].appendTo(divQuestion); - DO I NEED TO APPEND IT? THE DIVS ON HTML ALREADY EXIST.
    }


    //Answers:
    for (var i=0; i < answers.length; i++){
        var divAnswer = $('.answers');
        console.log(answers[i]);        
        divAnswer.attr("data-question", answers[i]);
        divAnswer.html(answers[i]);       
        // answers[i].appendTo(divAnswer); //- DO I NEED TO APPEND IT? THE DIVS ON HTML ALREADY EXIST.
    }
    //all the answers to the last question are showing in a single button
    // I can't get the iteration to be place respectively on the 4 buttons on each div




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
            check();
            console.log("time's up");
            $("#timeRemaining").html("Time's Up!");
            $(".content").hide();
            $(".results").show();
        }
}

    // =========================================================

    //CHECK IF ANSWERS ARE RIGHT:

    function check() {
        var userClick = $('.answers').on('click', function (){
            if (userClick === rightAnswer){
                correctAnswers ++;
            } else if (userClick !== rightAnswer){
                wrongAnswers ++;
            } else {
                unanswered ++;
            }            
        })
        console.log(correctAnswers);
        console.log(wrongAnswers);
        console.log(unanswered);

    };

    //user clicks on only one answer
    //other buttons are disabled


    //countdown stops or user finishs the questions
    //after countdows is stopped, it is shown the screen with results:
    //Correct Answers:
    //Wrong Answers:
    //Unanswered







})


//CHECK THE FRIDGE ACTIVITY
