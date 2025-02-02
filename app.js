let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoJuegos = 3;
let numeroJuegos = 0;

function asignarTextoElemento(idElemento, texto) {
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('mensaje', `Acertaste el número en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        document.getElementById('intentar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');        
    } else {
        // El usuario no acertó
        if (numeroSecreto < numeroDeUsuario) {
            asignarTextoElemento('mensaje', 'El número secreto es menor');
        } else {
            asignarTextoElemento('mensaje', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    if (numeroJuegos == numeroMaximoJuegos) {
        asignarTextoElemento('mensaje', 'El número de juegos ha superado el máximo permitido');
    } else {
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('mensaje', 'Se sortearon todos los numeros');
        } else {
            let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
            console.log(numeroSecreto);
            if (listaNumerosSorteados.includes(numeroSecreto)) {
                return generarNumeroSecreto();
            } else {
                console.log(listaNumerosSorteados);
                listaNumerosSorteados.push(numeroSecreto);
                return numeroSecreto;
            }
        }       
    }

}

function condicionesIniciales() {
    asignarTextoElemento('titulo','Juego del número secreto actualizado');
    asignarTextoElemento('mensaje',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    numeroJuegos++;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Mostrar el mensaje que indica que se debe ingresar un número entre un numero menor y uno mayor
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desactivar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();

