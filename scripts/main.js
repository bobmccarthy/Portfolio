'use strict';
var React = require('react');
var bootstrap = require('bootstrap');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize("p5pjOUCZjobYEd8rUofEo9IkLessjDxRUsUtvp16", "Tf3Rd4zjnI98dzkqlcEDVnJ2Pi3vHlumQR8blaHr");

var PPageComponent = require('./components/PPageComponent');

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var ProductSearchComponent = require('./components/ProductSearchComponent');
var ProfileComponent = require('./components/ProfileComponent');
var MyListsComponent = require('./components/MyListsComponent');
var ItemDetailsComponent = require('./components/ItemDetailsComponent');
var AddListComponent = require('./components/AddListComponent');
var IronQuizzesComponent = require('./components/IronQuizzesComponent');
var BoardTileComponent = require('./components/BoardTileComponent');
var BudgetComponent = require('./components/BudgetComponent');


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
			'addList': 'addList',
			'IQ': 'IQhome',
			'ttt': 'ttt',
			'finances': 'finances'
		},
		home: function(){
			
			ReactDOM.render(<PPageComponent />,
			document.getElementById('main'));
			$('#nav').hide();
		},
		Ghome: function() {
			$('#nav').show();
			$('#login').hide();
			ReactDOM.render(<HomeComponent />,
			document.getElementById('main'));
			ReactDOM.render(
			<NavigationComponent router={r} />,
			document.getElementById('nav'));
			$('body').scrollTop(0);
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
			$('body').scrollTop(0);
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
			$('body').scrollTop(0);
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
		},
		IQhome: function() {
			ReactDOM.render(<IronQuizzesComponent router={r} />,
			document.getElementById('main'));
		},
		ttt: function(){
			ReactDOM.render(<BoardTileComponent router={r} />,
			document.getElementById('main'));
			$('body').scrollTop(0);
		},
		finances: function(){
			Parse.initialize('nVzrZSyHc9zZEKd3UGiztb7Z1m001ScibBLpA5o2', 'vyuHvAK922TMbdvvkXZb8oK89a2paFCRqzDTVEmh');
			ReactDOM.render(<BudgetComponent router={r} />,
			document.getElementById('main'));
		}
	});

	var r = new Router();
	Backbone.history.start();

})

