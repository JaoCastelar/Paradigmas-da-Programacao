
let regexCEP = /^[0-9]{5}-?[0-9]{3}$/;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let entradaCep = document.getElementById("cep");
let entradaEmail = document.getElementById("email");

function printa(txt, clear=false){
    let box = document.getElementById("resp");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}

function validaCep() {

    let cep = entradaCep.value;

    if (regexCEP.test(cep)) {
        printa("CEP válido.", true);
    }else{
        if(cep == ""){
            printa("**CEP não pode ser vazio.", true)
        }else {
            printa("*CEP inválido.", true);
        }
        
    }

}
function validaEmail() {

    let email = entradaEmail.value;

    if (regexEmail.test(email)) {
        printa("Email válido");
    }else {
        if(email == ""){
            printa("**Email não pode ser vazio.")
        }else {
            printa("*Email inválido");
        }
        
    }

}

function validar() {

    validaCep();
    validaEmail();

}
