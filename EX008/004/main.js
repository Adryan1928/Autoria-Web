function calcular(){
    var num = document.getElementById('num').value
    var resultado = document.getElementById('resultado')
    var date = num.split('-')
    var mes = parseInt(date[1])
    var dia = parseInt(date[2])

    var msg = 'A estação do ano é: '

    // Outono
    if (mes == 3 && dia >= 21){
        msg += 'Outono'
    } else if (mes == 6 && dia <= 21){
        msg += 'Outono'
    } else if (mes == 4 || mes == 5){
        msg += 'Outono'
    }

    // Inverno
    if (mes == 6 && dia > 21){
        msg += 'Inverno'
    } else if (mes == 9 && dia <= 23){
        msg += 'Inverno'
    } else if (mes == 7 || mes == 8){
        msg += 'Inverno'
    }

    // Primavera
    if (mes == 9 && dia > 23){
        msg += 'Primavera'
    } else if (mes == 12 && dia <= 21){
        msg += 'Primavera'
    } else if (mes == 10 || mes == 11){
        msg += 'Primavera'
    }

    // Verão
    if (mes == 12 && dia > 21){
        msg += 'Verão'
    } else if (mes == 3 && dia < 21){
        msg += 'Verão'
    } else if (mes == 1 || mes == 2){
        msg += 'Verão'
    }

    resultado.innerText = msg
}