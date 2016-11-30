function showSubMenu(entero){
    if (entero == 1){
        var cursor = document.getElementById("submenu1");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";
    }
    else if (entero == 2){
        var cursor = document.getElementById("submenu2");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";

    }
    else if (entero == 3){
        var cursor = document.getElementById("submenu3");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";

    }
    else if (entero == 4){
        var cursor = document.getElementById("submenu4");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";

    }
    else if (entero == 5){
        var cursor = document.getElementById("submenu5");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";

    }
    else if (entero == 6){
        var cursor = document.getElementById("submenu6");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaElectricidadTexto.png')";

    }
}
function hideSubMenu(entero){
    if (entero == 1){
        var cursor = document.getElementById("submenu1");
        cursor.style.display = "none";
    }
    else if (entero == 2){
        var cursor = document.getElementById("submenu2");
        cursor.style.display = "none";

    }
    else if (entero == 3){
        var cursor = document.getElementById("submenu3");
        cursor.style.display = "none";

    }
    else if (entero == 4){
        var cursor = document.getElementById("submenu4");
        cursor.style.display = "none";

    }
    else if (entero == 5){
        var cursor = document.getElementById("submenu5");
        cursor.style.display = "none";

    }
    else if (entero == 6){
        var cursor = document.getElementById("submenu6");
        cursor.style.display = "none";

    }
}

function Monetario(obj,entero){
    if (entero == 1){
        var cursor = document.getElementById("Cuarto");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("500 KVA", "5$ por dia"); 
          var res = res.replace("600 KVA", "6$ por dia");
        }
        else{
          var res = nombre.replace("5$ por dia","500 KVA"); 
          var res = res.replace( "6$ por dia", "600 KVA");
        }
        cursor.innerHTML = res;

    }
    else if (entero == 2){
        var cursor = document.getElementById("Banno2");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("250 KVA", "2.5$ por dia"); 
          var res = res.replace("400 KVA", "4$ por dia"); 
        }
        else{
          var res = nombre.replace("2.5$ por dia","250 KVA"); 
          var res = res.replace("4$ por dia", "400 KVA" ); 
        }
        cursor.innerHTML = res;

    }
    else if (entero == 3){
        var cursor = document.getElementById("Cocina");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("500 KVA", "5$ por dia"); 
          var res = res.replace("600 KVA", "6$ por dia");
        }
        else{
          var res = nombre.replace("5$ por dia","500 KVA"); 
          var res = res.replace( "6$ por dia", "600 KVA");
        }
        cursor.innerHTML = res;

    }
    else if (entero == 4){
        var cursor = document.getElementById("Sala");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("500 KVA", "5$ por dia"); 
          var res = res.replace("600 KVA", "6$ por dia");
        }
        else{
          var res = nombre.replace("5$ por dia","500 KVA"); 
          var res = res.replace( "6$ por dia", "600 KVA");
        }
        cursor.innerHTML = res;

    }
    else if (entero == 5){
        var cursor = document.getElementById("Banno");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("250 KVA", "2.5$ por dia"); 
          var res = res.replace("400 KVA", "4$ por dia"); 
        }
        else{
          var res = nombre.replace("2.5$ por dia","250 KVA"); 
          var res = res.replace("4$ por dia", "400 KVA" ); 
        }
        cursor.innerHTML = res;

    }
    else if (entero == 6){
        var cursor = document.getElementById("Entrada");
        var nombre = cursor.innerHTML
        if (nombre.includes("KVA")){
          var res = nombre.replace("150 KVA", "1.5$ por dia"); 
          var res = res.replace("200 KVA", "2$ por dia"); 
        }
        else{
          var res = nombre.replace("1.5$ por dia","150 KVA"); 
          var res = res.replace("2$ por dia","200 KVA"); 
        }
        cursor.innerHTML = res;

    }

}
function Limite(obj,entero){
    if (entero == 1){
        var cursor = document.getElementById("Cuarto");
        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 600 KVA", " "); 
          var res = res.replace("<br>Max: 6$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 600 KVA");           
        }
        cursor.innerHTML = res;

    }
    else if (entero == 2){
        var cursor = document.getElementById("Banno2");
        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 400 KVA", " "); 
          var res = res.replace("<br>Max: 4$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 400 KVA");           
        }
        cursor.innerHTML = res;

    }
    else if (entero == 3){
        var cursor = document.getElementById("Cocina");
        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 600 KVA", " "); 
          var res = res.replace("<br>Max: 6$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 600 KVA");           
        }
        cursor.innerHTML = res;

    }
    else if (entero == 4){
        var cursor = document.getElementById("Sala");
        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 600 KVA", " "); 
          var res = res.replace("<br>Max: 6$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 600 KVA");           
        }
        cursor.innerHTML = res;

    }
    else if (entero == 5){
        var cursor = document.getElementById("Banno");
        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 400 KVA", " "); 
          var res = res.replace("<br>Max: 4$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 400 KVA");           
        }
        cursor.innerHTML = res;

    }
    else if (entero == 6){
        var cursor = document.getElementById("Entrada");

        var nombre = cursor.innerHTML
        if (nombre.includes("Max:")){
          var res = nombre.replace("<br>Max: 200 KVA", " "); 
          var res = res.replace("<br>Max: 2$ por dia", " "); 
        }
        else{
          var res = (nombre + "<br>Max: 200 KVA");           
        }
        cursor.innerHTML = res;

    }

}
