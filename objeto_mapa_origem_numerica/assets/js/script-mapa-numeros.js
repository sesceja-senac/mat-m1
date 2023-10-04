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

    $(".conteudo").css({
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

    const hoverImagens = {
        'totem-babilonia': 'assets/img/totem-babilonia-hover.png',
        'totem-egito': 'assets/img/totem-egito-hover.png',
        'totem-maia': 'assets/img/totem-maia-hover.png',
        'totem-romano': 'assets/img/totem-romano-hover.png',
    };


    $('.imagem-sobreposta').mouseenter(function () {
        const buttonClass = $(this).attr('class').split(' ')[1];


        $(this).find('img').attr('src', hoverImagens[buttonClass]);
    });


    $('.imagem-sobreposta').mouseleave(function () {

        const buttonClass = $(this).attr('class').split(' ')[1];


        $(this).find('img').attr('src', `assets/img/${buttonClass}.png`);
    });

});