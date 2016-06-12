Router.configure({
	layoutTemplate: 'main'
});

Router.map(function(){
	this.route('photos', {
		path: '/',
		template: 'photos'
	});

	this.route('photo', {
		path: '/photos/:_id',
		template: 'photo',
		data: function(){
			templateData = {
				photo: Photos.findOne({_id:this.params._id})
			}
			return templateData;
		}
	});

	this.route('addphotos',{
		path: '/add',
		template: 'addphotos'
	});
});