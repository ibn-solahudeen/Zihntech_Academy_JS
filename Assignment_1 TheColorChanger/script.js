const title = document.querySelector("#title");
const note = document.querySelector("#note")
const btn1 = document.querySelector("#colorBtn");
const btn2 = document.querySelector("#resetBtn")
btn1.addEventListener("click", function () {
  title.textContent = "You changed me!"
  title.style.color = "Red"
  note.textContent = "I am changed"
  note.style.color = "Red "
})
btn2.addEventListener("click", function () {
  title.textContent = "Click the button below"
  title.style.color = "black"
  note.textContent = "Welcome to the page where i practice how to change colors with javascript"
  note.style.color = "black"
})