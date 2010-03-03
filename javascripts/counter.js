
$(document).ready( function() {
  $('#tweetbox').keyup(function(){ update_character_count($(this)); });
});

function update_character_count(clicked) {
	var length = clicked.val().length;
	count = 140 - length;
	if (count < 0) {
	  $('#count').addClass('negative');
	} else {
	  $('#count').removeClass('negative');
	}
  $('#count').html(count);
}