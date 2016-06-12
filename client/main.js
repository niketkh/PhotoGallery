import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.photos.helpers({
	photos: function(){
		return Photos.find();
	}
});

Template.addphotos.events({
	'submit .addphotoform': function(){
		var file = $('#myphoto').get(0).files[0];
		if(file){
			fsFile = new FS.File(file);
			Photos.insert(fsFile, function(error){
				if(error){
					console.log(error);
				}
				else{
					toastr.success('File Uploaded');
					Router.go('/');
				}
			});
		}
		else{
			toastr.error('No File Uploaded');
			Router.go('/add');
		}

		return false;
	}
})
