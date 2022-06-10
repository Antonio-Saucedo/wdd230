// Header and footer date outputs
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

document.getElementById("today").textContent = `${weekday[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
document.getElementById("modified").textContent = `Last Updated: ${document.lastModified}`;

// Join us message based on day of the week
if (d.getDay() == 1 || d.getDay() == 2) {
  document.getElementById("joinUs").style.display = "block";
}

// Lazy loading
const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImages(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  images.forEach((img) => {
    loadImages(img);
  });
}

// User visits message
var visited = localStorage.getItem("visits");

if (visited == 1) {
  document.getElementById("visits").textContent = `Welcome Back! You have been here ${visited} time!`;
  } else if (visited > 1) {
  document.getElementById("visits").textContent = `Welcome Back! You have been here ${visited} times!`;
  } else {
  document.getElementById("visits").textContent = `Welcome! This is your first time with us!`;
  }
  visited++;
  localStorage.setItem("visits", visited);