let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(idElemento, texto) {
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);

    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;    
}

asignarTextoElemento('titulo','Juego del número secreto actualizado');
asignarTextoElemento('ingresaNumero','Indica un número del 1 al 10');
