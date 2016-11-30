function moverCursor(entero){
    var cursor = document.getElementById("apuntador");
    if (entero == 1){
        cursor.style.left = "11%";
    }
    else if (entero == 2){
        cursor.style.left = "36%";
    }
    else if (entero == 3){
        cursor.style.left = "61%";
    }
    else{
        cursor.style.left = "86%";
    }

}
function showSubMenu(entero){
    if (entero == 1){
        var cursor = document.getElementById("submenu1");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";
    }
    else if (entero == 2){
        var cursor = document.getElementById("submenu2");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";

    }
    else if (entero == 3){
        var cursor = document.getElementById("submenu3");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";

    }
    else if (entero == 4){
        var cursor = document.getElementById("submenu4");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";

    }
    else if (entero == 5){
        var cursor = document.getElementById("submenu5");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";

    }
    else if (entero == 6){
        var cursor = document.getElementById("submenu6");
        cursor.style.display = "block";
        cursor.style.backgroundImage = "url('assets/mapaCasaLimpiezaTexto.png')";

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
function Optima(obj,entero){
    if (entero == 1){
        var cursor = document.getElementById("Cuarto");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }
    else if (entero == 2){
        var cursor = document.getElementById("Banno2");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }
    else if (entero == 3){
        var cursor = document.getElementById("Cocina");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }
    else if (entero == 4){
        var cursor = document.getElementById("Sala");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }
    else if (entero == 5){
        var cursor = document.getElementById("Banno");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }
    else if (entero == 6){
        var cursor = document.getElementById("Entrada");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Mínimo", "Óptima"); 
        res = res.replace("Personalizado", "Óptima"); 
        res = res.replace("Patrón", "Limpieza"); 
        res = res.replace("Consumo", "Limpieza"); 
        cursor.innerHTML = res;

    }

}
function Consumo(obj,entero){
    if (entero == 1){
        var cursor = document.getElementById("Cuarto");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;
    }
    else if (entero == 2){
        var cursor = document.getElementById("Banno2");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;
    }
    else if (entero == 3){
        var cursor = document.getElementById("Cocina");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;

    }
    else if (entero == 4){
        var cursor = document.getElementById("Sala");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;

    }
    else if (entero == 5){
        var cursor = document.getElementById("Banno");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;

    }
    else if (entero == 6){
        var cursor = document.getElementById("Entrada");
        var nombre = cursor.innerHTML
        var res = nombre.replace("Óptima", "Mínimo"); 
        res = res.replace("Personalizado", "Mínimo"); 
        res = res.replace("Patrón", "Consumo"); 
        res = res.replace("Limpieza", "Consumo"); 
        cursor.innerHTML = res;

    }

}
