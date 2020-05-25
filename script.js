function posting() {
    var pseudo = document.getElementById("pseudo").value;
    var content = document.getElementById("content").value;
    if (pseudo !== "" && content !== "") {

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
        var nbrlikes = document.createElement("h4");
        nbrlikes.className = "like";
        nbrlikes.id = "nbr";
        var liker = document.createElement("button");
        liker.className = "like";
        /*liker.setAttribute("onclick", "liker()");*/

        titre.innerHTML = pseudo;
        contenant.innerHTML = content;
        liker.innerHTML = "Liker";

        document.getElementById("post").appendChild(pic);
        document.getElementById("post").appendChild(titre);
        document.getElementById("post").appendChild(contenant);
        document.getElementById("post").appendChild(nbrlikes);
        document.getElementById("post").appendChild(liker);
    };



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
};