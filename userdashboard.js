let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 80,
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;
    console.log(progressStartValue);

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#198754  ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }

}, speed);    

// prog-2 ###################

let circularProgress2 = document.querySelector(".circular2-progress"),
    progressValue2 = document.querySelector(".progress2-value");

let progressStartValue2 = 0,
    progressEndValue2 = 52,
    speed2 = 100;

let progress2 = setInterval(() => {
    progressStartValue2++;
    console.log(progressStartValue2);

    progressValue2.textContent = `${progressStartValue2}%`;
    circularProgress2.style.background = `conic-gradient(#08aeaa ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue2 === progressEndValue2) {
        clearInterval(progress2);
    }

}, speed2);


// prog-3 ###################

let circularProgress3 = document.querySelector(".circular3-progress"),
    progressValue3 = document.querySelector(".progress3-value");

let progressStartValue3 = 0,
    progressEndValue3 = 75,
    speed3 = 80;

let progress3 = setInterval(() => {
    progressStartValue3++;
    console.log(progressStartValue3);

    progressValue3.textContent = `${progressStartValue3}%`;
    circularProgress3.style.background = `conic-gradient(#8f08ae ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue3 === progressEndValue3) {
        clearInterval(progress3);
    }

}, speed3);

// prog-4 ###################

let circularProgress4 = document.querySelector(".circular4-progress"),
    progressValue4 = document.querySelector(".progress4-value");

let progressStartValue4 = 0,
    progressEndValue4 = 68,
    speed4 = 120;

let progress4 = setInterval(() => {
    progressStartValue4++;
    console.log(progressStartValue4);

    progressValue4.textContent = `${progressStartValue4}%`;
    circularProgress4.style.background = `conic-gradient(#a9f339 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue4 === progressEndValue4) {
        clearInterval(progress4);
    }

}, speed4);










