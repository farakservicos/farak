function buscar(){
    var cod = window.document.getElementById('cod')
    var resul = window.document.getElementById('resul')
    if(cod.value =='285BA' || cod.value =='285ba'){
        resul.innerHTML += '<br> <a class="btn btn-primary" href="bem-vindo.html">Entrar</a>'
    }else{
        alert('Usuário não encontrado! ')
    }
}