const refs={
    startButton:document.querySelector('[data-start]'),
    stopButton:document.querySelector('data-stop'),
    body:document.querySelector('body'),
}
 
let intervalId=null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  refs.startButton.addEventListener('click', onColor);
  refs.stopButton.addEventListener('click', ofColor);

const onColor=()=>{
const intervalId=setInterval(()=>{
    body.style.background=getRandomHexColor();
    },1000);
startButton.setAttribute('disabled', 'disabled');
stopButton.removeAttribute('disabled');
}

const ofColor=()=>{
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'disabled');
    clearInterval(intervalId);
};