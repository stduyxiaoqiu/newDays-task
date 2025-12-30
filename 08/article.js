const btn = document.querySelector(".btn");
const shareBox = document.querySelector(".share-box");
btn.addEventListener("click", () => {
  shareBox.classList.toggle("transparent");
});
