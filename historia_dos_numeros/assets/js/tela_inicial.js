$('.backdrop').hide()
//localStorage.clear();
if(localStorage.getItem('video-intro')!=='true'){    
    $('.backdrop').fadeIn()
}
$('.btn-video').click(function(){
    $('.backdrop').fadeIn()
})
$('.fechar').click(function(){
    $('.backdrop').fadeOut()
    $(".backdrop iframe").attr("src", $(".backdrop iframe").attr("src"));
    localStorage.setItem('video-intro', 'true')
})