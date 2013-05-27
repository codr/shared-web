can.Control('Bitovi.OSS.SocialStats', {
	defaults: {	}
}, {
	init: function() {
		this.state = new can.Observe({
			//appsSubmitted: 0,
			//recentCommits: 0,
			//forumPosts: '',
			//ircPeople: 0,
			//pluginsSubmitted: 0
		});
		this.element.html(can.view('templates/socialStats.mustache', this.state));

		Bitovi.OSS.ActivitySummary.findOne().done(can.proxy(function(summary) {
			this.state.attr(summary);
		}, this));
	}
});