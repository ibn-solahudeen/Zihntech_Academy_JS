const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageBoxInput = document.querySelector("#messageBox");
const formMsg = document.querySelector("#formMsg");

function showMessage (message, color) {
  formMsg.textContent = message;
  formMsg.style.color = color;
}


form.addEventListener("submit", function(e) {
  e.preventDefault()
  showMessage("")

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const messageBox =messageBoxInput.value.trim();

  if (name === "") {
    showMessage("Please enter your name", "red")
  }else if (email === "") {
    showMessage("Please enter your email", "red")
  }else if (!email.includes("@") || !email.includes(".")) {
     showMessage("Email must contain @ and .", "red")
  } else if (messageBox === "") {
    showMessage("Please write a message", "red")
  }else {
    showMessage("Message sent,thank you!", "green")
  }
})