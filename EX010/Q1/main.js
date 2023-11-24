function mudarTexto(){
    let campo = document.getElementById('titulo')

    if (campo.innerHTML == 'Seja bem vindo')
        campo.innerHTML = 'A mágica continua!'
    else
        campo.innerHTML = 'Seja bem vindo'
}