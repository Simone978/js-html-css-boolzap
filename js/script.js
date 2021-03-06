$('document').ready(function(){

// funzione che al click inserisce un messaggio nella conversazione. Nella callback ricevo un messaggio di ritorno
  $('.window_footer input').keydown(function(event){
    if(event.which == 13){
      message(), setTimeout(function(){
        ciao();
      }, 1000);
    }
  }
);

$('.clicca').click(function(){
  message(), setTimeout(function(){
    ciao();
  }, 1000);
}
);

// funzione ricerca tra i nomi dei contatti
  $('.search input').keyup(function(){
    search();
  });

  // funzione per passare da una discussione all'altra senza perdere i contenuti
  $('.discussion_profile').click(function(){
    // inserisco nome e foto nell'header
    var name = $(this).find('.username').text();
    var img = $(this).find('.icon_left img').attr('src');
    $('.window_wrapper').children('img').attr('src',''+img+'');
    $('.window_wrapper').find('.name').text(''+ name +'');
    
    // passo da una discussione all'altra senza perdere i contenuti
    var discussionNumber = $(this).attr('data-contact');
    $('.window_body').each(function(){
      if($(this).attr('data-contact')==discussionNumber){
        $('.window_body').removeClass('active');
        $(this).addClass('active');
      }
    })
  });



  $('.window_footer input').focus(function(){
    $('.window_footer .icon').removeClass('fa-microphone').addClass('fa-paper-plane');
  });

  $(document).on('click','.hidden_elements', function(){
    $(this).parent().siblings('.hidden_menu').toggle();
  });

  $(document).on('click','.delete', function(){
    $(this).parent().parent().remove();
  });

});

// funzione messaggio
  function message(){
    var text = $('#insert_someth').val();
    if(text != 0){
      var elementNew = $('.template .message').clone();
      $('.window_body.active').append(elementNew);
      elementNew.addClass('sent');
      elementNew.find('.text p').append(text);
      scrollMessage();
    };
  };

// funzione di callback per il messaggio di ritorno
  function ciao(){
    var textReceive = 'ciao';
    var elementNew = $('.template .message').clone();
    $('.window_body.active').append(elementNew);
    elementNew.addClass('receive');
    elementNew.find('.text p').append(textReceive);
    scrollMessage();
  };

// funzione ricerca tra le discussioni
  function search(){
    var search = $('.search-name').val().toLowerCase();
    var name = $('.name p:first-child').text().toLowerCase();
    var container = $("p.username:contains(" + search + ")");
    $('.discussion_profile').addClass('active_name_off');
    container.parents('.discussion_profile').removeClass('active_name_off');
  }

  // funzione che scrolla
  function scrollMessage() {
    var heightContainer = $('.window_body.active').height();
    console.log(heightContainer);
    $('.window_body').scrollTop(heightContainer);
  }
