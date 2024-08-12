var bill = document.getElementById('bill');
var peoplenumber = document.getElementById('people');
var radios = document.querySelectorAll('input[type="radio"][name="select"]');
var custom = document.getElementById('%');
var display = document.getElementById("Total__per");
var perperson = document.getElementById("Amount__per");
var reGex = /^\d{1,2}$/;
function reset() {
    location.reload();
}
function calculateTotal() {
    var billVal = parseFloat(bill.value) || 0;
    var peopleVal = parseInt(peoplenumber.value, 10) || 1;
    var percentage = 0;
    radios.forEach(function (radio) {
        if (radio.checked) {
            percentage = parseFloat(radio.value) / 100;
        }
    });
    // Handle custom input
    var customValue = custom.value;
    if (customValue && reGex.test(customValue)) {
        percentage = parseFloat(customValue) / 100;
    }
    var totalPerPerson = (billVal * percentage) / peopleVal;
    var tipAmount = (billVal * percentage);
    display.textContent = "$".concat(totalPerPerson.toFixed(2));
    perperson.textContent = "$".concat(tipAmount.toFixed(2));
}
// Attach event listeners
bill.addEventListener('input', calculateTotal);
peoplenumber.addEventListener('input', calculateTotal);
radios.forEach(function (radio) { return radio.addEventListener('change', calculateTotal); });
custom.addEventListener('input', calculateTotal);
