function _id(ident) {
    return document.getElementById(ident);
}

function calculaHora() {
    let ponerTiempo = (_id("inputTime").value);
    let separarTiempo = ponerTiempo.split(":");
    let tipusTime = (_id("tipusTime").value);
    let resultatTime;

    let hora = parseInt(separarTiempo[0]);
    let minutos = parseInt(separarTiempo[1]);

    if (tipusTime == "m") {
        resultatTime = (hora * 60) + minutos;
        resultatTime += " Minutos"
    } else if (tipusTime == "s") {
        resultatTime = (hora * 60 + minutos) * 60;
        resultatTime += " Segundos"
    }

    _id("resultatTime").innerHTML = resultatTime;

}

function calculaCapital() {

}

function canviaEstil(tipus) {
    var colorFons;
    var colorBorder;
    if (tipus == "clear") {
        colorFons = "white";
        colorBorder = "black";
    } else if (tipus == "random") {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        colorFons = "rgb(" + red + "," + green + "," + blue + ")";
        colorBorder = "rgb(" + blue + "," + red + "," + green + ")";
    }


    _id("principal").style.backgroundColor = colorFons;
    _id("principal").style.borderColor = colorBorder;
}