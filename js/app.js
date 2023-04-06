// Variables para seleccionar elementos del DOM
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const botonEncriptar = document.querySelector("#Encriptar");
const botonDesencriptar = document.querySelector("#Desencriptar");
const botonCopiar = document.querySelector("#copiar");
const imagenMuñeco = document.querySelector("#imagen-muñeco");
const textoOutput = document.querySelector("#texto-output");
const containerOutput = document.querySelector(".container-output");
const divOutput = document.querySelector("#espacio-output");

// Función para encriptar el texto
const encriptarTexto = () => {
    let texto = input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    cambiarPantalla(texto);
};

// Función para desencriptar el texto
const desencriptarTexto = () => {
    let texto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    cambiarPantalla(texto);
};

// Función para cambiar la pantalla
const cambiarPantalla = (texto) => {
    cambiarEstilos();
    output.value = texto;
};

// Función para cambiar los estilos
const cambiarEstilos = () => {
    output.rows = "10";
    botonCopiar.style.display = "block";
    containerOutput.style.justifyContent = "normal";
    divOutput.style.width = "100%";
    imagenMuñeco.style.display = "none";
    textoOutput.style.display = "none";
};

// Función para copiar el texto al portapapeles
const copiarTexto = () => {
    output.select();
    document.execCommand('copy');
};

// Función para verificar si el texto se encuentra escrito correctamente
const verificarTexto = (texto) => {
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toLowerCase();
        if (!/[a-z\s,.0-9]/.test(caracter)) {
            alert("No usar: tildes ni caracteres especiales");
            return false;
        }
    }
    return true;
};

// Función para codificar o decodificar el texto
const codificar = (accion) => {
    const texto = input.value.trim();
    if (!texto) {
        alert("Para encriptar necesita que escribas algo");
        return;
    }
    if (verificarTexto(texto)) {
        accion();
    } else {
        output.value = "El texto no se encuentra escrito correctamente";
    }
};

// Event listeners
botonEncriptar.addEventListener("click", () => {
    codificar(encriptarTexto);
});

botonDesencriptar.addEventListener("click", () => {
    codificar(desencriptarTexto);
});

botonCopiar.addEventListener("click", () => {
    if (output.value) {
        copiarTexto();
    }
});

