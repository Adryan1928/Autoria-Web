function calcular(){
    var num = document.getElementsByClassName('num')
    var resultado = document.getElementById('resultado')

    resultado.innerText = 'A soma é: '

    var soma = exp(num)

    resultado.innerText += soma
}

function exp(n){
    var total = 0

    for (i of n) {
        total += parseInt(i.value)
    }

    return total
}