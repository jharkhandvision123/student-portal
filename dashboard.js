// ==========================================
// JharkhandVision123 Education
// Dashboard Controller
// ==========================================


const urlParams = new URLSearchParams(window.location.search);


const semester = urlParams.get("semester");
const subject = urlParams.get("subject");
const paper = urlParams.get("paper");



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



// Viewer Link Generator

function openViewer(type){


    const link =

    `viewer.html?semester=${semester}&subject=${subject}&paper=${paper}&type=${type}`;


    return link;

}




// Button Connections


const buttons = {


    chaptersBtn : "pdf",

    notesBtn : "notes",

    ebookBtn : "ebook",

    pyqBtn : "pyq",

    importantBtn : "important",

    quizBtn : "quiz",

    videoBtn : "video",

    updateBtn : "update"


};




for(let id in buttons){


    const btn = document.getElementById(id);


    if(btn){


        btn.href = openViewer(buttons[id]);


    }


}




// Show Dashboard

if(paperDashboard){

    paperDashboard.style.display="block";

}
