const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassoword();
} )

// Função para inserir bordas vermelhas e texto de erro
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

// Função para remover os erros
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

// Validando nome de usuário
function nameValidate(){
    if(campos[0].value.length <3){
        setError(0);

    }
    else{
        removeError(0);
    }
}

// Validando e-mail
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);

    }
    else{
        removeError(1);
    }
}

//Validando senha
function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setError(2);

    }
    else{
        removeError(2);
        comparePassoword();
    }
}

function comparePassoword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3);
    }
    else{
        setError(3);
    }
}