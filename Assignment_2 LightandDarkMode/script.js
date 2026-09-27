const body = document.querySelector("#body")
const btn = document.querySelector("#modeBtn")
btn.addEventListener("click", function () {
  body.classList.toggle("dark")
  btn.classList.contains("dark")
  if (body.classList.contains("dark")) {
    btn.textContent =" Go light"
  }else {
    btn.textContent = "Go dark"
  }
})