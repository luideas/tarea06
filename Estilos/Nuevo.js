function validausuario(){
    var usuario = document.getElementById("alias").value;
    var psw = document.getElementById("psw").value;
    var mensaje = document.getElementById("msgvalidacion");

    if((usuario=="luis") && (psw=="12345")){

        window.location="index2.html";
    }

    else{
        mensaje.innerText = "Usuario o Contraseña Incorrecta";
    } 
}

var cont=0;
function ingresaDato(){
    cont = cont+1;

    var dato = document.getElementById("dato").value;
    var mensaje = document.getElementById("variable");

    var tabla = document.getElementById("tabla-de-datos");
    var fila = tabla.insertRow(0);
    var celda = fila.insertCell(0);
    var nuevoDato = document.createTextNode(dato);
    celda.appendChild(nuevoDato);

    if (cont == 1){
        mensaje.innerText = "";
        mensaje.innerText = "Ingresa tu correo";
        // document.getElementById("dato").value = "";
    }
    if (cont == 2){
        mensaje.innerText = "";
        mensaje.innerText = "Ingresa tu movil";
        // document.getElementById("dato").value = "";
    }
    if (cont == 3){
        mensaje.innerText = "";
        mensaje.innerText = "Nombre siguiente usuario";
        cont = 0;
    }
    document.getElementById("dato").value = "";
}
