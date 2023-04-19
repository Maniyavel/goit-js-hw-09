const refs={
    startButton:document.querySelector('[data-start]'),
    stopButton:document.querySelector('[data-stop]'),
    body:document.querySelector('body')
}
 
let interval=null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  
const onColor=()=>{
 interval=setInterval(()=>{
    refs.body.style.background=getRandomHexColor();
    },1000);
startButton.setAttribute('disabled', 'disabled');
stopButton.removeAttribute('disabled');
};

const offColor=()=>{
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'disabled');
    clearInterval(interval);
};

refs.startButton.addEventListener('click', onColor);
refs.stopButton.addEventListener('click', offColor);
