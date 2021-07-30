$(function(){
    let menu = document.querySelector('.menu');
    let mobile = document.querySelector('.mobile');
    $(mobile).click(function(e){
        $(menu).toggleClass('open');
    });
})