// ===================================================
// JharkhandVision123 Education
// Universal Dynamic Engine
// Version 1
// ===================================================

const params = new URLSearchParams(window.location.search);

const semester = params.get("semester");
const subject = params.get("subject");
const paper = params.get("paper");

const pageTitle = document.getElementById("pageTitle");
const subjectName = document.getElementById("subjectName");
const semesterName = document.getElementById("semesterName");
const paperMenu = document.getElementById("paperMenu");
const paperDashboard = document.getElementById("paperDashboard");
const paperTitle = document.getElementById("paperTitle");

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

init();

async function init() {

  if (!semester || !subject) {
    pageTitle.textContent = "Invalid Page";
    subjectName.textContent = "Invalid Subject";
    return;
  }

  pageTitle.textContent =
    `Semester ${semester} - ${subjectNames[subject] || subject}`;

  subjectName.textContent =
    subjectNames[subject] || subject;

  semesterName.textContent =
    `Semester ${semester}`;

  // Paper Selected
  if (paper) {
    openPaper(paper);
  }

  // Subject Selected
  else {
    loadPaperList();
  }

}

async function loadPaperList() {

  try {

    const response = await fetch(
      `data/semester${semester}/${subject}/papers.json`
    );

    if (!response.ok) {
      paperMenu.innerHTML =
      "<h3>No Papers Found</h3>";
      return;
    }

    const data = await response.json();

    createPaperButtons(data.papers);

  }

  catch (e) {

    console.log(e);

    paperMenu.innerHTML =
    "<h3>Loading Error</h3>";

  }

}

function createPaperButtons(papers) {

  paperMenu.innerHTML = "";

  papers.forEach(item => {

    paperMenu.innerHTML += `

    <a class="box"
    href="dashboard.html?semester=${semester}&subject=${subject}&paper=${item.id}">

    📘

    <h3>${item.name}</h3>

    </a>

    `;

  });

}

function openPaper(id){

  paperMenu.style.display="none";

  paperDashboard.style.display="block";

  paperTitle.textContent=id.toUpperCase();

}
