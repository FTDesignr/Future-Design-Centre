//1.0 AUTOMATIC PROJECT-SLIDER 
$(document).ready(function(){

$('#itemslider').carousel({ interval: 3000 });

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<3;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});

//2.0 MOVE POSITION ON HOVER
$(document).ready(function(){
    $('.up-down').mouseover(function(){
        $('.default').stop().animate({
            width: 100    
        }, 200);                        
    }).mouseout(function(){
        $('.default').stop().animate({
            height: 200 
        }, 200)    
    })

});

//3.0 SLIDE IN
$(document).ready(function() {

  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  function check_if_in_view() {
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(animation_elements, function() {

      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
  $(window).trigger('scroll');

});

//4.0 ON CLICK FILTER DROPDOWN
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// 4.1 CLOSE DROPDOWN 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
