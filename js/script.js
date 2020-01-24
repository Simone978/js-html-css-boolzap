$('document').ready(function(){

  $('.clicca').click(function(){
          var text = $('#insert_someth').val();
          if(text != 0){
            var elementNew = $('.template .message').clone();
            console.log(elementNew);
            $('.window_body').append(elementNew);
            elementNew.addClass('receive');
            elementNew.find('.text p').append(text);
          }
        }
    );

});
