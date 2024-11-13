const container = document.getElementById("sigma");

function addVaporeon() {
    const img = document.createElement("img");
    img.src = "nazar.jpg"; 
    img.alt = "nazar";
    img.classList.add("nazar");
    container.appendChild(img);
}

document.body.addEventListener("click", addVaporeon);