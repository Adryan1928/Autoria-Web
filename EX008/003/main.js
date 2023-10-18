function calcular(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var resultado = document.getElementById('resultado')
    resultado.innerText = 'O maior número é: '

    if (parseInt(num1) > parseInt(num2))
        resultado.innerText += num1
    else
        resultado.innerText += num2
}