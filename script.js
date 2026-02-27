
function surveyResponse(otherOp1, otherOp2,op) {
if (op==='low-feedback') {document.getElementById("body").outerHTML = ""}
if (op==='high-feedback') {
document.getElementById("thank-you").innerHTML = "<img id='thank-you-img'src='Thank You.jpeg' alt='Thank you' height='200' >"}
document.getElementById(otherOp1).outerHTML = "";
document.getElementById(otherOp2).outerHTML = "";
}
function markQuiz1() {
    let score = 0;
    let questions = document.getElementsByClassName("question")
    let answers = document.getElementsByClassName("answer")
    for(let i=0; i<answers.length; i++){ if (answers[i].value ==="correct") {score++};}
    document.getElementById("results").innerHTML = ( `Score: ${score} / ${questions.length}`)
}
function markQuiz() {
    let score = 0;
    let questions = document.getElementsByClassName("question");
    let radios = document.querySelectorAll(".radio:checked");
    let selects = document.querySelectorAll(".select");
    for(let i=0; i<radios.length; i++){if (radios[i].value ==="correct") {score++};};
    for(let i=0; i<selects.length; i++){if (selects[i].value ==="correct") {score++};}   
    document.getElementById("results").innerHTML = ( `Score: ${score} / ${questions.length}`)
}
