function showParams(e) {
  e.classList.contains("hide") ?
  e.classList.remove("hide"):
  e.classList.add("hide");
}
document
.querySelector(".form-control")
.addEventListener("input", function() {
  document
  .querySelectorAll(".card")
  .forEach(function(e) {
    event.target.value
    ? e
    .querySelector("h3")
    .textContent.toLowerCase()
      .includes(event.target.value.toLowerCase())
    ? e.classList.remove("hide"): e.classList.add("hide"): e.classList.remove("hide");
  });
});