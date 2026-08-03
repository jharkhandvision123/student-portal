// ===================================================
// JharkhandVision123 Education
// Universal Dynamic Engine
// Version 2
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

  pageTitle.textContent = `Semester ${semester} - ${subjectNames[subject] || subject}`;
  subjectName.textContent = subjectNames[subject] || subject;
  semesterName.textContent = `Semester ${semester}`;

  if (paper) {
    await loadPaper(paper);
  } else {
    await loadPaperList();
  }

}

// ----------------------
// Load Papers
// ----------------------

async function loadPaperList() {

  try {

    const response = await fetch(
      `data/semester${semester}/${subject}/papers.json`
    );

    const data = await response.json();

    createPaperButtons(data.papers);

  } catch (e) {

    paperMenu.innerHTML = "<h3>Paper List Not Found</h3>";

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

// ----------------------
// Load Single Paper
// ----------------------

async function loadPaper(id) {

  try {

    const response = await fetch(
      `data/semester${semester}/${subject}/${id}.json`
    );

    const data = await response.json();

    showDashboard(data);

  } catch (e) {

    paperMenu.style.display = "none";
    paperDashboard.style.display = "block";

    paperTitle.innerHTML = "Paper Not Ready";

  }

}

// ----------------------
// Dashboard
// ----------------------

function showDashboard(data) {

  paperMenu.style.display = "none";
  paperDashboard.style.display = "block";

  paperTitle.innerHTML = data.title || paper.toUpperCase();

  setLink("chaptersBtn", data.chapters);
  setLink("notesBtn", data.notes);
  setLink("ebookBtn", data.ebook);
  setLink("pyqBtn", data.pyq);
  setLink("importantBtn", data.important);
  setLink("quizBtn", data.quiz);
  setLink("videoBtn", data.video);
  setLink("updateBtn", data.updates);

}

// ----------------------
// Link
// ----------------------

function setLink(id, url) {

  const btn = document.getElementById(id);

  if (!btn) return;

  btn.href = url || "#";

}
