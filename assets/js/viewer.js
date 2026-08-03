// ==========================================
// JharkhandVision123 Education
// Universal Viewer Engine
// FINAL UPDATED VERSION
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




// Header

if(viewerTitle){

    viewerTitle.textContent = "Universal Viewer";

}


if(contentTitle){

    contentTitle.textContent =
    `Semester ${semester} | ${subject} | ${paper}`;

}





// Check Parameters

function checkParameters(){


    if(!semester || !subject || !paper || !type){


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







// Show Content

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





    // Normal Content System


    if(
        type === "notes" ||
        type === "ebook" ||
        type === "pyq" ||
        type === "important" ||
        type === "chapters" ||
        type === "video" ||
        type === "update"
    ){


        const section = data[type];



        if(!section){


            contentArea.innerHTML = `

            <h3>
            Content Not Available
            </h3>

            `;


            return;


        }




        let html = "";



        if(section.title){


            html += `

            <h2>
            ${section.title}
            </h2>

            `;


        }




        if(section.content){


            html += `


            <div class="viewer-text">

            ${section.content}

            </div>


            `;


        }




        contentArea.innerHTML = html;


        return;


    }






    // Quiz System


    if(type === "quiz"){



        const quizData = data.quiz;



        contentArea.innerHTML = `



        <div class="quiz-box">



        <h2>

        ${quizData.title || "Online Quiz"}

        </h2>



        <p>

        Test your knowledge

        </p>




        <a href="${quizData.link}"

        class="btn">


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








// Main Function


async function loadContent(){



    if(!checkParameters()){


        return;


    }




    showLoading();

try {

    const response = await fetch("../../syllabus.json");

    if (!response.ok) {
        throw new Error("Syllabus JSON not found");
    }

    const syllabus = await response.json();

    const sem = syllabus.semesters.find(s => s.semester == semester);

    if (!sem) {
        throw new Error("Semester not found");
    }

    const paperData = sem.papers.find(p => p.code === paper);

    if (!paperData) {
        throw new Error("Paper not found");
    }

    showContent({
        chapters: {
            title: paperData.code,
            content: paperData.title
        }
    });

    addBackButton();

}
catch(error){

    showError(error.message);

    console.error(error);

}



    }




    catch(error){



        showError(error.message);



        console.error(error);



    }


}







// Start Viewer

loadContent();
