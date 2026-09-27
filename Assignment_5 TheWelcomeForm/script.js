const welcomeForm = document.querySelector("#welcomeForm")
const userName = document.querySelector("#userName")
const message = document.querySelector("#message")
welcomeForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const name = userName.value.trim();
  if (name === ""){
    message.textContent = "Please type your name"
    message.style.color = "red"
  }else if (name.length < 3) {
    message.textContent = "Name must be at least 3 characters"
    message.style.color = "red"
  } else {
    message.textContent = `Welcome, ${name}`
    message.style.color = "green"
  }
})