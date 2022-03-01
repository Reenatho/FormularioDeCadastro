const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
});


function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === ""){
        setErrorFor(username, 'O nome de usuário é obrigatório')
    } else{
        setSucessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, 'O email é obrigatório')
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Digite um e-mail válido')
    }else{
        setSucessFor(email)
    }

    if(passwordValue == '' ){
        setErrorFor(password, 'A senha é obrigatória.')
    }else if(passwordValue.length <= 7){
        setErrorFor(password, 'A senha deve ter no mínimo 8 caracteres')
    }else{
        setSucessFor(password)
    }

    if(passwordConfirmationValue === '' ){
        setErrorFor(passwordConfirmation, 'Repita sua senha')
    }else if(passwordValue != passwordConfirmationValue){
        setErrorFor(passwordConfirmation, 'As senhas digitadas não são iguais')
    }else{
        setSucessFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === 'form-control sucess';
    })
    if (formIsValid){
        console.log (usernameValue, emailValue, passwordValue, passwordConfirmationValue) 
    }
};

function setErrorFor(input, mensagem){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar mensagem de erro
    small.innerText = mensagem;

    //Adicionar a classe de erro
    formControl.className = 'form-control error';
}

function setSucessFor(input){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = 'form-control sucess'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}