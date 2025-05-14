function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    alert("Please enter valid numbers!");
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;

  document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
  document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}
