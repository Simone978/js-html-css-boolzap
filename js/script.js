$('document').ready(function(){

// funzione che al click inserisce un messaggio nella conversazione. Nella callback ricevo un messaggio di ritorno
  $('.clicca').click(function(){
    var text = $('#insert_someth').val();
    if(text != 0){
      var elementNew = $('.template .message').clone();
      $('.window_body.active').append(elementNew);
      elementNew.addClass('sent');
      elementNew.find('.text p').append(text);
    } setTimeout(function(){
      ciao();
    }, 1000);
  }
);
// funzione di callback per il messaggio di ritorno
  function ciao(){
    var textReceive = 'ciao';
    var elementNew = $('.template .message').clone();
    $('.window_body.active').append(elementNew);
    elementNew.addClass('receive');
    elementNew.find('.text p').append(textReceive);
  }
// funzione ricerca tra i nomi dei contatti
  $('.search_click').click(function(){
    var search = $('.search-name').val().toLowerCase();
    var name = $('.name p:first-child').text().toLowerCase();
    var container = $("p.username:contains(" + search + ")");
    $('.discussion_profile').addClass('active_name_off');
    container.parents('.discussion_profile').removeClass('active_name_off');
  });

  $('.discussion_profile').click(function(){
    var discussionNumber = $(this).attr('data-contact');
    $('.window_body').each(function(){
      if($(this).attr('data-contact')==discussionNumber){
        $('.window_body').removeClass('active');
        $(this).addClass('active');
      }
    })

  });


  $(document).on('click','.hidden_elements', function(){
    $(this).parent().siblings('.hidden_menu').show();
  });

  $(document).on('click','.delete', function(){
    $(this).parent().parent().remove();

  });



});
