var fd = new Date();

const months = [
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

document.addEventListener("click", function(){
    document.getElementById("fdate").value = `${months[fd.getMonth()]} ${fd.getDate()}, ${fd.getFullYear()} ${fd.getHours()}:${fd.getMinutes()}:${fd.getSeconds()}`;
});