// ==========================================
// JharkhandVision123 Education
// Universal Viewer Engine
// FINAL VERSION
// ==========================================


// Get URL Parameters

const params = new URLSearchParams(window.location.search);

const semester = params.get("semester");
const subject = params.get("subject");
const paper = params.get("paper");
const type = params.get("type");


// HTML Elements

const viewerTitle = document.getElementById("viewerTitle");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");



// Header Title

if(viewerTitle){

    viewerTitle.textContent = "Universal Viewer";

}


if(contentTitle){

    contentTitle.textContent =
    `Semester ${semester} | ${subject} | ${paper}`;

}




// Check URL Data

function checkParameters(){

    if(!semester || !subject || !paper){

        contentArea.innerHTML = `

        <h3>
        Invalid Viewer Link
        </h3>

        <p>
        Required information missing.
        </p>

        `;

        return false;

    }


    return true;

}




// Loading Screen

function showLoading(){

    contentArea.innerHTML = `

    <div class="loading-box">

    <h3>
    Loading Content...
    </h3>

    <p>
    Please wait
    </p>

    </div>

    `;

}




// Display Content

function showContent(data){


    contentArea.innerHTML = "";



    // PDF Viewer

    if(type === "pdf"){


        contentArea.innerHTML = `

        <iframe

        src="${data.file}"

        width="100%"

        height="600px"

        style="border:none;">

        </iframe>

        `;


        return;

    }




    // Notes / Ebook / PYQ


    if(
        type === "notes" ||
        type === "ebook" ||
        type === "pyq"
    ){


        let html = "";



        if(data.title){

            html += `
            <h2>
            ${data.title}
            </h2>
            `;

        }



        if(data.description){

            html += `
            <p>
            ${data.description}
            </p>
            `;

        }



        if(data.content){

            html += `

            <div class="viewer-text">

            ${data.content}

            </div>

            `;

        }



        contentArea.innerHTML = html;


        return;


    }




    // Quiz


    if(type === "quiz"){


        contentArea.innerHTML = `


        <div class="quiz-box">


        <h2>
        Online Quiz
        </h2>


        <p>
        Test your knowledge
        </p>


        <a href="${data.link}" class="btn">

        Start Quiz

        </a>


        </div>


        `;


        return;


    }





    // Default


    contentArea.innerHTML = `

    <h3>
    Content Loaded Successfully
    </h3>

    `;


}




// Back Button


function addBackButton(){


    const backBtn = document.createElement("button");


    backBtn.innerHTML = "← Back";


    backBtn.className = "back-btn";



    backBtn.onclick = function(){


        window.history.back();


    };



    contentArea.prepend(backBtn);


}





// Error Message


function showError(message){


    contentArea.innerHTML = `


    <div class="error-box">


    <h3>
    Something went wrong
    </h3>


    <p>
    ${message}
    </p>


    </div>


    `;


}





// Main Loading Function


async function loadContent(){



    if(!checkParameters()){

        return;

    }




    showLoading();



    try{


        const response = await fetch(

        `data/semester${semester}/${subject}/${paper}.json`

        );



        if(!response.ok){


            throw new Error(

            "Content file not found"

            );


        }




        const data = await response.json();



        showContent(data);



        addBackButton();



    }



    catch(error){



        showError(error.message);



        console.error(error);



    }


}




// Start Viewer

loadContent();
