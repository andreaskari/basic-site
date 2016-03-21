$(document).ready(function() {
	// $('h1').hover(function() {
	// 	$('h1').addClass('highlight');
	// }, function() {
	// 	$('h1').removeClass('highlight');
	// });

	$(document).click(function() {
    	var img = $('<img src="Icons/andre.png"/>');
    	// var img = $('<img src="Icons/andre.png" class="andre_img" />');
    	img.addClass()
    	var window_height = $(window).height();
    	var window_width = $(window).width();
    	var top_loc = (window_height * Math.random()).toFixed();
    	var left_loc = (window_width * Math.random()).toFixed();
    	img.css({top: top_loc, left: left_loc});
    	$('div').append(img);
	});
});