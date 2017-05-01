
$(document).ready(function () {

    // Clients__logo carousel
    $('.owl-carousel.clients__logo').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        pagination:false,
        navigation:true,
        dots: true,
        navText: ["<img class='arrow-slide arrow-slide--left' src='../images/leftarrow.png'/>",
         "<img class='arrow-slide arrow-slide--right' src='../images/rightarrow.png'/>"],
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1600: {
                items: 3
            }
        }
    });

    // Smooth scroll


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


});


