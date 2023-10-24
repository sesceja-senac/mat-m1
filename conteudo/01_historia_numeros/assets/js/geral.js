// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function () {
  let caixa = $(this).prev()
  if (caixa.hasClass('aberta')) {
    caixa.removeClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_mais2.png")')
  } else {
    caixa.addClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_menos2.png")')
  }
})


//---- Troca de BGs conforme página ----\\
jQuery("document").ready(function($){

  var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);

  //alert('Página: '+pg_number);

  if(pg_number == 1){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_laranja.png'), linear-gradient(#EAC18F, #D3974F)";
  }else if(pg_number == 2){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_verde.png'), linear-gradient(#7DDFE2, #004F53)";
  }else if(pg_number == 3){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_laranja.png'), linear-gradient(#D3974F, #EAC18F)";
  }else if(pg_number == 4){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_verde.png'), linear-gradient(#004F53, #7DDFE2)";
  }

});