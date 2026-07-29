/* CSS File */).
function checkAnswer() {

    let options = document.getElementsByName("q1");

    if (options[2].checked) {

        alert("✅ Correct Answer");

    } else {

        alert("❌ Wrong Answer");

    }

}
