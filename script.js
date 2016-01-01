$(document).ready(function(){

	function loadTweets() {
		var $tweetContainer = $('.tweet-container');
		var index = streams.home.length - 1;
		$tweetContainer.html('');
		while(index >= 0){
			var tweet = streams.home[index];
			var tweetDate = '<span class=\'timestamp\'>' + tweet.created_at.getHours() + ':' + ('0' + tweet.created_at.getMinutes()).slice(-2) + ':' + ('0' + tweet.created_at.getSeconds()).slice(-2) + '</span>';
			var $tweet = $('<div class=\'' + tweet.user + ' tweet\'></div>');
			$tweet.html(tweetDate + ' <span class=\'user\'>@' + tweet.user + ':</span> ' + '<span class=\'message\'>' + tweet.message + '</span>');
			$tweet.appendTo($tweetContainer);
			index -= 1;
		}

		$('.tweet').on('click', function(event) {
			var selected = $(this).attr('class').split(' ')[0];
			$('.tweet').not('.' + selected).remove();
			$('.refresh').html('Home');
		});
	}

	$('.refresh').on('click', function(event) {
		loadTweets();
		$(this).html('Refresh');
	});

	loadTweets();
	//setInterval(loadTweets, 10000);
});