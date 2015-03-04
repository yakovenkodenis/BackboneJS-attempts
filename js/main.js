var Person = Backbone.Model.extend({
	defaults: {
		name: "John",
		age: 23,
		job: "Developer"
	},

	validate: function( attrs ) {
		console.log(attrs);

		if( attrs.age <= 0 ) {
			return 'The age should be positive!';
		}

		if( ! attrs.name ) {
			return "The name is compulsory!";
		}
	},

	walk: function() {
		return this.get('name') + " is walking.";
	}
});