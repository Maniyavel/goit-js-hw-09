const form=document.querySelector('.form');
form.addEventListener('submit', onSubmit );

function createPromise(position, delay) {  
  return new Promise((resolve, reject)=>{
  const shouldResolve = Math.random() > 0.3;
setTimeout(()=>{
  if (shouldResolve) {
  resolve({position, delay});
} reject({position, delay});
}, delay);
});}


function onSubmit(evt){
  evt.preventDefault();
  const{delay, step, amount}=evt.currentTarget.elements;
 

  for(let i=0, position=1; i<=amount.value; i+=1, position+=1){
const delaySum=Number(delay.value)+step.value*i;

createPromise(position, delaySum)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

}

 







