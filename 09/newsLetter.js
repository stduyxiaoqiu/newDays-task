const emailInput = document.querySelector(".emailInput");
function isValidEmail(email) {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return reg.test(email);
}
const errorFormat = document.querySelector(".errorFormat");
const btn = document.querySelector(".btn");
let timer = null;

emailInput.addEventListener("input", () => {
  console.log(1);
  console.log(emailInput.value);

  clearTimeout(timer);
  timer = setTimeout(() => {
    const isValidate = isValidEmail(emailInput.value);
    if (isValidate) {
      errorFormat.classList.add("hidden");
      btn.classList.add("tureStates");
      emailInput.classList.remove("textStatus");
    } else {
      errorFormat.classList.remove("hidden");
      btn.classList.remove("tureStates");
      emailInput.classList.add("textStatus");
    }
  }, 500);
});
