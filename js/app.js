var palpite = document.querySelector('#palpite');

var botao = document.querySelector('#rsp');

botao.addEventListener('click',function(){
    var resp = palpite.value
    var trema = window.navigator.vibrate(200);

});