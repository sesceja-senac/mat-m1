// $('.backdrop').hide()
//localStorage.clear();
$(document).ready(function() {

// if(localStorage.getItem('a-video-intro')!=='true'){    
    $('.backdrop').fadeIn()
// }
$('.btn-video').click(function(){
    $('.backdrop').fadeIn()
})
$('.fechar').click(function(){
    $('.backdrop').fadeOut()
    $(".backdrop iframe").attr("src", $(".backdrop iframe").attr("src"));
    localStorage.setItem('matm1e1-video-intro', 'true')
})

});
  