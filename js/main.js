var Person = Backbone.Model.extend({
	defaults: {
		name: "John",
		age: 23,
		job: "Developer"
	},
	walk: function() {
		return this.get('name') + " is walking.";
	}
});