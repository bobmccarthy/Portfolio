//This is the navigation component. The router has been passed in as a property.
var React = require('react');
var Backbone = require('backbone');
var Bootstrap = require('bootstrap');
var ListModel = require('../models/ListModel');
var listQuery = new Parse.Query(ListModel);
var $ = require('jquery');
var selectedList;


module.exports = React.createClass({
	getInitialState: function(){
		return{
			selectedList:null
		}
	},
	componentWillMount: function() {
		listQuery.first((list) => {
			this.setState({
				selectedList: list.id
			})
		});
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
		
		
	},
	render: function() {
		$('.haMenu').hide();
		var currentPage = Backbone.history.getFragment();
		var subUrl = currentPage.substring(0,13);
		var menuDropdown=[];
		var navChange = [];
		
		if (!Parse.User.current()){
			// $('.hamburgerBtn').hide();
			// $('.loginButtonThing').show();
			navChange.push(<a key="a" className="loginButtonThing right rightBtn" href="#login">Login</a>);
			menuDropdown.push(<div><a key="p" className="hBtn" href="#login">Login</a></div>);
		}

		else{
			
			navChange.push(<a key="b" className="right rightBtn" href="#logout" onClick={this.logout}>Logout</a>);
			navChange.push(<a key="c" className={currentPage === 'profile' ? 'active right rightBtn box-shadow--2dp' : 'right rightBtn'} href="#profile">{Parse.User.current().get('username')}`s Profile</a>);
			navChange.push(<a key="f" className={currentPage === 'myLists' ? 'active right rightBtn box-shadow--2dp' : 'right rightBtn'} href="#myLists">My Lists</a>);
			navChange.push(<a key="e" id="proBtn" className={subUrl === 'productSearch' ? 'active right rightBtn box-shadow--2dp' : 'right rightBtn'} href={'#productSearch/'+this.state.selectedList}>Product Picker</a>);
			menuDropdown.push(<div><a key="h" className="hBtn" href="#logout" onClick={this.logout}>Logout</a></div>);
			menuDropdown.push(<div><a key="i" className={currentPage === 'profile' ? 'active hBtn' : 'hBtn'} href="#profile" onClick={this.mini}>{Parse.User.current().get('username')}`s Profile</a></div>);
			menuDropdown.push(<div><a key="j" className={currentPage === 'myLists' ? 'active hBtn' : 'hBtn'} href="#myLists" onClick={this.mini}>My Lists</a></div>);
			menuDropdown.push(<div><a key="k" className={subUrl === 'productSearch' ? 'active hBtn' : 'hBtn'} href={'#productSearch/'+this.state.selectedList} onClick={this.mini}>Product Picker</a></div>);
			
			
		}				
		return(
			<div>
				<div id="login">
					<div className="loginWhite">
						<form className="loginForm" onSubmit={this.login}>
							<h2>Username:</h2>
							<input className="box-shadow--4dp" type="text" ref="username" defaultValue="Bob"/>
							<h2>Password:</h2>
							<input className="box-shadow--4dp" type="password" ref="password" defaultValue="1234"/>
							<button className="box-shadow--4dp">Go!</button>
						</form>
					</div>
				</div>
				<div className="top-navbar navbar-fixed-top">
					<img src="../../images/scroll4.png"/>
					<a className="navBtn" href="#Gist"><strong>G</strong><span className="spam">ist</span></a>
					<a className="portBtn" href="#">Back to Portfolio</a>
					{navChange}
					<button onClick={this.menu} className="hamburgerBtn box-shadow--2dp">-<br/>-</button>
					<div className="haMenu box-shadow--6dp">
						{menuDropdown.reverse()}
					</div>
				</div>
				
			</div>
		)
	},
	login: function(e){
		e.preventDefault();
		// var user = new Parse.User();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
			{
				success: (u) => {
					this.forceUpdate();
					$('#login').hide();
					
					this.props.router.navigate('#productSearch/'+this.state.selectedList, {trigger: true});

				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	},
	logout: function(e){
		console.log('logout');
		e.preventDefault();
		Parse.User.logOut();
		

		this.props.router.navigate('#logout', {trigger: true});
		// $('.loginButtonThing').show();
	},
	menu: function(){
		$('.haMenu').toggle('slow');
	},
	mini: function(){
		$('.haMenu').toggle('slow');
	}

});
