const endDate = "12 February 2024 04:11:00 PM";

let dayInput = document.querySelector(".day");

let hrInput = document.querySelector(".hr");
let minInput = document.querySelector(".min");
let secInput = document.querySelector(".sec");

function clock() {
  const end = new Date(endDate);
  let now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  dayInput.value = Math.floor(diff / 3600 / 24);
  hrInput.value = Math.floor(diff / 3600) % 24;
  minInput.value = Math.floor(diff / 60) % 60;
  secInput.value = Math.floor(diff) % 60;
}

clock();
setInterval(clock, 1000);
