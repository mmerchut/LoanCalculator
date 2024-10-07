document.getElementById('calculate').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const numberOfPayments = years * 12;

    // Monthly Payment Calculation
    const monthlyPayment = (principal * interestRate) / (1 - Math.pow((1 + interestRate), -numberOfPayments));

    // Display Result
    if (!isNaN(monthlyPayment) && (monthlyPayment != Infinity) && (monthlyPayment > 0)) {
        document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values.';
    }
});
