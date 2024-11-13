const zdjecia = document.querySelectorAll('.sigma-zdjecie');
let obecnyIndeks = 0;

function nastepneZdjecie() {
    obecnyIndeks = (obecnyIndeks + 1) % zdjecia.length;
    aktualizujZdjecia();
}

function poprzednieZdjecie() {
    obecnyIndeks = (obecnyIndeks - 1 + zdjecia.length) % zdjecia.length;
    aktualizujZdjecia();
}

function aktualizujZdjecia() {
    const torZdjec = document.querySelector('.lista-zdjec');
    torZdjec.style.transform = `translateX(-${obecnyIndeks * 100}%)`;
}