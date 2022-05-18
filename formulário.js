
function validar(){
    if(document.form.nome.value == ""){

   
        alert('preencha o campo NOME')
        return false; 
}
if(document.form.email.value.indexOf('@') == -1){
    alert('preencha o camnpo e-mail corretamente')
    return false;
}
if (document.form.email.value.indexOf('.') == -1){
    return false;
}
if (document.form.senha.value.indexOf('.') == -1){
    return false;
}
if (document.form.mensagem.value == ""){
    alert('preencha o campo ,menssagem ');
    return false;

}
if(document.form.mensagem.value.length <10){
    alert('você precisa digitar pelo menos 20 caracteres')
    return false;

    
}
if(document.form.mensagem.value.length <10){
    alert('sua senha precu=isa ter pelo menos 20 caracteres')
    return false;
}
}

