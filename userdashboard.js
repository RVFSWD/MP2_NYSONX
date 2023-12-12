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

// prog2 ###################

let circularProgress2 = document.querySelector(".circular2-progress"),
    progressValue2 = document.querySelector(".progress2-value");

let progressStartValue2 = 0,
    progressEndValue2 = 50,
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
