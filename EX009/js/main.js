var form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', cadastrar)

function cadastrar() {
    let regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/
    if (regex.test(cpf.value)){
        alert('reservar realizada!')
    }
}

function maskCpf() {
    if (cpf.value.length == 3 || cpf.value.length == 7)
        cpf.value += '.'
    else if (cpf.value.length == 11)
        cpf.value += '-'
}

function validateCpf() {
    const notification = document.createElement('span');
    notification.innerText = 'CPF inválido';
    notification.style.color = 'red';
    notification.id = "notificationCPF"
    notification.style.display = 'block';

    var regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/
    if (!regex.test(cpf.value)){
        if (!document.querySelector('#notificationCPF'))
            cpf.insertAdjacentHTML('afterend', notification.outerHTML);
    } else {
        const notification = document.querySelector('#notificationCPF')
        if(notification){
            notification.remove();
        }
    }

}

var cpf = document.querySelector('#cpf')
cpf.addEventListener('keyup', maskCpf)
cpf.addEventListener('focusout', validateCpf)