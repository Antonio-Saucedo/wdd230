const d = new Date();
const author = document.getElementById("author").textContent;

document.getElementById("footer").textContent = `© ${d.getFullYear()} | ${author} | Idaho`;
document.getElementById("date").textContent = `Last Updated: ${document.lastModified}`;
