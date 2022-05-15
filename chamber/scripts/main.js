function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();

document.getElementById("today").textContent = `${weekday[d.getDay()]}, ${d.getDate()} ${d.getFullYear()}`;
document.getElementById("modified").textContent = `Last Updated: ${document.lastModified}`;