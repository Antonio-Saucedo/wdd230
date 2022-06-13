var visited = localStorage.getItem("visits");
var previousDate = localStorage.getItem("date");
var visitDate = Date.now();
var totalDays = Math.floor((visitDate - previousDate) / 86400000);

if (visited == 1) {
  document.getElementById(
    "visits"
  ).textContent = `Welcome Back! You have been here ${visited} time!`;
} else if (visited > 1) {
  document.getElementById(
    "visits"
  ).textContent = `Welcome Back! You have been here ${visited} times!`;
} else if (!visited) {
  document.getElementById(
    "visits"
  ).textContent = `Welcome! This is your first time with us!`;
  totalDays = 0;
}
document.getElementById(
  "visitTime"
).textContent = `There have been ${totalDays} days since your last visit.`;
visited++;
localStorage.setItem("visits", visited);
localStorage.setItem("date", visitDate);
