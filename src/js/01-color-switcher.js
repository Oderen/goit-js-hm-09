
const refs = {
    body: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
}

const changeColor = () => {
    refs.body.style.backgroundColor = getRandomHexColor();
};

let intervalColorChange = null; 

refs.body.addEventListener('click', (e) => {
    
    if (e.target !== refs.startButton && e.target !== refs.stopButton) {
        return;
    }

    if (e.target === refs.startButton) {
        refs.startButton.setAttribute('disabled', true);
        refs.stopButton.removeAttribute('disabled');

        intervalColorChange = setInterval(() => {
            changeColor();
        }, 1000);
    };

    if (e.target === refs.stopButton) {
        refs.stopButton.setAttribute('disabled', true);
        refs.startButton.removeAttribute('disabled');

        clearInterval(intervalColorChange);
    }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 


