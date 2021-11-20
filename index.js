const date = new Date();

function renderCalendar() {
   date.setDate(1)
   const month = document.getElementById('month');
   const monthDays = document.getElementById('monthDay');
   const lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate()
   const prevDay = new Date(date.getUTCFullYear(), date.getMonth(), 0).getDate()
   const firstDayIndex = date.getDay() - 1;
   const lastDayIndex = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDay()
   const nextDay = 7 - lastDayIndex;
   const arrMonth = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
   ];
   let days = '';
   month.innerHTML = `${arrMonth[date.getMonth()]}&nbsp${date.getUTCFullYear()}`;

   for (let i = firstDayIndex; i > 0; i--) {
      days += `<div class="calendar__day calendar__day_opacity-date">${prevDay-i+1}</div>`
   }
   for (let i = 1; i <= lastDay; i++) {
      days += `<div class="calendar__day">${i}</div>`;
      monthDays.innerHTML = days;
   }

   for (let i = 1; i <= nextDay; i++) {
      days += `<div class="calendar__day calendar__day_opacity-date"">${i}</div>`;
      monthDays.innerHTML = days;
   }
};

document.getElementById('prev').addEventListener('click', () => {
   date.setMonth(date.getMonth() - 1);
   renderCalendar()
})

document.getElementById('next').addEventListener('click', () => {
   date.setMonth(date.getMonth() + 1);
   renderCalendar()
})

renderCalendar();