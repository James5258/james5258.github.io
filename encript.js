//poner la imagen de ningun mensaje de un inicio y esconder los cuadros de textos e y d

if (texto=" "){
    document.getElementById("texto-e").style.display = "none";
    document.getElementById("texto-d").style.display = "none";
    document.getElementById("cuadromensaje").style.display = "block";
}

// funciones para mostrar el mensaje encriptado o desencriptado y esconder la imagen de ningun mensaje

function textoenc() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("texto-e").innerHTML = textoEncriptado;
    document.getElementById("texto-e").style.display = "block";
    document.getElementById("texto-d").style.display = "none";
    document.getElementById("cuadromensaje").style.display = "none";
}

function textodes() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("texto-d").innerHTML = textoDesencriptado;
    document.getElementById("texto-d").style.display = "block";
    document.getElementById("texto-e").style.display = "none";
    document.getElementById("cuadromensaje").style.display = "none";
}

//boton para copiar el texto desencriptado o encriptado

function copi(){
    let copiartexto="";
    if (document.getElementById("texto-e").style.display === "block") {
        copiartexto=document.getElementById("texto-e").innerText;} else if 
    (document.getElementById("texto-d").style.display === "block") 
    {copiartexto=document.getElementById("texto-d").innerText;
    }
    const temp = document.createElement('textarea');
    temp.value = copiartexto;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
}


//funcion de encriptar e descencriptar


function encriptar(texto){
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');

    }

function desencriptar(texto){
    return texto.replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

    }
