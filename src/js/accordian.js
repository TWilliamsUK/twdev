
//Accordian
$(document).ready(function($) {
	$('#accordion').find('.accordion-toggle').click(function(){
		//Expand or collapse this panel
		$(this).next().slideToggle(600);
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp(600);
	});

	//Translate browser window vertically to keep content in view
	$('.accordion-toggle').bind('click',function(){
		var self = this;
		setTimeout(function() {
			theOffset = $(self).offset();
			$('body,html').animate({ scrollTop: theOffset.top -28 }, 600);
		}, 601);
	});
});


