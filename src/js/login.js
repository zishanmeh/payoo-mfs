document.getElementById("login-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const phonenumber = document.getElementById("phone-input").value;
  const pinNumber = document.getElementById("password-input").value;
  if (phonenumber === "12345678" && pinNumber === "6227") {
    window.location.href = "src/logged/home.html";
  } else {
    alert("Wrong password");
  }
});
