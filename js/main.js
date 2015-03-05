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



var PeopleCollection = Backbone.Collection.extend({
	model: Person
});



var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		console.log(this.collection);
	},

	render: function() {
		this.collection.each(function(person) {
			var personView = new PersonView({model: person});

			this.$el.append(personView.el);
		}, this);
	}
});


var PersonView = Backbone.View.extend({

	template: '#person-id',

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
		var template = _.template( $(this.template).html() )
		this.$el.html( template( this.model.toJSON() ) );
	}
});

var person = new Person();
var personView = new PersonView({model: person});

var person2 = new Person({name: "Andrey", age: 25});
var personView2 = new PersonView({model: person2});


var peopleCollection = new PeopleCollection([
	{
		name: "John",
		age: 19,
		job: 'cleaner'
	},
	{
		name: "Emma",
		age: 21,
		job: "teacher"
	},
	{
		name: "Paul",
		age: 35
	}
]);

var peopleView = new PeopleView({collection: peopleCollection});