$(function(){

  $('.gnb-toggle').data({ 'open' : false }).on('click', function(){

    if( $(this).data().open ){
      $('.gnb').removeClass('on');
      $(this).data({open : false});
    } else {
      $('.gnb').addClass('on');
      $(this).data({open : true});
    }

  });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ25iLXRvZ2dsZScpLmRhdGEoeyAnb3BlbicgOiBmYWxzZSB9KS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoKS5vcGVuICl7XHJcbiAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuIDogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuIDogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=
