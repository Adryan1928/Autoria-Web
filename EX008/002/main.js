function calcular(){
    var num = document.getElementById('num').value
    var taboada = document.getElementById('taboada')
    var msg = ``

    for (let i = 1 ; i <= 10 ; i++){
        msg += `${num} X ${i} = ${num * i} \n`
    }

    taboada.innerText = msg
}