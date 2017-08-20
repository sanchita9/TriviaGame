// initialize the .js document with this. It contains all of the code for the .js file:
// $(function() {

// this game object holds all of the questions, possible answers, and then the index of the correct answer for each
    var game = {
        question : [
        {
        // var question = ["question1", "question2", "question3", "question4", "question5"];
        // var answer = [answer]
            id: "question1",
            answer: 2
        }, {
            id: "question2",
            answer: 0
        }, {
            id: "question3",
            answer: 1
        }, {
            id: "question4",
            answer: 1
        }, {
            id: "question5",
            answer: 3
        }  
        ]};
        

    // test
    var message = 'Game Over!';
    // var $message = $('#message');
    // test

// This initializes the button that starts the game 
    $("#startGame").click(function (){
// when the start button clicked, the div with the questions that was hidden is shown
        // $(".wrapper").show();
        // alert("hello");
        run();
        // $(this).hide();
    });
//     // These events start the timer: set the number of seconds the guesser has 
    var number = 30;
    // $("#timeLeft").on("click", run);
//     // the run function sets the spacing of the decrement function's time interval so that
//     // it can be equal to a second per number decrement.
    function run(){
        counter = setInterval(decrement, 1000);
    }
//     // This function enables the number of seconds to decrease with time, and to display
//     // the result of that decrease until time is up. 
   function decrement(){
        // Decrease number by one.
        number--;
         // Show the number in the #timeLeft div.
        $("#timeLeft").html("<h2>" + number + ' seconds' + "</h2>");
//         // When the number is equal to zero, 
        if (number === 0){
//         // run the stop function.
        stop();
//         // Alert the user that time is up. Update the innerHTML of the message
//        // div to say 'Game Over!'
//         // alert('Time Up!')
        $("#message").html("time up!");
        checkAnswers();
//         }
        }
    }
//     // test
//     // writes the win or lose message 
//         // function writeMessage (){
//         //  // updates the contents of the message div
//         //  $message.html(message);
//         // }
//     // test

    
    // The stop function
    function stop(){
    // Clears our "counter" interval. The interval name is passed to the clearInterval function.
        clearInterval(counter);
    }

    // Execute the run function.
    run();

// // this function dynamically creates the inputs needed for the form and relates them to the
// // items held within the game object 
//     function formTemplate(data) {
// // // the first variable relates the form field for question with the data in the object for
// // // each question so that the questions can be inputed into that form field
//     var qString = "<form id='questionOne'>" + "data.question" + <br>;
// // // this variable to access the question object's possibles array needed to answer each question
// //     var answer = data.answers;
// // // a for loop to go through the possibles array for each question to add the values of each possibles
// // // array and using qString, add them as radio buttons to the question to which they are
// // // associated
//     for (var i = 0; i < answer.length; i++) {
//         var answer = answers[i];
//         console.log(answers);
//         qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+answer;

//     }
// //     return qString + "</form>";
// }
// window.formTemplate = formTemplate;

// // this function takes the template created in the last function and by appending it,
// // allows it to be displayed on the page
// function buildQuestions(){
//     var questionHTML = ""
//     for (var i = 0; i<game.questions.length; i++) {
//         questionHTML = questionHTML + formTemplate(game.questions[i]);
//     }
    // $("#questions-container").append(questionHTML);

// }

//     function that 
//     function isCorrect(question){
//     var answers = $("[name="+question.id+"]");
//     var correct = answers.eq(question.answer);
//     var isChecked = correct.is(":checked");
//     return isChecked;
// }

// // call the buildQuestions function
// buildQuestions();

// // function to build the display of guesser results
// function resultsTemplate(question){
//     var htmlBlock = "<div>"
//     htmlBlock = htmlBlock + question.question + ': ' + isChecked;
//     return htmlBlock + "</div>";
// }

// // function to tabulate the guesser results
    function checkAnswers (){

// // variables needed to hold results
    // var resultsHTML = '';
//     var guessedAnswers = [];
    var correct = 0;
    var incorrect = 0;
    var unAnswered =0;
    var counter;

// // // for loop iterates through each question and passes the questions at each index first into
// // // the isCorrect function to see if they match the indices of correct answers, and if they do,
// // // increments up the correct score
    for (var i = 0; i<game.questions.length; i++) {
        if (isCorrect(game.questions[i])) {
            correct++;
        } else {
// // // then this statement runs the questions at each index through the checkAnswered function
// // // to determine whether the user clicked an answer, or did not click an answer, so that
// // // incorrect and unAnswered scores can be delineated from each other
    if (checkAnswered(game.questions[i])) {
        incorrect++;
    } else {
        unAnswered++;
    }
}
    $('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
}
    function checkAnswered(question){
    var anyAnswered = false;
    var answers = $('[name='+question.id+']');
// the for loop creates a condition to check if the buttons were checked and and then sets
// the anyAnswered variable to true if they were
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            anyAnswered = true;
        }
    }
    return anyAnswered;
}
    $('#doneButton').on('click', function() {
    checkAnswers();
    stop();
    $("#messageDiv").html("Game Over!");
    })
};