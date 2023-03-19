import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  regularDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

let countNumber = 0;
let totalMiliSeconds = 0;
let firstIteration = true;

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstDelay = Number(refs.firstDelay.value);
  const amount = Number(refs.amount.value);
  const regularDelay = Number(refs.regularDelay.value);

  const intervalID = setInterval(() => {
    
    countNumber += 1;
    console.log('Номер ітерації: ', countNumber);
    const position = countNumber;

    if (countNumber === 1) {
      totalMiliSeconds = firstDelay;
      console.log('totalMiliSeconds: ', totalMiliSeconds);
    } else {
      totalMiliSeconds += (firstDelay + regularDelay);
      console.log('totalMiliSeconds: ', totalMiliSeconds);
    }
    
    createPromise(position, firstDelay, totalMiliSeconds)
      .then(OnSucess)
      .catch(OnFailure);

    if (countNumber === amount) {
      Notiflix.Notify.info('Цикл завершився');
      countNumber = 0;
      totalMiliSeconds = 0;
      clearInterval(intervalID);
    }
  }, regularDelay);
  
}
);

function createPromise(position, firstDelay, totalMiliSeconds) {
  console.log('position: ', `${position}`);
  console.log('totalMiliSeconds: ', `${totalMiliSeconds}`);
  console.log('First Delay: ', `${firstDelay}`);
  
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => { 
    if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${totalMiliSeconds}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${totalMiliSeconds}ms`);
      }
    }, firstDelay);
  });
};

function OnSucess(result) {
   return Notiflix.Notify.success(`${result}`);
};

function OnFailure(error) {
  return Notiflix.Notify.failure(`${error}`);
};


