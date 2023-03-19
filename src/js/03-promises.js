import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  regularDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

let countNumber = 0;

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstDelay = Number(refs.firstDelay.value);
  const amount = Number(refs.amount.value);
  const regularDelay = Number(refs.regularDelay.value);
  
  const intervalID = setInterval(() => {
    
    countNumber += 1;
    console.log('Номер ітерації: ', countNumber);
    const position = countNumber;
    
    createPromise(position, firstDelay, regularDelay)
      .then(OnSucess)
      .catch(OnFailure);

    if (countNumber === amount) {
      Notiflix.Notify.info('Цикл завершився');
      countNumber = 0;
      clearInterval(intervalID);
    }
  }, regularDelay);
}
);

function createPromise(position, firstDelay, delay) {
  console.log('position: ', `${position}`);
  console.log('delay: ', `${delay}`);
  console.log('First Delay: ', `${firstDelay}`);
  
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => { 
    if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, firstDelay);
  });
};

function OnSucess(result) {
   Notiflix.Notify.success(`${result}`);
};

function OnFailure(error) {
  Notiflix.Notify.failure(`${error}`)
};


//             Notify

// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');







