const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputcelular = document.querySelector("#celular");
const inputaniversario = document.querySelector("#aniversario")
const inputCPF = document.querySelector("#CPF")
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
    const rgxcelular = new RegExp("^\(\d{2}\)\d{9}$/");
    const rgxdata = new RegExp("^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(19|20)\d{2}$/");
    const rgxcpf = new RegExp("/^\d{11}$/");
    if(inputName.value === ''){
        inputName.style.border = '2px solid red';
        console.log("Nome inválido")
        e.preventDefault();
    };
    if(!rgxemail.test(inputEmail.value)){
        inputEmail.style.border = '2px solid red';
        console.log("Email inválido")
        e.preventDefault();
    };
    if(!rgxcelular.test(inputcelular.value)){
        inputcelular.style.border = '2px solid red';
        console.log("Celular inválido")
        e.preventDefault();
    }
    if(!rgxdata.test(inputaniversario.value)){
        inputaniversario.style.border = '2px solid red';
        console.log("Data inválida")
        e.preventDefault();
    }
    if(!rgxcpf.test(inputCPF.value)){
        inputCPF.style.border = '2px solid red';
        console.log("CPF inválido")
        e.preventDefault();
    }
});