// ===============================
// JharkhandVision123 Education
// Universal Dynamic Dashboard
// Part 1
// ===============================

// URL Parameters
const params = new URLSearchParams(window.location.search);

const semester = params.get("semester");
const subject = params.get("subject");
const paper = params.get("paper");

// HTML Elements
const pageTitle = document.getElementById("pageTitle");
const subjectName = document.getElementById("subjectName");
const semesterName = document.getElementById("semesterName");
const paperMenu = document.getElementById("paperMenu");
const paperDashboard = document.getElementById("paperDashboard");
const paperTitle = document.getElementById("paperTitle");

// Subject Display Names
const subjectNames = {

  "political-science": "Political Science",

  "history": "History",

  "geography": "Geography",

  "economics": "Economics",

  "hindi": "Hindi",

  "english": "English",

  "psychology": "Psychology",

  "home-science": "Home Science"

};

// Default Page
if (semester && subject) {

    pageTitle.innerText =
        "Semester " + semester + " - " + subjectNames[subject];

    subjectName.innerText =
        subjectNames[subject];

    semesterName.innerText =
        "Semester " + semester;

}
// ===============================
// Part 2 : JSON Loader
// ===============================

let paperData = {};

async function loadData() {

    if (!semester || !subject) return;

    const file =
        `data/semester${semester}/${subject}/papers.json`;

    try {

        const response = await fetch(file);

        if (!response.ok) {

            paperMenu.innerHTML =
            "<h3>Data Not Found</h3>";

            return;
        }

        paperData = await response.json();

        createPaperButtons();

    }

    catch (error) {

        console.log(error);

        paperMenu.innerHTML =
        "<h3>Error Loading Data</h3>";

    }

}

loadData();
// ===============================
// Part 3 : Create Paper Buttons
// ===============================

function createPaperButtons() {

    paperMenu.innerHTML = "";

    paperData.papers.forEach(item => {

        paperMenu.innerHTML += `
            <a class="box"
               href="dashboard.html?semester=${semester}&subject=${subject}&paper=${item.id}">
               📘
               <h3>${item.name}</h3>
            </a>
        `;

    });

}
