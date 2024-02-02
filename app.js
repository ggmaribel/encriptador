// Requisitos:
// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

function mensajeInicial(mensaje) {
    return mensaje.replace(/[^\w\s]/gi, '').replace(/[0-9]/gi, '').toLowerCase();
}

// Encriptar texto
function encriptar() {
    const mensaje = mensajeInicial(document.getElementById('mensaje').value);
    let encriptado = mensaje.replace(/e/gi, 'enter');
    encriptado = encriptado.replace(/i/gi, 'imes');
    encriptado = encriptado.replace(/a/gi, 'ai');
    encriptado = encriptado.replace(/o/gi, 'ober');
    encriptado = encriptado.replace(/u/gi, 'ufat');

    document.getElementById('texto').value = encriptado;
}

// Desencriptar texto
function desencriptar() {
    const mensaje = mensajeInicial(document.getElementById('mensaje').value);
    let desencriptado = mensaje.replace(/enter/gi, 'e');
    desencriptado = desencriptado.replace(/imes/gi, 'i');
    desencriptado = desencriptado.replace(/ai/gi, 'a');
    desencriptado = desencriptado.replace(/ober/gi, 'o');
    desencriptado = desencriptado.replace(/ufat/gi, 'u');

    document.getElementById('texto').value = desencriptado;
}

// Copiar Texto
function copiarTexto() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select(); 
    document.execCommand('copy');
    alert("Texto copiado: " + textoCopiado.value);
    }

document.getElementById('btn-encriptar').addEventListener('click', encriptar);
document.getElementById('btn-desencriptar').addEventListener('click', desencriptar);
document.getElementById('btn-copiar').addEventListener('click', copiarTexto);