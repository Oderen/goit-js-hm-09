// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const refs = {
    input: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
}

refs.btn.setAttribute('disabled', true);

refs.input.addEventListener('change', (e) => {
    console.log('Вікно закрилося');
    
    if (refs.btn.hasAttribute('disabled')) {
        refs.btn.setAttribute('disabled', false);
    }
});

flatpickr("#datetime-picker");