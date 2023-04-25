const refs={
    startButton:document.querySelector('[data-start]'),
    stopButton:document.querySelector('[data-stop]'),
    body:document.querySelector('body')
}
 
let intervalId=null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  
const onColor=()=>{
 intervalId=setInterval(()=>{
    refs.body.style.background=getRandomHexColor();
    },1000);
refs.startButton.setAttribute('disabled', 'disabled');
refs.stopButton.removeAttribute('disabled');
};

const offColor=()=>{
    refs.startButton.removeAttribute('disabled');
    refs.stopButton.setAttribute('disabled', 'disabled');
    clearInterval(intervalId);
};

refs.startButton.addEventListener('click', onColor);
refs.stopButton.addEventListener('click', offColor);
