const greeting = document.querySelector("#greeting")
const nameInput = document.querySelector("#nameInput")
const counter = document.querySelector ("#counter")
nameInput.addEventListener("input", function () {
  greeting.textContent = `Hello, ${nameInput.value}`;
   counter.textContent = `${nameInput.value.length}characters`;
   if (nameInput.value === "") {
    greeting.textContent = "Hello, stranger!"
   } 
   if (nameInput.value.length > 20) {
    counter.style.color ="red"
   }
   
})