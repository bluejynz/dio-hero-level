document.addEventListener("submit", (event) => {
    event.preventDefault();
    btn(event);
});

function btn(event) {
    event.preventDefault();

    let h2 = document.getElementById("result-text");
    h2.classList.remove("hidden");

    let heroName = document.getElementById("name").value;
    let xp = document.getElementById("xp").value;
    let heroXp = checkRanking(parseInt(xp));

    h2.innerText = `O herói ${heroName} está no nível ${heroXp}`;
}

function checkRanking(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        return "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        return "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        return "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
        return "Platina";
    } else if (xp > 8000 && xp <= 9000) {
        return "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
        return "Imortal";
    } else if (xp > 10000) {
        return "Radiante";
    } else {
        console.log(xp);
        return "Erro";
    }
}
