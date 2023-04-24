const form=document.querySelector('.form');
form.addEventListener('submit', onSubmit );

function createPromise(position, delay) {  
  return new Promise((res, rej)=>{
  const shouldResolve = Math.random() > 0.3;
setTimeout(()=>{
  if (shouldResolve) {
  res({position, delay});
} else {
   rej({position, delay});
}}, delay);
});}


function onSubmit(evt){
  evt.preventDefault();
  const{delay, step, amount}=evt.currentTarget.elements;
 

  for(let i=0, position=1; i<=amount.value; i+=1, position+=1){
const delayAll=Number(delay.value)+step.value*i;

createPromise(position, delayAll)
  .then(({ position, delay }) => {
    return(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    return (`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

}

 







