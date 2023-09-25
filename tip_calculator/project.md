# projects related to DOM

## project link [click here](https://stackblitz.com/edit/js-ygddnd?file=index.html,index.js,style.css)

# Solution Code JS

## Project tip Calculator

```javascript
const billInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const calculateButton = document.getElementById("calculate");
const resultOutput = document.getElementById("results");

calculateButton.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);

  if (
    isNaN(bill) ||
    isNaN(tipPercentage) ||
    bill === "" ||
    tipPercentage === ""
  ) {
    resultOutput.textContent = "Please enter the valid numbers";
  } else {
    // tip calculate

    const tipAmount = (bill * tipPercentage) / 100;
    const totalBill = tipAmount + bill;
    console.log(totalBill); // just for checking the logic

    // content to display

    resultOutput.textContent = `Total Bill (including tip): $${totalBill}`;
  }
});
```
