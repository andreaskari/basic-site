$(document).ready(function() {
	var add_image = function() {
    	var img = $('<img src="Icons/andre.png"/>');
    	var window_height = $(window).height();
    	var window_width = $(window).width();
    	var top_loc = (window_height * Math.random()).toFixed();
    	var left_loc = (window_width * Math.random()).toFixed();
    	console.log(top_loc + " " + left_loc);
    	$(img).parent().css({position: 'relative'});
		$(img).css({top: top_loc + "px", left: left_loc + "px", position:'absolute'});
    	$('div').append(img);
	};

	$(document).click(add_image);
	$(document).on("vclick", "p", add_image);
});