
// Flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Notiflix
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btn.setAttribute('disabled', true);


const options = {
  enableTime: true,
  time_24hr: true,
  enableSeconds: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = new Date();
        const isDateInFuture = selectedDates[0] - currentTime;

      if (Math.sign(isDateInFuture) === -1) {
        Notiflix.Notify.failure('Please choose a date in the future');
        }

      if (Math.sign(isDateInFuture) === 1) {
        refs.btn.removeAttribute('disabled');

        let isActive = false;
            
        refs.btn.addEventListener('click', () => {
            
          if (isActive) {
                return;
              }
            
            const intervalID = setInterval(() => {
                
              isActive = true;

              const passedTime = new Date();
              const deltaTime = selectedDates[0] - passedTime;
              
              const timer = convertMs(deltaTime);
  
              console.log(`${timer.days}:${timer.hours}:${timer.minutes}:${timer.seconds}`);   
              updateTimer(timer);

              if (deltaTime < 1000) {
                clearInterval(intervalID);
                resetTimer();
              }
            }, 1000);
          })
        }
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

const addLeadingZero = (value) => {
  return String(value).padStart(2, '0');
};

function updateTimer(timer) {
  refs.days.textContent = timer.days;
  refs.hours.textContent = timer.hours;
  refs.minutes.textContent = timer.minutes;
  refs.seconds.textContent = timer.seconds;
};

function resetTimer() {
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
};

