document.getElementById("open-add-money").addEventListener("click", () => {
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.classList.remove("hidden");
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
