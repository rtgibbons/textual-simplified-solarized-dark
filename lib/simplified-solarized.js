Zepto(function($) {

	/**
	 * Allow the ability to shrink the topic bar since some can get pretty
	 * large. On Load set the class to shrink it up.
	 */
	$topicBar = $('#topic_bar');
	$topicBar.addClass('ellipsis');
	$topicBar.on('click', function(e) {
		$topicBar.toggleClass('ellipsis');
	});

	/**
	 * Toggle Join / Part / Quit message visibility
	 */
	$('body').on('focus', function(e) {
		console.log(e);
	});
});