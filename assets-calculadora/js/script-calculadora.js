$(document).ready(function () {
    calculadoraOda();
    audioClick();

    $('[data-value="radic"]').click(function () {
        $('[name="resultado"]').val($('[name="resultado"]').val() + "√");
    });

    $('[data-value="x^2"]').click(function () {
        $('[name="resultado"]').val($('[name="resultado"]').val() + "²");
    });

});


function limparExpressao() {
    const $ceButton = $('.som-clique[data-value="ce"]');
    $ceButton.click();
}

const limpa = function () {
    limparExpressao();
}

function abreModalNegativa() {
    $('#modalErroCalculo').modal('show');
    setTimeout(limpa, 1000);
}

function acertoUm() {
    const $minhaImagem = $('#calc1');
    const imgAcerto = '../../assets-calculadora/img/acerto-potencia2.png';
    const $proximaQuestao = $('#calc2');
    const imagemNovaQuestao = '../../assets-calculadora/img/potencia3.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoDois() {
    const $minhaImagem = $('#calc2');
    const imgAcerto = '../../assets-calculadora/img/acerto-potencia3.png';
    const $proximaQuestao = $('#calc3');
    const imagemNovaQuestao = '../../assets-calculadora/img/potencia15.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoTres() {
    const $minhaImagem = $('#calc3');
    const imgAcerto = '../../assets-calculadora/img/acerto-potencia15.png';
    const $proximaQuestao = $('#calc4');
    const imagemNovaQuestao = '../../assets-calculadora/img/potencia11.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoQuatro() {
    const $minhaImagem = $('#calc4');
    const imgAcerto = '../../assets-calculadora/img/acerto-potencia11.png';
    const $proximaQuestao = $('#calc5');
    const imagemNovaQuestao = '../../assets-calculadora/img/raiz121.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoCinco() {
    const $minhaImagem = $('#calc5');
    const imgAcerto = '../../assets-calculadora/img/acerto-raiz121.png';
    const $proximaQuestao = $('#calc6');
    const imagemNovaQuestao = '../../assets-calculadora/img/raiz625.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoSeis() {
    const $minhaImagem = $('#calc6');
    const imgAcerto = '../../assets-calculadora/img/acerto-raiz625.png';
    const $proximaQuestao = $('#calc7');
    const imagemNovaQuestao = '../../assets-calculadora/img/raiz441.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoSete() {
    const $minhaImagem = $('#calc7');
    const imgAcerto = '../../assets-calculadora/img/acerto-raiz441.png';
    const $proximaQuestao = $('#calc8');
    const imagemNovaQuestao = '../../assets-calculadora/img/raiz900.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    abreQuestao($proximaQuestao, imagemNovaQuestao);
    limparExpressao();
    removeAnimacao($minhaImagem);
    adicionaAnimacao($proximaQuestao);
    somNovaQuestao();
}

function acertoOito() {
    const $minhaImagem = $('#calc8');
    const imgAcerto = '../../assets-calculadora/img/acerto-raiz900.png';

    abreModalAcerto();
    adicionaResposta($minhaImagem, imgAcerto);
    removeAnimacao($minhaImagem);
    somNovaQuestao();
}

function somNovaQuestao() {
    $('#som-2')[0].play();
}

function audioClick() {
    $('.som-clique').on('click', function () {
        $('#som-1')[0].play();
    });
}

function abreModalAcerto() {
    $('#modalAcertoQuestao').modal('show');
}

function removeAnimacao($elemento) {
    $elemento.removeClass('animacao');
}

function adicionaAnimacao($elemento) {
    $elemento.addClass('animacao');
}

function abreQuestao($proximaQuestao, imagemNovaQuestao) {
    $proximaQuestao.attr('src', imagemNovaQuestao);
}

function adicionaResposta($minhaImagem, imgAcerto) {
    $minhaImagem.attr('src', imgAcerto);
}

let clicouIgual = 0;

function calculadoraOda() {
    const $actions = $('.actions');
    const $ans = $('.ans');
    let expression = '';

    $actions.on('click', (e) => {
        const value = $(e.target).data('value');

        if (value !== undefined) {
            if (value === 'ce') {
                expression = '';
                $ans.val(0);
            } else if (value === 'x^2') {
                expression = square();
            } else if (value === 'radic') {
                expression = Math.sqrt(expression);
            } else if (value === 'log') {
                expression = Math.log(expression);
                abreModalNegativa();
            } else if (value === 'sin') {
                expression = Math.sin(expression);
                abreModalNegativa();
            } else if (value === 'cos') {
                expression = Math.cos(expression);
                abreModalNegativa();
            } else if (value === 'tan') {
                expression = Math.tan(expression);
                abreModalNegativa();
            } else if (value === '=') {
                clicouIgual += 1;
                try {
                    const answer = eval(expression);
                    expression = answer;
                    $ans.val(answer);


                    if (verificaAnswer(answer)) {
                        abreModalPositiva(answer);
                    } else {
                        abreModalNegativa();
                    }

                } catch (error) {
                    $ans.val('Erro');
                }
            } else {
                if (clicouIgual === 1) {
                    expression = value;
                    clicouIgual = 0;
                } else {
                    expression += "" + value + "";
                    clicouIgual = 0;
                }

                $ans.val(expression);
            }
        }
    });

    function square() {
        try {
            return eval(expression * expression);
        } catch (error) {
            return 'Erro';
        }
    }


    function verificaAnswer(answer) {
        return [32, 81, 225, 1331, 11, 25, 21, 30].includes(answer);
    }

    function abreModalPositiva(answer) {
        if (answer === 32) {
            acertoUm();
        } else if (answer === 81) {
            acertoDois();
        } else if (answer === 225) {
            acertoTres();
        } else if (answer === 1331) {
            acertoQuatro();
        } else if (answer === 11) {
            acertoCinco();
        } else if (answer === 25) {
            acertoSeis();
        } else if (answer === 21) {
            acertoSete();
        } else if (answer === 30) {
            acertoOito();
        }
    }
}