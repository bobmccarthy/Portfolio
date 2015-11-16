'use strict';
var React = require('react');
var bootstrap = require('bootstrap');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize('p5pjOUCZjobYEd8rUofEo9IkLessjDxRUsUtvp16', 'Tf3Rd4zjnI98dzkqlcEDVnJ2Pi3vHlumQR8blaHr');

var PPageComponent = require('./components/PPageComponent');

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var ProductSearchComponent = require('./components/ProductSearchComponent');
var ProfileComponent = require('./components/ProfileComponent');
var MyListsComponent = require('./components/MyListsComponent');
var ItemDetailsComponent = require('./components/ItemDetailsComponent');
var AddListComponent = require('./components/AddListComponent');

$(document).on('ready', function(){
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'Gist': 'Ghome',
			'login': 'login',
			'logout': 'home',
			'productSearch(/:id)': 'productSearch',
			'profile': 'profile',
			'myLists(/:id)': 'myLists',
			'details/:id': 'details',
			'addList': 'addList'
		},
		home: function(){
			ReactDOM.render(<PPageComponent />,
			document.getElementById('main'));
		},
		Ghome: function() {
			$('#login').hide();
			ReactDOM.render(<HomeComponent />,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		},
		login: function(){
			$('#login').toggle('slow');
		},
		productSearch: function(id){
			ReactDOM.render(<ProductSearchComponent router={r} listId={id}/>,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		},
		profile: function(){
			ReactDOM.render(<ProfileComponent router={r} />,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		},
		myLists: function(id){
			ReactDOM.render(<MyListsComponent router={r} itemId={id}/>,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		},
		details: function(id){
			ReactDOM.render(<ItemDetailsComponent router={r} itemId={id}/>,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		},
		addList: function(){
			ReactDOM.render(<AddListComponent router={r} />,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
		}
	});

	var r = new Router();
	Backbone.history.start();

})

