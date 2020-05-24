function posting() {
    var element = document.createElement("div");
    element.id = "post";
    document.getElementById("container").appendChild(element);

    var pic = document.createElement("img");
    pic.id = "him";
    pic.className = "ligne";
    pic.setAttribute('src', 'him.png');
    var titre = document.createElement("h3");
    titre.className = "ligne";
    var contenant = document.createElement("p");

    titre.innerHTML = document.getElementById("pseudo").value;
    contenant.innerHTML = document.getElementById("content").value;

    document.getElementById("post").appendChild(pic);
    document.getElementById("post").appendChild(titre);
    document.getElementById("post").appendChild(contenant);
};

function calcul() {
    var prix = document.getElementById("prix").value;
    var taux = document.getElementById("taux").value;
    var op = document.getElementById("op").value;

    var benefice = prix * taux / 100;

    if (op === "+") {
        var prixFinal = prix * (1 + taux / 100);
        document.getElementById("final").innerHTML = "Le prix après l'augmentation est de : " + prixFinal;
        document.getElementById("benefice").innerHTML = "Le taux de benefice est de : " + benefice;
    } else if (op === "-") {
        var prixFinal = prix * (1 - taux / 100);
        document.getElementById("final").innerHTML = "Le prix après la remise est de : " + prixFinal;
        document.getElementById("benefice").innerHTML = "Le taux de benefice est de : " + benefice;
    } else {
        document.getElementById("final").innerHTML = "Veuillez Entrer soit le signe '+' ou '-', Merci";

    }
}