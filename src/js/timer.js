let calcEndDate = (daysToAdd) => {
  let date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date;
};

let randomizerDate = (end, start) => {
  return Math.floor(Math.random() * (start - end + 1) + end);
};

let countdown = (endDate) => {
  let days = document.querySelector(".timer__day-count");
  let hours = document.querySelector(".timer__hours-count");
  let minutes = document.querySelector(".timer__minutes-count");
  let seconds = document.querySelector(".timer__seconds-count");

  let updateTimer = () => {
    let now = new Date();
    let diff = endDate - now;

    if (diff <= 0) {
      clearInterval(timerInterval);
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      return;
    }
    const daysCount = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursCount = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesCount = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsCount = Math.floor((diff % (1000 * 60)) / 1000);

    days.textContent = daysCount < 10 ? "0" + daysCount : daysCount;
    hours.textContent = hoursCount < 10 ? "0" + hoursCount : hoursCount;
    minutes.textContent = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    seconds.textContent = secondsCount < 10 ? "0" + secondsCount : secondsCount;
  };
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
};

window.onload = () => {
  const randomDate = randomizerDate(1, 30);
  const endDate = calcEndDate(randomDate);
  countdown(endDate);
};
