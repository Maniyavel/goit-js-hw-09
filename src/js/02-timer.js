import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input=document.querySelector('#datetime-picker');
const button=document.querySelector('[data-start]');
const dataDays=document.querySelector('[data-days]');
const dataHours=document.querySelector('[data-hours]');
const dataMinutes=document.querySelector('[data-minutes]');
const dataSeconds=document.querySelector('[data-seconds]');
let intervalId = null;

const onStart=()=>{
  intervalId=setInterval(()=>{
    const currentDate=new Date(input.value);
    const time=currentDate - Date.now();
    const convertTime = convertMs(time);
    updateClockFace(convertTime);
    
    if (time <= 1000) {
      clearInterval(intervalId);
    }
  }, 1000);

  button.setAttribute('disabled', 'disabled');
};
 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      if(selectedDates[0] < Date.now()){
        alert('Please choose a date in the future"');
      };
    },

    onChange(selectedDates){
      if(selectedDates[0]>Date.now()){
       button.removeAttribute('disabled');
      }else{
        button.setAttribute('disabled', 'disabled');
      }
    }
  };

  flatpickr(input, options);

  button.addEventListener('click', onStart);

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }
  
  function updateClockFace({ days, hours, minutes, seconds }) {
    dataDays.textContent = pad(days);
    dataHours.textContent = pad(hours);
    dataMinutes.textContent = pad(minutes);
    dataSeconds.textContent = pad(seconds);
  }