const t={body:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")},e=()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let o=null;t.body.addEventListener("click",(r=>{r.target!==t.startButton&&r.target!==t.stopButton||(r.target===t.startButton&&(t.startButton.setAttribute("disabled",!0),t.stopButton.removeAttribute("disabled"),o=setInterval((()=>{e()}),1e3)),r.target===t.stopButton&&(t.stopButton.setAttribute("disabled",!0),t.startButton.removeAttribute("disabled"),clearInterval(o)))}));
//# sourceMappingURL=01-color-switcher.14400fd5.js.map