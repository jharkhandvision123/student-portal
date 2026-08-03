// ==========================================
// JharkhandVision123 Education
// Dashboard Controller FINAL
// ==========================================


const urlParams = new URLSearchParams(window.location.search);


const semester = urlParams.get("semester");
const subject = urlParams.get("subject");
const paper = urlParams.get("paper");



const subjectName = document.getElementById("subjectName");
const semesterName = document.getElementById("semesterName");
const paperTitle = document.getElementById("paperTitle");
const paperDashboard = document.getElementById("paperDashboard");




// Display Information


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




// Viewer URL


function openViewer(type){


    return (

    "viewer.html?" +

    "semester=" + encodeURIComponent(semester) +

    "&subject=" + encodeURIComponent(subject) +

    "&paper=" + encodeURIComponent(paper) +

    "&type=" + encodeURIComponent(type)

    );


}






// Buttons


const buttons = {


chaptersBtn: "chapters",

notesBtn: "notes",

ebookBtn: "ebook",

pyqBtn: "pyq",

importantBtn: "important",

quizBtn: "quiz",

videoBtn: "video",

updateBtn: "update"


};







for(let id in buttons){


    const btn = document.getElementById(id);



    if(btn){


        btn.setAttribute(
        "href",
        openViewer(buttons[id])
        );


    }


}






if(paperDashboard){

    paperDashboard.style.display="block";

}
