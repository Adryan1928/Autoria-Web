function calcular(){
    var num = document.getElementById('num').value
    var dobro = document.getElementById('dobro')
    var metade = document.getElementById('metade')
    dobro.innerText = 'Dobro: '
    metade.innerText = 'Metade: '
    dobro.innerText += num * 2
    metade.innerText += num/2
}