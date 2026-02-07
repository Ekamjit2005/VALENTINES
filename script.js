//function goToMain() {
  //window.location.href = "main.html";
//}

function moveNo() {
  const noBtn = document.querySelector('.no-btn');
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Countdown timer
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  const valentine = new Date("Feb 14, 2026 00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = valentine - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.innerHTML = `${d} days to Valentine ❤️`;
  }, 1000);
}

// Secret unlock
function unlockSecret() {
  document.getElementById("secret").style.display = "block";
}
const heartBg = document.querySelector(".heart-bg");

const heartEmojis = ["❤️", "💖", "💕", "💗", "💘"];

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 12 + 12 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}, 300);

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- HEART BACKGROUND ---------------- */
  const heartBg = document.querySelector(".heart-bg");
  const hearts = ["❤️", "💖", "💕", "💗", "💘"];

  setInterval(() => {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 12 + "px";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s";

    heartBg.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 250);

  /* ---------------- CURSOR HEARTS ---------------- */
  document.addEventListener("mousemove", e => {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerText = "💗";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.fontSize = "14px";
    heart.style.animationDuration = "2s";

    heartBg.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  });

  /* ---------------- SPARKLES ---------------- */
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
  }, 300);

  /* ---------------- MUSIC BEAT PULSE ---------------- */
  const audio = document.querySelector("audio");
  if (audio) {
    setInterval(() => {
      document.body.style.transform = "scale(1.005)";
      document.body.style.transformOrigin = "center center";

      setTimeout(() => {
        document.body.style.transform = "scale(1)";
      }, 150);
    }, 600);
  }
});

/* ---------------- YES BUTTON BURST ---------------- */
function goToMain() {
  for (let i = 0; i < 30; i++) {
    const burst = document.createElement("span");
    burst.className = "heart";
    burst.innerText = "💖";

    burst.style.left = "50vw";
    burst.style.top = "50vh";
    burst.style.fontSize = "20px";
    burst.style.animationDuration = "1.5s";

    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1500);
  }

  setTimeout(() => {
    window.location.href = "main.html";
  }, 800);
}
function startValentineCountdown() {
  const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  setInterval(() => {
    const now = new Date().getTime();
    const diff = valentineDate - now;

    if (diff <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.innerText = days.toString().padStart(2, "0");
    hoursEl.innerText = hours.toString().padStart(2, "0");
    minutesEl.innerText = minutes.toString().padStart(2, "0");
    secondsEl.innerText = seconds.toString().padStart(2, "0");
  }, 1000);
}

startValentineCountdown();

const today = new Date();
today.setHours(0, 0, 0, 0);

document.querySelectorAll(".day").forEach(day => {
  const unlockDate = new Date(day.dataset.date);
  unlockDate.setHours(0, 0, 0, 0);

  if (today >= unlockDate) {
    day.classList.add("unlocked");
  } else {
    day.classList.add("locked");
    day.removeAttribute("href");
  }
});




