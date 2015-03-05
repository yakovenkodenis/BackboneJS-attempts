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

var PersonView = Backbone.View.extend({

	template: _.template( $('#person-id').html() ),

	initialize: function () {
		this.render();
	},

	tagName: 'li',
	className: 'person',
	id: 'some-person',

	render: function() {
		// antipattern, bad practice
		// this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ')' );

		// good practice
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});

var person = new Person();
var personView = new PersonView({model: person});