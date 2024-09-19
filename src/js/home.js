document.getElementById("add-money").addEventListener("click", (event) => {
  event.preventDefault();
  let amount = getInputFieldValueById("add-money-amount");
  let pin = getInputFieldValueById("pin");

  if (pin === 6227) {
    const balanceNumber = getTextFieldValueById("available-balance");
    const newBalance = amount + balanceNumber;
    document.getElementById("available-balance").innerText = newBalance;
    document.getElementById("add-money-amount").value = "";
    pin = document.getElementById("pin").value = "";
    const addMoneyForm = document.getElementById("add-money-form");
    addMoneyForm.classList.add("hidden");
  } else {
    alert("Failed to add money");
  }
});

document.getElementById("cash-out-money").addEventListener("click", (event) => {
  event.preventDefault();
  let amount = getInputFieldValueById("money-amount");
  let pin = getInputFieldValueById("pin-number");
  if (pin === 6227) {
    const balanceNumber = getTextFieldValueById("available-balance");
    const newBalance = balanceNumber - amount;
    document.getElementById("available-balance").innerText = newBalance;
    document.getElementById("money-amount").value = "";
    document.getElementById("pin-number").value = "";
    //   cash out form will hidden
    const cashOutForm = document.getElementById("cash-out-money-form");
    cashOutForm.classList.add("hidden");
  } else {
    alert("Faield to cash out");
  }
});
