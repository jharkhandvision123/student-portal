// ==========================================
// JharkhandVision123 Education
// Dashboard Controller FINAL FIX
// ==========================================


// Get URL Parameters

const urlParams = new URLSearchParams(window.location.search);

const semester = urlParams.get("semester");
const subject = urlParams.get("subject");
const paper = urlParams.get("paper");



// HTML Elements

const subjectName = document.getElementById("subjectName");
const semesterName = document.getElementById("semesterName");
const paperTitle = document.getElementById("paperTitle");
const paperDashboard = document.getElementById("paperDashboard");




// Show Details

if(subjectName){

    subjectName.textContent = subject || "Subject";

}


if(semesterName){

    semesterName.textContent =
    "Semester " + (semester || "");

}


if(paperTitle){

    paperTitle.textContent =
    paper || "Paper Dashboard";

}






// Viewer URL Function

function openViewer(type){


    return (

    "viewer.html?" +

    "semester=" + encodeURIComponent(semester) +

    "&subject=" + encodeURIComponent(subject) +

    "&paper=" + encodeURIComponent(paper) +

    "&type=" + encodeURIComponent(type)

    );


}






// Button Setup

const buttons = {


    chaptersBtn : "chapters",

    notesBtn : "notes",

    ebookBtn : "ebook",

    pyqBtn : "pyq",

    importantBtn : "important",

    quizBtn : "quiz",

    videoBtn : "video",

    updateBtn : "update"


};






Object.keys(buttons).forEach(function(id){


    const button = document.getElementById(id);



    if(button){


        button.onclick = function(e){


            e.preventDefault();


            window.location.href =
            openViewer(buttons[id]);


        };


    }


});







// Show Dashboard

if(paperDashboard){

    paperDashboard.style.display = "block";

}
