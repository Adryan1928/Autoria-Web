function calcular(){
    var num = document.getElementsByClassName('num')
    var resultado = document.getElementById('resultado')

    resultado.innerText = 'A lista é: '

    var lista = exp(num)

    resultado.innerText += lista
}

function exp(n){
    var lista = []

    for (i of n) {
        if (parseInt(i.value) % 2 == 0) {
            lista.push('Par')
        } else {
            lista.push('Impar')
        }
    }

    return lista
}