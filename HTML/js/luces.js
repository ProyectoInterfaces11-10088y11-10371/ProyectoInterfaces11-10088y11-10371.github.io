function EncenderApagar(obj,nombre)
    {
      if ( obj.className.match(/(?:^|\s)estadoApagado(?!\S)/) ){

        obj.className= "estadoEncendido"
        var nombre = obj.innerHTML
        var res = nombre.replace("Apagado", "Encendido"); 
        obj.innerHTML = res;

      }
      else{

        obj.className="estadoApagado"
        var nombre = obj.innerHTML
        var res = nombre.replace("Encendido", "Apagado");
        obj.innerHTML = res;
      }

      return false;
    }
