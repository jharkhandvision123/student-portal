 





let questions = [
    {
        question: "Political Science is the study of?",
        options: [
            "History",
            "Geography",
            "Politics and Government",
            "Economics"
        ],
        answer: "Politics and Government"
    },

    {
        question: "Who is known as the Father of Political Science?",
        options: [
            "Plato",
            "Aristotle",
            "Socrates",
            "Karl Marx"
        ],
        answer: "Aristotle"
    },

    {
        question: "The Indian Constitution came into effect on?",
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


function loadQuestion(){

    document.getElementById("question").innerHTML =
    questions[currentQuestion].question;


    let options = "";

    questions[currentQuestion].options.forEach(function(option){

        options += `
        <input type="radio" name="answer" value="${option}">
        ${option}<br><br>
        `;

    });


    document.getElementById("options").innerHTML = options;

    document.getElementById("result").innerHTML="";

    document.getElementById("nextBtn").style.display="none";

}



function checkAnswer(){

    let selected =
    document.querySelector('input[name="answer"]:checked');


    if(!selected){
        alert("Please select an answer");
        return;
    }


    if(selected.value == questions[currentQuestion].answer){

        document.getElementById("result").innerHTML =
        "✅ Correct Answer";

    }
    else{

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer";

    }


    document.getElementById("nextBtn").style.display="inline";

}



function nextQuestion(){

    currentQuestion++;


    if(currentQuestion < questions.length){

        loadQuestion();

    }
    else{

        document.getElementById("question").innerHTML =
        "Quiz Completed 🎉";

        document.getElementById("options").innerHTML="";

        document.getElementById("nextBtn").style.display="none";

    }

}


loadQuestion();
