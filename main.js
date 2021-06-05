// Add active class to the current button (highlight it)
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}




var newHeight = $(window).height() + "px";

$(document).ready(function() {
     // When ready...
    navFix();
});
function navFix(){
    // https://jsfiddle.net/18n16hzz/ EXAMPLE OF BIO TOGGLE
    // fix nav menu height on mobile
    $('.navbar-collapse').bind('shown.bs.collapse', function() {
      $('body').css("overflow","hidden");
      $(".navbar-collapse").css({ maxHeight: newHeight });
    });

    $('.navbar-collapse').bind('hidden.bs.collapse', function() {
      $('body').css("overflow","auto");
    });
    // END fix nav menu height on mobile

}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(window).resize(function(){
        newHeight = $(window).height() + "px";
        $(".navbar-collapse").css({ maxHeight: newHeight });
    });




$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});