
let regexCEP = /^[0-9]{5}-?[0-9]{3}$/;
let cep = document.getElementById("cep")

function printa(txt, clear=false){
    let box = document.getElementById("resp");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}

function validaCep(cep) {

    if (regexCEP.test(cep.value)) {
        printa("CEP válido", true)
    }else{
        printa("CEP inválido", true)
    }
    
    
}
