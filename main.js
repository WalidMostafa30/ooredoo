const anotherNumberBtn = document.querySelector("#anotherNumberBtn");
const anotherNumber = document.querySelector(".anotherNumber");
anotherNumberBtn.addEventListener("click", () => {
  if (anotherNumber.classList.contains("hidden")) {
    anotherNumber.classList.remove("hidden");
    anotherNumber.classList.add("flex");
  } else {
    anotherNumber.classList.remove("flex");
    anotherNumber.classList.add("hidden");
  }
});
