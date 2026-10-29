function calculateInterest() {
    // HTML se values get karna
    const principal = parseFloat(document.getElementById('principal').value);
    const monthlyRatePer100 = parseFloat(document.getElementById('rate').value);
    const months = parseInt(document.getElementById('period').value);
    const interestType = document.getElementById('interestType').value;

    // Validation
    if (isNaN(principal) || principal <= 0) {
        alert("Kripya sahi Principal Amount enter karein!");
        return;
    }

    // Kyunki rate "per ₹100 per month" hai, toh monthly percentage rate (r) hoga:
    // Jaise ₹2 per ₹100 ka matlab 2% monthly rate hai.
    const monthlyRate = monthlyRatePer100 / 100;

    let monthlyInterest = 0;
    let totalInterest = 0;
    let totalAmount = 0;

    if (interestType === 'simple') {
        // Simple Interest Calculation
        // Formula: Total Interest = Principal * monthlyRate * months
        totalInterest = principal * monthlyRate * months;
        monthlyInterest = principal * monthlyRate;
        totalAmount = principal + totalInterest;

    } else if (interestType === 'compound') {
        // Compound Interest (Monthly Compounding)
        // Formula: Amount = Principal * (1 + r)^n - Principal
        const amount = principal * Math.pow((1 + monthlyRate), months);
        totalInterest = amount - principal;
        totalAmount = amount;
        monthlyInterest = totalInterest / months; // Average monthly interest
    }

    // Results ko HTML elements mein display karna
    document.getElementById('monthly').innerText = `₹${monthlyInterest.toFixed(2)}`;
    document.getElementById('interest').innerText = `₹${totalInterest.toFixed(2)}`;
    document.getElementById('total').innerText = `₹${totalAmount.toFixed(2)}`;
}

// Page load hote hi ek baar default calculate kar lein
window.onload = function() {
    calculateInterest();
};