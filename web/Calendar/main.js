import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isToday,
  addMonths,
  subMonths,
  isBefore,
} from "https://esm.sh/date-fns";

const getContainer = document.querySelector("#container");

const calendarDays = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return days;
};

let currentMonth = new Date();

const calendarDates = () => {
  const date = currentMonth;
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  let day = calendarStart;
  let days = [];

  while (day <= calendarEnd) {
    days.push({
      date: day,
      isInactive: !isSameMonth(day, date),
      isToday: isToday(day),
    });
    day = addDays(day, 1);
  }
  return days;
};

calendarDates();

const generateCalendar = () => {
  const calendar = document.createElement("div");
  calendar.classList.add("calendar");
  getContainer.append(calendar);

  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("calendar-header");
  calendar.append(calendarHeader);

  const prev = document.createElement("img");
  prev.classList.add("prev-btn");
  prev.src = "./icons/prev-month.png"
  calendarHeader.append(prev);
  
  const today = new Date();
  if (!isBefore(startOfMonth(today), startOfMonth(currentMonth))) {
    prev.style.opacity = "0.5";
    prev.style.pointerEvents = "none";
    prev.classList.add("disabled")
  } else {
    prev.style.opacity = "1";
    prev.style.pointerEvents = "";
    prev.addEventListener("click", () => {
      getContainer.innerHTML = "";
      currentMonth = subMonths(currentMonth, 1);
      generateCalendar()
    })
  }

  const current = document.createElement("div");
  current.classList.add("current-month");
  current.textContent = format(currentMonth, "MMMM yyyy");
  calendarHeader.append(current);
  
  const next = document.createElement("img");
  next.classList.add("next-btn");
  next.src = "./icons/next-month.png"
  calendarHeader.append(next);

  next.addEventListener("click", () => {
    getContainer.innerHTML = "";
    currentMonth = addMonths(currentMonth, 1);
    generateCalendar()
  })
  

  const daysContainer = document.createElement("div");
  daysContainer.classList.add("days-container");
  calendar.append(daysContainer);

  const days = calendarDays();

  days.forEach((day) => {
    const eachDay = document.createElement("div");
    eachDay.classList.add("each-day");
    eachDay.textContent = day;
    daysContainer.append(eachDay);
  });

  const datesContainer = document.createElement("div");
  datesContainer.classList.add("dates-container");
  calendar.append(datesContainer);

  const dates = calendarDates();

  dates.forEach((date) => {
    const eachDate = document.createElement("div");
    eachDate.classList.add("each-date");
    eachDate.textContent = format(new Date(date.date), "d");

    if (date.isInactive) {
      eachDate.classList.add("inactive");
    }
    if (date.isToday) {
      eachDate.classList.add("today");
    }

    datesContainer.append(eachDate);
  });
};

generateCalendar();

const gago = new Date();
console.log(gago);
console.log(subMonths(gago, 1));
console.log(addMonths(gago, 1));
const today = new Date();
console.log(startOfMonth(currentMonth))
console.log(startOfMonth(today))
