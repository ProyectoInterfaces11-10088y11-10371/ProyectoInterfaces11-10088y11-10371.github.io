var booleano = false;

var b2 = false;
var b3 = false;

function changeImage400Wtts()
{ 
  if (!b2){
    var img = document.getElementById("image");
    var img2 = document.getElementById("showexpense");
    img.src = "assets/10dollars.png";
    img2.src = "assets/ltsbutton.png";
    img.id = "tendollars";
    img2.id = "ltsbutton";
    b2 = true;
  } else {
    var img = document.getElementById("tendollars");
    var img2 = document.getElementById("ltsbutton");
    img.src = "assets/400wtts.png";
    img2.src = "assets/dollarbutton.png";
    img.id = "image";
    img2.id = "showexpense";
    b2 = false;
  }
}

function changeImage5000Wtts()
{ 
  if (!b3){
    var img = document.getElementById("image");
    var img2 = document.getElementById("showexpense");
    img.src = "assets/10dollars.png";
    img2.src = "assets/ltsbutton.png";
    img.id = "tendollars";
    img2.id = "ltsbutton";
    b3 = true;
  } else {
    var img = document.getElementById("tendollars");
    var img2 = document.getElementById("ltsbutton");
    img.src = "assets/5000wtts.png";
    img2.src = "assets/dollarbutton.png";
    img.id = "image";
    img2.id = "showexpense";
    b2 = false;
  }
}

function changeImageWttsLtsDlrs()
{
  if (!booleano) {
    var img = document.getElementById("wttslts");
    var img2 = document.getElementById("showexpense");

    img.src = "assets/10dolaresGrande.png";
    img2.src = "assets/ltsbutton.png";
    img.id = "diezdolares";
    img2.id = "ltsbutton";
    booleano = true;
  } else {
    var img = document.getElementById("diezdolares");
    var img2 = document.getElementById("ltsbutton");

    img.src = "assets/400wtts10lts.png";
    img2.src = "assets/dollarbutton.png";
    img.id = "wttslts";
    img2.id = "showexpense";
    booleano = false;
  }
}

function pestañaLavaplatos()
{
  var img = document.getElementById("lavaplatosPestaña");
  var img2 = document.getElementById("lavavajillasPestaña");
  var but = document.getElementById("botonPestañaLV");
  img.src = "assets/lavaplatospestaña2.png";
  img2.src = "assets/lavavajillaspestaña2.png";
  img2.id = "lavavajillasPestaña2";
  img.id = "lavaplatosPestaña2";
  but.id = "botonPestañaLV2";
}

function pestañaLavavajillas()
{
  var img = document.getElementById("lavaplatosPestaña2");
  var img2 = document.getElementById("lavavajillasPestaña2");
  var but = document.getElementById("botonPestañaLV2");
  img.src = "assets/lavaplatospestaña.png";
  img2.src = "assets/lavavajillaspestaña.png";
  img2.id = "lavavajillasPestaña";
  img.id = "lavaplatosPestaña";
  but.id = "botonPestañaLV";
}

function pestañaReciclaje()
{
  var img = document.getElementById("reciclajePestaña");
  var img2 = document.getElementById("basuraPestaña");
  var but = document.getElementById("botonPestañaB");
  var con = document.getElementById("graficabasura");
  img.src = "assets/reciclajepestaña2.png";
  img2.src = "assets/basurapestaña2.png";
  img2.id = "basuraPestaña2";
  img.id = "reciclajePestaña2";
  but.id = "botonPestañaB2";
  con.src = "assets/graficareciclaje.png";
  con.id = "graficareciclaje";
}

function pestañaBasura()
{
  var img = document.getElementById("reciclajePestaña2");
  var img2 = document.getElementById("basuraPestaña2");
  var but = document.getElementById("botonPestañaB2");
  var con = document.getElementById("graficareciclaje");
  img.src = "assets/reciclajepestaña.png";
  img2.src = "assets/basurapestaña.png";
  img2.id = "basuraPestaña";
  img.id = "reciclajePestaña";
  but.id = "basuraPestañaLV";
  con.id = "graficabasura";
  con.src = "assets/graficabasura.png";
}
