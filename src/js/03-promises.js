import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  regularDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(refs.firstDelay.value);
  for (let i = 1; i <= refs.amount.value; i += 1) {
    createPromise(i, delay)
    .then(({position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay = delay + Number(refs.regularDelay.value);
  }
};

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
};



