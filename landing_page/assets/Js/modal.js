$('.gallery_img').click(function(e){
    var img = e.target.src;
    var modal = 'div class="modal"><img class="modal_img" src=" '+ img +' "><div class="modal_boton" id="modal_botom">x</div></div>';
    $("body").append (modal);
    $('#modal_boton').click(function(){
      $('#modal').remove();
    })
})