document.getElementById("login-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const phonenumber = document.getElementById("phone-input");
  const pinNumber = document.getElementById("password-input");
  console.log(phonenumber.value, pinNumber.value);
});
