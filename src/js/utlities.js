// Common shared functions here

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const floatInputValue = parseFloat(inputValue);
  return floatInputValue;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showASectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-money-form").classList.add("hidden");
  document.getElementById("transection-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
