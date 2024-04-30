const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputcelular = document.querySelector("#celular");
const inputaniversario = document.querySelector("#aniversario")
const inputCPF = document.querySelector("#CPF")
const formulario = document.getElementById('meuForm');


inputName.addEventListener("paste",function() {
    setTimeout(function() {
        const rgx = /^[a-zA-Z\s]*$/;
        if(!rgx.test(inputName)){
            inputName.value = "";
        }
    }, 300);

});

inputName.addEventListener("input", function(){
    setTimeout(function() {
        const rgx = /[^a-zA-ZÀ-ú\s]/g;
        let novoNome = inputName.value.replace(rgx, '');
        inputName.value = novoNome;
    });
});

//impede que o input nome seja enviado vazio
formulario.addEventListener("submit", function(e){
    const rgxemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const rgxcelular = /^\(\d{2}\)\d{5}-\d{4}$/;
    //const rgxdata = /^\d{2}\/\d{2}\/\d{4}$/;
    const rgxcpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
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
    // if(!rgxdata.test(inputaniversario.value)){
    //     inputaniversario.style.border = '2px solid red';
    //     console.log("Data inválida")
    //     e.preventDefault();
    // }
    if(!rgxcpf.test(inputCPF.value)){
        inputCPF.style.border = '2px solid red';
        console.log("CPF inválido")
        e.preventDefault();
    }
});