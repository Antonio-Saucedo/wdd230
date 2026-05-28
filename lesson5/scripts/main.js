const listContainer = document.querySelector("ul.list");
const bookInput = document.getElementById("book-chapter-input");
const addButton = document.getElementById("add-button");
const headerLabel = document.querySelector("h1");
let savedItems = JSON.parse(localStorage.getItem("listItems")) ?? [];

// Initialize page elements
savedItems.forEach(({ value, index }) => createListItemElement(value, index));
toggleHeaderIcons();

// Event listeners
bookInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addListItem();
  }
});

addButton.addEventListener("click", addListItem);

// Functions
function addListItem() {
  const bookChapter = bookInput.value;
  if (!bookChapter) return;

  bookInput.value = "";

  // Check if input value is empty with blank space check.
  const newIndex =
    savedItems.length === 0
      ? 0
      : Number(savedItems[savedItems.length - 1].index) + 1;

  createListItemElement(bookChapter, newIndex);
  savedItems.push({ index: newIndex, value: bookChapter });
  saveItems();

  bookInput.focus();
  toggleHeaderIcons();
}

function createListItemElement(newItem, index) {
  const listItem = document.createElement("li");
  const listButton = document.createElement("button");
  const listButtonImage = document.createElement("img");

  // Add image to button element
  listButtonImage.src = "./images/x.png";
  listButtonImage.alt = "Delete Book Icon";
  listButton.appendChild(listButtonImage);

  // Add text and button to list element
  listItem.textContent = newItem;
  listItem.dataset.id = index;
  listItem.appendChild(listButton);

  // Add row to list container element
  listContainer.appendChild(listItem);

  listButton.addEventListener("click", () => {
    savedItems = savedItems.filter((item) => item.index !== index);
    saveItems();
    listItem.remove();
    toggleHeaderIcons();
  });
}

function saveItems() {
  localStorage.setItem("listItems", JSON.stringify(savedItems));
}

// Add book open/close animation
function toggleHeaderIcons() {
  const hasItems = listContainer.querySelector("li") !== null;
  headerLabel.querySelector(".opened-book").style.display = hasItems
    ? "none"
    : "inline-block";
  headerLabel.querySelector(".closed-book").style.display = hasItems
    ? "inline-block"
    : "none";
}
