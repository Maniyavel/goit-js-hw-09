function e(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:i}=t.currentTarget.elements;for(let t=0,s=1;t<=i.value;t+=1,s+=1){const i=Number(n.value)+o.value*t;e(s,i).then((({position:e,delay:t})=>`✅ Fulfilled promise ${e} in ${t}ms`)).catch((({position:e,delay:t})=>`❌ Rejected promise ${e} in ${t}ms`))}}));
//# sourceMappingURL=03-promises.6ca5a92d.js.map
