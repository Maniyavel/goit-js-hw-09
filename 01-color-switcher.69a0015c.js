!function(){var t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.startButton.addEventListener("click",(function(){e=setInterval((function(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),startButton.setAttribute("disabled","disabled"),stopButton.removeAttribute("disabled")})),t.stopButton.addEventListener("click",(function(){startButton.removeAttribute("disabled"),stopButton.setAttribute("disabled","disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.69a0015c.js.map