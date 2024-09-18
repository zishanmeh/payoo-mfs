document.getElementById("open-add-money").addEventListener("click", () => {
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.classList.remove("hidden");

  //   cash out form will hidden
  const cashOutForm = document.getElementById("cash-out-money-form");
  cashOutForm.classList.add("hidden");
});

document.getElementById("open-cash-out-money").addEventListener("click", () => {
  const cashOutForm = document.getElementById("cash-out-money-form");
  cashOutForm.classList.remove("hidden");

  //   Add money form will be hidden
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.classList.add("hidden");
});

document.getElementById("add-money").addEventListener("click", (event) => {
  event.preventDefault();
  let amount = document.getElementById("add-money-amount").value;
  let pin = document.getElementById("pin").value;

  if (pin === "6227") {
    const availableBalance = document.getElementById("available-balance");
    const addMoneyNumber = parseFloat(amount);
    const balanceNumber = parseFloat(availableBalance.innerText);
    const newBalance = addMoneyNumber + balanceNumber;
    availableBalance.innerText = newBalance;
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
  let amount = document.getElementById("money-amount").value;
  let pin = document.getElementById("pin-number").value;
  if (pin === "6227") {
    const availableBalance = document.getElementById("available-balance");
    const outMoneyNumber = parseFloat(amount);
    const balanceNumber = parseFloat(availableBalance.innerText);
    const newBalance = balanceNumber - outMoneyNumber;
    availableBalance.innerText = newBalance;
    document.getElementById("money-amount").value = "";
    document.getElementById("pin-number").value = "";
    //   cash out form will hidden
    const cashOutForm = document.getElementById("cash-out-money-form");
    cashOutForm.classList.add("hidden");
  } else {
    alert("Faield to cash out");
  }
});
