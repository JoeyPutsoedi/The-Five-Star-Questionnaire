const plyn = localStorage.getItem('user-name');
let scores = Number(localStorage.getItem('user-score'));
let hintCounter = Number(localStorage.getItem('user-hints'));
document.querySelector('#player-name').textContent = plyn;
const rOption = document.querySelector('.option1');
const wOption = document.querySelector('.option2');
const hints = document.querySelector('.hint');
const answer = document.querySelector('.answer');
const qIcon = document.querySelector('.fa-question');
const qClue = document.querySelector('.cluet');
const next = document.querySelector('.fa-right-long');


//CHECKS ANSWER
//Right answer selection-----------
rOption.onclick = () => {
    rOption.style.backgroundColor = 'green';
    next.style.color = "green"
    scores = scores + 1;
    wOption.style.pointerEvents = "none";
}
//wrong answer selction----------------------
wOption.onclick = () => {
    wOption.style.backgroundColor = 'red';
    next.style.color = "red";
    rOption.style.pointerEvents = "none";   
}
//hint appear---------------------------------
answer.onclick = () => {
    hints.style.opacity = "1";
    hints.style.transition = "1.7s ease";
    scores = scores - 1;
    hintCounter = hintCounter + 1;
}
//tool tip appear-----------------------------------
qIcon.addEventListener("mouseover", event => {
    qClue.style.opacity = "1";
})
qIcon.addEventListener("mouseout", event => {
    qClue.style.opacity = "0";
})

//sent values to next page-------------------
next.addEventListener('click', event => {
    event.preventDefault();

    const nameValue = plyn;
    let score = scores;
    let counter = hintCounter;
    localStorage.setItem('user-name', nameValue);
    localStorage.setItem('user-score', score);
    localStorage.setItem('user-hints', counter);
    window.location.href = "question9.html";

})
