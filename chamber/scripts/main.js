function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();

document.getElementById("today").textContent = `${weekday[d.getDay()]}, ${d.getDate()} ${d.getFullYear()}`;
document.getElementById("footer").textContent = `© ${d.getFullYear()} | Antonio J. Saucedo | Idaho`;
document.getElementById("date").textContent = `Last Updated: ${document.lastModified}`;