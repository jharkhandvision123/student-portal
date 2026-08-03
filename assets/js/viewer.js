// =========================================
// Universal Viewer Engine - Version 2
// =========================================

const params = new URLSearchParams(window.location.search);

const semester = params.get("semester");
const subject = params.get("subject");
const paper = params.get("paper");
const type = params.get("type");

const viewerTitle = document.getElementById("viewerTitle");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

viewerTitle.innerHTML = "Universal Viewer";

contentTitle.innerHTML =
`${subject} | ${paper} | ${type}`;

loadContent();

async function loadContent(){

    try{

        const response = await fetch(
        `data/semester${semester}/${subject}/${paper}.json`
        );

        const data = await response.json();

        showContent(data);

    }

    catch(error){

        contentArea.innerHTML =
        "<h3>Content Not Found</h3>";

    }

}

function showContent(data){

    if(!type){

        contentArea.innerHTML =
        "<h3>No Content Selected</h3>";

        return;

    }

    if(data[type]){

        contentArea.innerHTML = data[type];

    }

    else{

        contentArea.innerHTML =
        "<h3>Coming Soon...</h3>";

    }

}
