const form=document.querySelector('.form');
form.addEventListener('submit', onsubmit );

function onsubmit(evt){
  evt.preventDefault();
  let amount=form.amount.value;
  let delay=form.delay.value;
  delay=Number(delay);
  let step=form.step.value;
  step=Number(step);
 

  for(i=1; i<=amount; i++){
createPromise(i, delay)
.then(value=>console.loc(value))
.catch(err=>console.log(err));
delay += step;
  }
}



function createPromise(position, delay) {
  return new Promise((res, rej)=>{
    const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
    res(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
     rej(`❌ Rejected promise ${position} in ${delay}ms`);
  }}, delay);
  });
}




