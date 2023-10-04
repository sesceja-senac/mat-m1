function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".wrapper").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

$(document).ready(function () {
    resizeBodyConteudo()
    $(window).resize(function () {
        resizeBodyConteudo()
    })

});

$('.btn-voltar').click(function(){
    $('.conteudo').fadeOut()
    $('.inicio').fadeIn()
    $('.bg').css('animation', 'return 2.5s forwards')
})

$('.left').click(function(){
    $('.inicio').fadeOut()
    if($('.bg').hasClass('active')){
        $('.bg').css('animation', 'init 2.5s forwards')
    } else {
        $('.bg').addClass('active')
    }
    window.setTimeout(function(){$('.conteudo').fadeIn()}, 2750)
    window.setTimeout(function(){
        $('.modal-btn-1').fadeIn()
    }, 3250)
    window.setTimeout(function(){
        $('.modal-btn-2').fadeIn()
    }, 3500)
    window.setTimeout(function(){
        $('.modal-btn-3').fadeIn()
    }, 3750)
    window.setTimeout(function(){
        $('.btn-voltar').fadeIn()
    }, 3750)
})
$('.right').click(function(){
    $('.wrapper').css('background-position-x', '0%')
})