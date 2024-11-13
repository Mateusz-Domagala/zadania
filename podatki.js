function calculateNetIncome() {
    const grossIncome = parseFloat(document.getElementById("pieniadze").value);
    const taxRate = parseFloat(document.getElementById("stawka").value) / 100;
    if (isNaN(grossIncome) || isNaN(taxRate)) {
        alert("Prosze wpisac normalne liczby");
        return;
    }
    const netIncome = grossIncome * (1 - taxRate);

    document.getElementById("wynik").innerText = `Netto: ${netIncome.toFixed(2)} PLN`;
}