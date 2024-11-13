function calculateCommission() {
    const amount = parseFloat(document.getElementById("xd").value);
    const rate = parseFloat(document.getElementById("ok").value);

    if (isNaN(amount) || isNaN(rate)) {
        document.getElementById("wynik").innerText = "Prosze wpisac normalne liczby";
        return;
    }

    const commission = amount * (rate / 100);

    document.getElementById("wynik").innerText = `Prowizja: ${commission.toFixed(2)} PLN`;
}
