$(document).ready(function(){
	$( "#audio-text" ).click(function() {
	  $( "#transcript" ).toggle( "fast", function() {
	    // Animation complete.
	  });
	});
});