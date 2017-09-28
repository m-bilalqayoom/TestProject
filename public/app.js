function populate() {
    if (quiz.isEnded()) {
        showScroes();
    }
    else {
            // show question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
            //show choices
            var choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i< choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
   showProgress();
 }
};


function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
    quiz.guess(guess);
    populate();

}
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber +"of" + quiz.questions.length; 
};
function showScroes(){
var gameOverHTML = "<h1>Result</h1>";
gameOverHTML += "<h2 id='score'> your score:"+ quiz.score +" </h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHTML;
};

var questions = [
new Question("____ is inline element?",["p","div","span","all"],"span"),
new Question ("Which one is not an object oriented programming language?", ["C","C#","Java","C++"],"C"),
new Question("Which language is used for styling the web pages?", ["html","css","php","javascript"],"css"),
new Question("There are ____ main components of OOP?", ["1","2","3","4"],"4"),
new Question("Which language is used for Web App?",["php","phyton","javascript","all"],"all"),
new Question("javascript is ____ ?",["language","framwork","library","all"], "language"),
new Question("____ is block level element?",["p","div","h1","all"],"all"),
new Question("Which is most soutable place for script file?",["In head tag","inside in any div","before closing tag of body","all"],"before closing tag of body"),
new Question("'li' stands for",["list","list inline","line in","all"],"list inline"),
new Question("css stands for",["cascade style sheet","cast standard sheet","catching style sheet","all"],"cascade style sheet")
    
    ];  
    var quiz = new Quiz(questions);
    populate();