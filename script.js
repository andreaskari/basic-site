$(document).ready(function() {
	// $('h1').hover(function() {
	// 	$('h1').addClass('highlight');
	// }, function() {
	// 	$('h1').removeClass('highlight');
	// });

	$(document).click(function() {
    	var img = $('<img src="Icons/andre.png"/>');
    	// var img = $('<img src="Icons/andre.png" class="andre_img" />');

  //   	var img = $("img")[0]; // Get my img elem
		// var pic_real_width, pic_real_height;
		// $("<img/>") // Make in memory copy of image to avoid css issues
		//     .attr("src", $(img).attr("src"))
		//     .load(function() {
		//         pic_real_width = this.width;   // Note: $(this).width() will not
		//         pic_real_height = this.height; // work for in memory images.
		//     });
    	img.addClass()
    	var window_height = $(window).height();
    	var window_width = $(window).width();
    	var top_loc = (window_height * Math.random() - img.).toFixed();
    	var left_loc = (window_width * Math.random()).toFixed();
    	console.log(top_loc + " " + left_loc);
    	// img.css({top: top_loc, left: left_loc});
    	$(img).parent().css({position: 'relative'});
		$(img).css({top: top_loc + "px", left: left_loc + "px", position:'absolute'});
    	$('div').append(img);
	});
});