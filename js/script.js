$('document').ready(function(){

  $('.clicca').click(function(){
    var text = $('#insert_someth').val();
    if(text != 0){
      var elementNew = $('.template .message').clone();
      console.log(elementNew);
      $('.window_body').append(elementNew);
      elementNew.addClass('sent');
      elementNew.find('.text p').append(text);
    } setTimeout(function(){
      ciao();
    }, 1000);
  }
);

  function ciao(){
    var textReceive = 'ciao';
    var elementNew = $('.template .message').clone();
    $('.window_body').append(elementNew);
    elementNew.addClass('receive');
    elementNew.find('.text p').append(textReceive);
  }

  $('.search_click').click(function(){
    var search = $('.search-name').val().toLowerCase();
    var name = $('.name p:first-child').text().toLowerCase();
    var cond = true;
    var i = 0;
    var nameArray = $('.name p:first-child');
    var nameInclude = name.includes(search);
    for (var i = 0; i < nameArray.length - 1; i++) {
      console.log(nameArray[i]);

    if(nameInclude){
      console.log(i);
    }else {
      console.log('non esiste');
    }
  }

  });
  
});
