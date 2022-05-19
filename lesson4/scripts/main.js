const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Use Enter key to submit new list items.
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => {
  const item = input.value;
  input.value = "";
  // Check if input value is blank with blank space check.
  if (/^\s*$/.test(item) != "") {
  } else {
    const listItem = document.createElement("li");
    const listBtn = document.createElement("button");

    listItem.textContent = item;
    listItem.appendChild(listBtn);
    listBtn.textContent = "X";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    input.focus();
  }
});
