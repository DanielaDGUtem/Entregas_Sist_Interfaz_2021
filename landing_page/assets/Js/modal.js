$('.gallery_img').click(function(e){
    var img = e.target.src;
    var modal = '<div class="modal" id="modal"><img class="modal_img" src=" '+ img +' "><div class="modal_boton" id="modal_boton">X</div></div>';
    $("body").append (modal);
    $('#modal_boton').click(function(){
      $('#modal').remove();
    })
})