// $('.backdrop').hide()
//localStorage.clear();
// $('#modal-video').fadeIn()

$(document).ready(function() {

    // if(localStorage.getItem('a-video-intro')!=='true'){    
    //     $('#modal-video').fadeIn()

    // }
    
    $('#modal-video').fadeIn();
    $('.btn-video').click(function(){
        $('#modal-video').fadeIn()
    })
    $('.fechar').click(function(){
        // $('#modal-video').fadeOut()
        // $("#modal-video iframe").attr("src", $("iframe").attr("src"));
        // localStorage.setItem('matm1e1-video-intro', 'true')
    })

});
  