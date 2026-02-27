
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
function markQuiz2() {
    let totalscore = 0;
    let questions = document.getElementsByClassName("question");
    for(let i=0; i<questions.length; i++){
    let score = 0;
    let radios = document.querySelector(`.answer${i+1}:checked`);
    let selects = document.querySelector(`.answer${i+1} .select`);
    if (radios === null )    
    {if (selects[0].value ==="correct") {score++};}
    else {if (radios[0].value ==="correct") {score++};}
    document.getElementById(`results${i+1}`).innerHTML = ( `${score} / 1`);
    totalscore = totalscore + score}
    document.getElementById("results").innerHTML = ( `Score: ${totalscore} / ${questions.length}`)
    // let radios = document.querySelectorAll(".radio:checked");
    // let selects = document.querySelectorAll(".select");
    // for(let i=0; i<radios.length; i++){if (radios[i].value ==="correct") {score++};};
    // for(let i=0; i<selects.length; i++){if (selects[i].value ==="correct") {score++};}   
    // document.getElementById("results").innerHTML = ( `Score: ${totalscore} / ${questions.length}`)
}
function markQuiz3() {
    let totalscore = 0;
    let questions = document.getElementsByClassName("question");
    for(let i=0; i<questions.length; i++){
    let score = 0;
    let answers = document.querySelectorAll(`.answer${i+1}, .radio:checked`);
    if (answers === null )    
    {answers = document.querySelectorAll(`.answer${i+1}`)}
    if(answers[0].value === "correct"){score++; totalscore++};
    document.getElementById(`results${i+1}`).innerHTML = ( `${score} / 1`);}
    document.getElementById("results").innerHTML = (` Score: ${totalscore} / ${questions.length}`)}
   
    // else {if (radios[0].value ==="correct") {score++};}
    // document.getElementById(`results${i+1}`).innerHTML = ( `${score} / 1`);

    totalscore = totalscore + score
// }
    document.getElementById("results").innerHTML = ( `Score: ${totalscore} / ${questions.length}`)
    // let radios = document.querySelectorAll(".radio:checked");
    // let selects = document.querySelectorAll(".select");
    // for(let i=0; i<radios.length; i++){if (radios[i].value ==="correct") {score++};};
    // for(let i=0; i<selects.length; i++){if (selects[i].value ==="correct") {score++};}   
    // document.getElementById("results").innerHTML = ( `Score: ${totalscore} / ${questions.length}`)
// }

function markQuiz4() {
    let totalscore = 0;
    let questions = document.getElementsByClassName("question");
    for(let i=0; i<questions.length; i++){
    let score = 0;
    let answers = document.querySelector(`.answer${i+1}, .radio:checked `);
    document.getElementById("results").innerHTML = (` Score: ${answers} / ${answers[0]}`)}}
