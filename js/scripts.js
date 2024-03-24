const inputName = document.querySelector("#name");

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
