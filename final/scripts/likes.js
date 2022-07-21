function hideShow(idItem) {
  if ("hidden" in idItem.classList) {
    idItem.classList.remove("hidden");
  } else {
    idItem.classList.add("hidden");
  }
}

const likeBtn = document.getElementById("heart1");

likeBtn.addEventListener("click", hideShow(likeBtn));

// if (likeBtn) {
//   console.log("works");
//   likeBtn.addEventListener("click", hideShow(likeBtn));
// }
