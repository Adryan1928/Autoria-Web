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
        if (i.value[0] == 'A' || i.value[0] =='a') {
            lista.push(i.value)
        }
    }

    return lista
}