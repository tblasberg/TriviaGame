# TriviaGame

set global var:
questions (make an object)
correctAnswers = 0;
wrongAnswers = 0;
unanswered = 0;

user click on start to startGame
timer beggins 30 seconds countdown
question is displayed 
4 answers are displayed
    TODO: answer is highlighted when mouse is on (css - psedo class)
When an answer is clicked, countdown stops, it shows if it was right ou wrong for 5 seconds (interval?)
    if wrong, right answer is shown
    wrongAnswers ++;
    if right, counter stops, it shows "CORRECT"
    correctAnswers ++;
If timer reaches 0, correct answer is shown for 5 seconds, unanswered ++, and next question loads
