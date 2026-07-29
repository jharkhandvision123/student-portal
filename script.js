/* CSS File */).
function function checkAnswer() {

    let options = document.getElementsByName("q1");
    let result = document.getElementById("result");

    if (options[2].checked) {
        result.innerHTML = "✅ Correct Answer";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong Answer";
        result.style.color = "red";
    }

} {

    let options = document.getElementsByName("q1");

    if (options[2].checked) {

        alert("✅ Correct Answer");

    } else {

        alert("❌ Wrong Answer");

    }

}
