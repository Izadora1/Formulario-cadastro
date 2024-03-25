const inputName = document.querySelector("#name");
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
    if(inputName.value === ''){
        alert('Por favor, preencha o campo Nome Completo');
        e.preventDefault();
    }
});