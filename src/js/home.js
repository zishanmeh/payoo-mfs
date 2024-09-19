document.getElementById("add-money").addEventListener("click", (event) => {
  event.preventDefault();
  let amount = getInputFieldValueById("add-money-amount");
  let pin = getInputFieldValueById("pin");

  if (isNaN(amount)) {
    alert("Faield to add money");
    return;
  }

  if (pin === 6227) {
    const balanceNumber = getTextFieldValueById("available-balance");
    const newBalance = amount + balanceNumber;
    document.getElementById("available-balance").innerText = newBalance;
    document.getElementById("add-money-amount").value = "";
    pin = document.getElementById("pin").value = "";
    const div = document.createElement("div");
    div.classList.add("bg-green-300");
    div.classList.add("mb-2");
    div.classList.add("p-2");
    div.classList.add("rounded-md");
    div.innerHTML = `
    <h4 class="text-2xl">Added Money</h4>
    <p>${amount} Added. New Balance: ${newBalance}</p>
    `;
    document.getElementById("transection-container").appendChild(div);

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
  if (isNaN(amount)) {
    alert("Faield to withdraw money");
    return;
  }
  if (pin === 6227) {
    const balanceNumber = getTextFieldValueById("available-balance");
    const newBalance = balanceNumber - amount;
    document.getElementById("available-balance").innerText = newBalance;
    document.getElementById("money-amount").value = "";
    document.getElementById("pin-number").value = "";
    const div = document.createElement("div");
    div.classList.add("bg-red-300");
    div.classList.add("mb-2");
    div.classList.add("p-2");
    div.classList.add("rounded-md");
    div.innerHTML = `
    <h4 class="text-2xl">Cashout</h4>
    <p>${amount} withdraw. New Balance: ${newBalance}</p>
    `;
    document.getElementById("transection-container").appendChild(div);
    //   cash out form will hidden
    const cashOutForm = document.getElementById("cash-out-money-form");
    cashOutForm.classList.add("hidden");
  } else {
    alert("Faield to cash out");
  }
});
