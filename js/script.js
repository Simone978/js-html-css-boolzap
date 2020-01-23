$('document').ready(function(){

  $('#insert_someth').keypress(
      function (event) {
        if(event.which == 13 || event.keyCode == 13) {
          var text = $('#insert_someth').val();
          var elementNew = $('.template p').clone();
          elementNew.append(text);
          $('.column_right').append(elementNew);
        }
      }
    );

});
