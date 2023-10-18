function calcular(){
    var num = document.getElementById('num').value
    var resultado = document.getElementById('resultado')

    resultado.innerText = 'O exponencial é: '

    var exponencial = exp(num)

    resultado.innerText += exponencial
}

function exp(n){
    return n * n
}