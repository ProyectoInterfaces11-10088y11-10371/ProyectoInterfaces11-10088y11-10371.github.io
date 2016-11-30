var i = 0;
function moverAguja(entero){
    var aguja = document.getElementById("aguja");
    i = i+1;
    if (i == 3){
        i = 0;
    }
    if (i == 0){
       aguja.src = "assets/tamanocargaaguja.png";
       aguja.style.top = "150px";
       aguja.style.left = "190px";

    }
    else if (i == 1){
       aguja.src = "assets/tamanocargaaguja1.png";
       aguja.style.top = "153px";
       aguja.style.left = "123px";
    }
    else{
       aguja.src = "assets/tamanocargaaguja2.png";
       aguja.style.top = "153px";
       aguja.style.left = "123px";

    }
    console.log(i);
}

var j = 0;
function moverTemperatura(){
    var termometro = document.getElementById("temperatura");
    j = j+1;
    if (j==3){
        j = 0; 
    }
    if (j == 0){
        termometro.src = "assets/temperaturaFrio.png";
    } else if (j == 1) {
        termometro.src = "assets/temperaturaTibio.png";
    } else {
        termometro.src = "assets/temperaturaCaliente.png";
    }

    console.log(j);
}

var k = 0;
function moverLavado(){
    var rueda = document.getElementById("opcioneslavado");
    k = k+1;
    if (k==3){
        k = 0; 
    }
    if (k == 0){
        rueda.src = "assets/opcioneslavado1.png";
    } else if (k == 1) {
        rueda.src = "assets/opcioneslavado2.png";
    } else {
        rueda.src = "assets/opcioneslavado3.png";
    }

    console.log(k);
}

var l = 0;
function moverSecado(){
    var rueda = document.getElementById("opcionessecado");
    l = l+1;
    if (l==3){
        l = 0; 
    }
    if (l == 0){
        rueda.src="assets/opcionessecado1.png";
    } else if (l == 1) {
        rueda.src = "assets/opcionessecado2.png";
    } else {
        rueda.src = "assets/opcionessecado3.png";
    }

    console.log(l);
}

var m = 0;
function power(){
    var boton = document.getElementById("encender");
    m = m+1;
    if (m==2){
        m = 0; 
    }
    if (m == 0){
        boton.src="assets/encender.png";
        } else {
        boton.src = "assets/apagar.png";
    }

    console.log(m);
}
