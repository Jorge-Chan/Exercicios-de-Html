let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensaem = document.querySelector('#mensagem')



function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {

        txt.innerHTML = "Nome Inválido!"
        txt.style.color = "red"

    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"

    }
}
function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensaem.value.length >=100){
        txtMensagem.innerHTML = "A mensagem é muito grande no máximo 100 caracteres!"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
    }
}