// 001
function EX001(){
    var num = 10
    console.log('Dobro: '+num * 2)
    console.log('Metade: '+num/2)
}
EX001()
// FIM 001

console.log('----------------------------------------------')

// 002
function EX002(){
    var num = 5
    var msg =''

    for (let i = 1 ; i <= 10 ; i++){
        msg += `${num} X ${i} = ${num * i} \n`
    }

    console.log(msg)
}
EX002()
// FIM 002

console.log('----------------------------------------------')

// 003
function EX003(){
    var num1 = 10
    var num2 = 12

    if (num1 > num2)
        console.log('O maior número é: '+num1)
    else
        console.log('O maior número é: '+num2)
}
EX003()
// FIM 003

console.log('----------------------------------------------')

// 004
function EX004() {
    var mes = 4
    var dia = 7

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

    console.log(msg)
}
EX004()
// FIM 004

console.log('----------------------------------------------')

// 005
console.log('A questão 5 foi anulada')
// FIM 005

console.log('----------------------------------------------')

// 006
function EX006(){
    var lista = [1,2,3,4,5,10,8,56]
    var total = 0

    for (i of lista) {
        total += i
    }

    console.log('A soma é: '+total)
}
EX006()
// FIM 006

console.log('----------------------------------------------')

// 007
function EX007(){
    var lista = [1,2,3,4,5,10,8,56]
    var resultado = []

    for (i of lista) {
        if (i % 2 == 0) {
            resultado.push('Par')
        } else {
            resultado.push('Impar')
        }
    }

    console.log('O resultado é: '+resultado)
}
EX007()
// FIM 007

console.log('----------------------------------------------')

// 008
function EX008(){
    var lista = ['Adryan', 'Eryk', 'De', 'Oliveira', 'Leite', 'adr']
    var resultado = []

    for (i of lista) {
        if (i[0] == 'A' || i[0] =='a') {
            resultado.push(i)
        }
    }

    console.log('Os nomes que começam com A: '+resultado)
}
EX008()
// FIM 008