/*
 * Author: Nguyen Xuan Phu
 * Template Name: CV Resume
 * Version: 1.0.0
*/

function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://use.fontawesome.com/releases/v5.1.0/css/all.css");loadCSS("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Condensed:300,400,700|Roboto+Slab:400,500,700");

;( function( $ ) {
	"use strict";
	
	var $bars = $( ".bar" ),
		methods = {
			init: function() {
				
				// Bind events
				methods.bindEvents();
				
			},
			bindEvents: function() {

				// Loop through each of the bars...
				$bars.each( function() {

					var $bar = $( this ),
						$pct = $bar.find( ".pct" ),
						data = $bar.data( "bar" );

					setTimeout( function() {

						$bar
							.css( "background-color", data.color )
							.animate({
								"width": $pct.html()
							}, data.speed || 3000, function() {

								$pct.css({
									"color": data.color,
									"opacity": 1
								});

							});

					}, data.delay || 0 );			

				});

			}
		};
	
	// Initialize on page load
	methods.init();	
		
})( jQuery );

$(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });
});