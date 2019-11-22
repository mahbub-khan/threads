$(document).ready(function() {
 
  $(".one-slide-carousel").owlCarousel({
	  autoPlay: 10000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 600,
      paginationSpeed : 2000,
      singleItem:true,
    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});