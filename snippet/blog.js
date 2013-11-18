{{ 'asset_path_to/owl.carousel.min.js' | asset_url | javascript_include }}

{% javascript %}

	$(document).ready(function() {
	
		$('#owl-home').owlCarousel({
			autoPlay: 5000,
			items: 3,
			itemsDesktop: [1100, 2],
			itemsDesktopSmall: [960, 2],
			itemsTablet: [640,1],
			itemsMobile: [640,1] 		
		});

	});

{% endjavascript %}