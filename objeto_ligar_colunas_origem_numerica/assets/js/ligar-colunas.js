var erro = new Audio("/assets/audio/erro.mp3");
var acerto = new Audio("/assets/audio/acerto.mp3");
var botaoClicado = false;
var botaoRespClicado = false;

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
    if (proporcao1920 < Number(0.56)) {
        proporcao1920 = "0.55";
        $(".crop").addClass("mobile")
    } else {
        $(".crop").removeClass("mobile")
    }
    $(".conteudo").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "top center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

function controleResize() {
    const screenWidth = $(window).width();
    const $element = $('#origem-numeros');

    if (screenWidth <= 700) {
        $element.removeClass('conteudo');
    } else {
        $element.addClass('conteudo');
    }
}

$(document).ready(function () {
    resizeBodyConteudo();
    // controleResize();

    $(window).on('load resize', function () {
        resizeBodyConteudo();
        // controleResize();
    });
});

$(document).ready(function () {

    $(".resp, .item").click(function () {
        $(this).toggleClass("selecionado");

        if ($(".selecionado").length == 2) {
            var resp1 = $(".selecionado")[0].dataset.resp;
            var resp2 = $(".selecionado")[1].dataset.resp;


            if ($(".selecionado")[0].dataset.resp == $(".selecionado")[1].dataset.resp) {
                $(".selecionado .txtacao").text($(".selecionado")[0].dataset.resp)
            }

            if (resp1 == resp2) {
                $(".selecionado").prop("disabled", true).addClass("acertou");
                $(".selecionado").removeClass("selecionado");

                var question = getQuestionById(resp1);

                if (question) {
                    feedbackPositivo();
                    acerto.play();
                }


            } else {
                $(".selecionado").removeClass("selecionado");

                var question1 = getQuestionById(resp1);
                var question2 = getQuestionById(resp2);

                if (question1 && question2) {
                    feedbackNegativo();
                    erro.play();
                }
            }
        }

        function feedbackNegativo() {
            $("#feedback_errado_modal .modal-body p").text(question1.feedbacks.errado + " ");
            $("#feedback_errado_modal").modal("show");
        }

        function feedbackPositivo() {
            $("#feedback_certo_modal .modal-body p").text(question.feedbacks.certo);
            $("#feedback_certo_modal").modal("show");
        }
    });

    var questions = [{
            id: "1",
            feedbacks: {
                certo: "Parabéns, você acertou! Estes símbolos correspondem ao sistema egípcio.",
                errado: "Oops, resposta incorreta! Esses símbolos não correspondem a esse sistema numérico."
            }
        },
        {
            id: "2",
            feedbacks: {
                certo: "Parabéns, você acertou! Estes símbolos correspondem ao sistema maia.",
                errado: "Oops, resposta incorreta! Esses símbolos não correspondem a esse sistema numérico."
            }
        },
        {
            id: "3",
            feedbacks: {
                certo: "Parabéns, você acertou! Estes símbolos correspondem ao sistema babilônico.",
                errado: "Oops, resposta incorreta! Esses símbolos não correspondem a esse sistema numérico."
            }
        },
        {
            id: "4",
            feedbacks: {
                certo: "Parabéns, você acertou! Estes símbolos correspondem ao sistema romano.",
                errado: "Oops, resposta incorreta! Esses símbolos não correspondem a esse sistema numérico."
            }
        },
        {
            id: "5",
            feedbacks: {
                certo: "Parabéns, você acertou! Estes símbolos correspondem ao sistema hindu-arábico.",
                errado: "Oops, resposta incorreta! Esses símbolos não correspondem a esse sistema numérico."
            }
        }

    ];

    function getQuestionById(id) {
        return questions.find(question => question.id === id);
    }

});

$(document).ready(function () {

    $('.btn.item').click(function () {
        botaoClicado = $(this).attr("data-resp");
        verificarEstadoBotoes();
    });

    $('.btn.resp').click(function () {
        botaoRespClicado = $(this).attr("data-resp");
        verificarEstadoBotoes();
    });


    function verificarEstadoBotoes() {
        console.log(botaoClicado + "," + botaoRespClicado)
        if (botaoClicado !== false && botaoRespClicado !== false) {
            if (botaoClicado === botaoRespClicado) {
                $('#linha' + botaoClicado).removeClass('d-none');
            }
            botaoClicado = false;
            botaoRespClicado = false;
        }

    }

});
