can.Model('Bitovi.OSS.ActivitySummary', {
	summary: null,
	// the configuration is not going to change,
	// and it's pretty much a singleton, so:
	findOne: function() {
		if(Bitovi.OSS.ActivitySummary.summary === null) {
			Bitovi.OSS.ActivitySummary.summary = $.ajax({
				url: Bitovi.URL.BITHUB + 'summary',
				dataType: 'json'
			});
		}

		return Bitovi.OSS.ActivitySummary.summary;
	},
	model: function(data) {
		//{"data":{"app":23,"article":30,"plugin":7,"code":1041,"chat":5578,"twitter":1510,"issues_event":247,"github":2547}}
		data = data.data;
		return {
			appsSubmitted: data.app,
			recentCommits: data.code,
			//forumPosts: data.,
			//ircPeople: '',
			pluginsSubmitted: data.plugin
		};
	}
}, { });