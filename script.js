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