const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputcelular = document.querySelector("#celular");
const formulario = document.getElementById('meuForm');


inputName.addEventListener("paste",function() {
    setTimeout(function() {
        const rgx = new RegExp("^[a-zA-Z\b]+$");
        if(!rgx.test(inputName)){
            inputName.value = "";
        }
    }, 300);

});

inputName.addEventListener("keypress", function(){
    setTimeout(function() {
        const rgx = new RegExp("[^a-zA-ZÀ-ú]", "g");
        let novoNome = inputName.value.replace(rgx, '');
        inputName.value = novoNome;
    });
});

//impede que o input nome seja enviado vazio
formulario.addEventListener("submit", function(e){
    const rgxemail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    const rgxcelular = /^\(\d{2}\)\d{9}$/;
    const rgxdata = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(19|20)\d{2}$/;
    const rgxcpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(inputName.value === ''){
        alert('Por favor, preencha o campo Nome Completo');
        e.preventDefault();
    };
    if(!rgxemail.test(inputEmail.value)){
        alert('Email inválido, preencha novamente');
        e.preventDefault();
    };
    if(!rgxcelular.test(inputcelular.value)){
        alert('Número de celular inválido, preencha novamente');
        e.preventDefault();
    }
    if(!rgxdata.test(inputDataNascimento.value)){
        alert('Data de nascimento inválida, preencha novamente');
        e.preventDefault();
    }
    if(!rgxcpf.test(inputCPF.value)){
        alert('CPF inválido, preencha novamente');
        e.preventDefault();
    }
});