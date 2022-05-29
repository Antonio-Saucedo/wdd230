function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const d = new Date();

document.getElementById("today").textContent = `${weekday[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
document.getElementById("modified").textContent = `Last Updated: ${document.lastModified}`;

if (d.getDay() == 1 || d.getDay() == 2) {
  document.getElementById("joinUs").style.display = "block";
}