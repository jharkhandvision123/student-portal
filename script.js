console.log("JharkhandVision123 Education Website Loaded");
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



function loadQuestion(){


let q = questions[currentQuestion];


document.getElementById("question").innerHTML =
(q.question);



let optionHTML = "";


q.options.forEach(function(option){


optionHTML += `

<label>

<input type="radio" name="answer" value="${option}">

${option}

</label>

<br><br>

`;


});


document.getElementById("options").innerHTML = optionHTML;


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

score++;


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


localStorage.setItem("quizScore", score);


window.location.href="result.html";


}


}



loadQuestion();
