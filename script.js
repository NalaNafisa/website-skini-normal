// JavaScript to handle sidebar toggle and icon change
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuToggle.addEventListener('click', function () {
  console.log('menu toogle cliked')
  sidebar.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
  sidebar.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
});

// Countdown Timer
const endTime = new Date("December 31, 2024 00:00:00").getTime();

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "The time has come!";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}, 1000);
function notifyMe() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(`You will be notified at ${email} when Skinsense is launched!`);
  } else {
    alert('Please enter a valid email address.');
  }
}
console.log('its work')