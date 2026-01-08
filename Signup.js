const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");
const error = document.getElementById("error");

nameInput.addEventListener("input", () => {
  greeting.textContent = "Nice to meet you, " + nameInput.value + " 😊";
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let password = document.getElementById("password").value;

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters";
    return;
  }

  error.textContent = "";
  alert("Signup Successful 🎉");
  this.reset();
  greeting.textContent = "Join us in seconds 🚀";
});
