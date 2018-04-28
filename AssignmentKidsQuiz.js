var numberOfCurrentQuestion = 1;
var points=0;

var changeQuestion = (directionIndicator) => {
    var idOfCurrentQuestion = "question" + numberOfCurrentQuestion;
    var currentQuestion = document.getElementById(idOfCurrentQuestion);
    var numberOfNextQuestion = numberOfCurrentQuestion + directionIndicator;
    var idOfNextQuestion = "question" + numberOfNextQuestion;
    var nextQuestion = document.getElementById(idOfNextQuestion);
    currentQuestion.className = "question";
    nextQuestion.className = "question show";
    numberOfCurrentQuestion = numberOfNextQuestion;
}

var quitQuiz = () => {
    var idOfCurrentQuestion = "question" + numberOfCurrentQuestion;
    var currentQuestion = document.getElementById(idOfCurrentQuestion);
    currentQuestion.className = "question";
    var goodBye = document.getElementById("question10");
    goodBye.className = "question show";
    numberOfCurrentQuestion=11;
}
var timeInterpreter = () =>{
    var bedtimeString = document.getElementById("myTime").value;
    var bedtimeHour = parseInt(bedtimeString.charAt(0)+bedtimeString.charAt(1));
    console.log("bedtimeHour: " + bedtimeHour + "and bedtimeString:" + bedtimeString);
    if (bedtimeString!=""){
        if (bedtimeHour > 1 && bedtimeHour < 6){
            points += 7;
        }
    } else {
        changeQuestion(-1);
        document.getElementById("errorMessage1").style.display = "block";
        console.log("question returned");
    }
    
    
    console.log("Point status is: " + points);
}
var radioInterpreter = () => {
    var wolflevel1 = document.getElementById("wolflevel1").checked;
    var wolflevel2 = document.getElementById("wolflevel2").checked;
    var wolflevel3 = document.getElementById("wolflevel3").checked;
    var wolflevel4 = document.getElementById("wolflevel4").checked;
    var answerPoints = 0;
    if (wolflevel1 == true){
        answerPoints += 1;
    }
    if (wolflevel2 == true){
        answerPoints += 2;
    }
    if (wolflevel3 == true){
        answerPoints += 3;
    }
    if (wolflevel4 == true){
        answerPoints += 9;
    }
    points += answerPoints;
    console.log("Point status is: " + points);
}
var checkboxInterpreter = () => {
    var friday1 = document.getElementById("friday1").checked;
    var friday2 = document.getElementById("friday2").checked;
    var friday3 = document.getElementById("friday3").checked;
    var friday4 = document.getElementById("friday4").checked;
    var answerPoints = 0;
    if (friday1 == true){
        answerPoints += 12;
    }
    if (friday2 == true){
        answerPoints += 1;
    }
    if (friday3 == true){
        answerPoints += 4;
    }
    if (friday4 == true){
        answerPoints += 3;
    }
    points += answerPoints;
    console.log("Point status is: " + points);
}
var textInterpreter = () => {
    var userInput = document.getElementById("myText").value;
    if (userInput == 0 || userInput == 1 || userInput == 2 || userInput == 3){
        var answerPoints = parseInt(userInput)*3;
        points += answerPoints;
        console.log("Point status after text is: " + points);
    } else {
        changeQuestion(-1);
        document.getElementById("errorMessage").style.display = "block";
        console.log("question returned");
    }
}
var rangeInterpreter = () => {
    var answerPoints = parseInt(document.getElementById("myRange").value)/12.5;
    points += answerPoints;
    console.log("Point status after range is: " + points);
}
var pointCounter = (answerPoints) => {
    points +=answerPoints;
    console.log("Point status is: " + points);
}
var emitResult = () =>{
    document.getElementById("result").innerHTML = parseInt(points/7);
    console.log(points/7);
}
var resetPoints = () => {
    points=0;
    console.log("points resetted and now: " + points)
}