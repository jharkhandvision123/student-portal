let questions = [

{
    question: "Political Science is the study of?",
    options: [
        "History",
        "Government and Politics",
        "Geography",
        "Economics"
    ],
    answer: "Government and Politics"
},

{
    question: "Who is known as the Father of Political Science?",
    options: [
        "Plato",
        "Aristotle",
        "Karl Marx",
        "Socrates"
    ],
    answer: "Aristotle"
},

{
    question: "Indian Constitution came into effect on?",
    options: [
        "15 August 1947",
        "26 January 1950",
        "26 November 1949",
        "2 October 1950"
    ],
    answer: "26 January 1950"
}

];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestion(){

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML =
    "Question " + (currentQuestion+1) + " of " + questions.length + "<br><br>" + q.question;

    let html = "";

    q.options.forEach(function(option){

        html += `
        <label>
            <input type="radio" name="answer" value="${option}">
            ${option}
        </label>
        <br><br>
        `;

    });

    document.getElementById("options").innerHTML = html;

    document.getElementById("nextBtn").style.display="none";

}

function checkAnswer(){

    let selected =
    document.querySelector('input[name="answer"]:checked');

    if(!selected){

        alert("Please select an answer.");

        return;

    }

    userAnswers[currentQuestion]=selected.value;

    if(selected.value===questions[currentQuestion].answer){

        score++;

    }

    document.getElementById("nextBtn").style.display="inline-block";

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }

    else{

        localStorage.setItem("quizScore",score);

        localStorage.setItem("quizQuestions",
        JSON.stringify(questions));

        localStorage.setItem("quizAnswers",
        JSON.stringify(userAnswers));

        window.location.href="results.html";

    }

}

loadQuestion();
