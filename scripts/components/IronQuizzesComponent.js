//This is the navigation component. The router has been passed in as a property.
var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<img className="uc" src="../../images/underconstruction.jpg"/>
				<p>universitycdc.org/wp-content/uploads/2015/06/underconstruction.jpg</p>
			</div>
		)
	}
});
