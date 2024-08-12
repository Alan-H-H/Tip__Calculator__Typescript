const bill = document.getElementById('bill') as HTMLInputElement
const peoplenumber = document.getElementById('people') as HTMLInputElement
const radios: any = document.querySelectorAll('input[type="radio"][name="select"]')
const custom = document.getElementById('%') as HTMLInputElement
const display = document.getElementById("Total__per") as HTMLOutputElement
const perperson = document.getElementById("Amount__per") as HTMLOutputElement
const reGex = /^\d{1,2}$/

function reset(){
    location.reload()
}

function calculateTotal() {
    const billVal = parseFloat(bill.value) || 0;
    const peopleVal = parseInt(peoplenumber.value, 10) || 1;
    let percentage = 0;

    radios.forEach((radio:any) => {
        if (radio.checked) {
            percentage = parseFloat(radio.value) / 100;
        }
    });

    // Handle custom input
    const customValue = custom.value;
    if (customValue && reGex.test(customValue)) {
        percentage = parseFloat(customValue) / 100;
    }

    const totalPerPerson = (billVal * percentage) / peopleVal;
    const tipAmount = (billVal * percentage)
    display.textContent = `$${totalPerPerson.toFixed(2)}`;
    perperson.textContent = `$${tipAmount.toFixed(2)}`;
}

// Attach event listeners
bill.addEventListener('input', calculateTotal);
peoplenumber.addEventListener('input', calculateTotal);
radios.forEach((radio:any) => radio.addEventListener('change', calculateTotal));
custom.addEventListener('input', calculateTotal);
        
                

    
    


