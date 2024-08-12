"use strict";
const custom = document.getElementById('%');
const display = document.getElementById("Total__per");
function displayElement() {
    display.textContent = custom.value;
}
custom.addEventListener('input', displayElement);
//# sourceMappingURL=index.js.map