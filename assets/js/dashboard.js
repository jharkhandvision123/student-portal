// ==========================================
// JharkhandVision123 Education
// Dashboard Controller (JSON Version)
// ==========================================

const params = new URLSearchParams(window.location.search);

const semester = params.get("semester");
const subject = params.get("subject");

const subjectName = document.getElementById("subjectName");
const semesterName = document.getElementById("semesterName");
const paperList = document.getElementById("paperList");

if (subjectName) {
    subjectName.textContent = (subject || "Subject")
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());
}

if (semesterName) {
    semesterName.textContent = "Semester " + semester;
}

async function loadPapers() {

    const response = await fetch("../../syllabus.json");
    const data = await response.json();

    const sem = data.semesters.find(s => s.semester == semester);

    if (!sem) {
        paperList.innerHTML = "<h3>Semester Not Found</h3>";
        return;
    }

    paperList.innerHTML = "";

    sem.papers.forEach(paper => {

        paperList.innerHTML += `
            <a class="box"
               href="viewer.html?semester=${semester}&subject=${subject}&paper=${paper.code}&type=chapters">
                <h3>${paper.code}</h3>
                <p>${paper.title}</p>
            </a>
        `;

    });

}

loadPapers();
