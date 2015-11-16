//This is the navigation component. The router has been passed in as a property.
var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<div id="hero">
					<div className="heroText">
						<h1>With Tech, We can Change the World!</h1>
						<h2>Bob McCarthy</h2>
						<div className="lineBreak"></div>
						<h4>Front End Developer</h4>
					</div>
				</div>
				<div className="container-fluid">
					<div className="col-xs-12">
						<div className="myTitle">
							<div>About THE Bob McCarthy</div>
						</div>
					</div>
					<div className="row aboutMe">
						<div className="col-xs-12 col-md-4">
							<p>Drinking vinegar ugh chambray deep v. Fanny pack brunch schlitz, disrupt narwhal hoodie butcher portland. Godard jean shorts semiotics raw denim. Selfies skateboard street art before they sold out pop-up echo park next level, taxidermy photo booth try-hard drinking vinegar direct trade. Listicle meh PBR&B, photo booth banjo chambray food truck hashtag YOLO</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<p>Drinking vinegar ugh chambray deep v. Fanny pack brunch schlitz, disrupt narwhal hoodie butcher portland. Godard jean shorts semiotics raw denim. Selfies skateboard street art before they sold out pop-up echo park next level, taxidermy photo booth try-hard drinking vinegar direct trade. Listicle meh PBR&B, photo booth banjo chambray food truck hashtag YOLO</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<p>Drinking vinegar ugh chambray deep v. Fanny pack brunch schlitz, disrupt narwhal hoodie butcher portland. Godard jean shorts semiotics raw denim. Selfies skateboard street art before they sold out pop-up echo park next level, taxidermy photo booth try-hard drinking vinegar direct trade. Listicle meh PBR&B, photo booth banjo chambray food truck hashtag YOLO</p>
						</div>
					</div>
					<div className="row GistRow">
						<div className="col-xs-12 col-sm-4">
							<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="20000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/macbook1.jpg"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/gist_iphone6.jpg"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/prefs3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>

								
								<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div> 
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="#Gist"><h2>You Get the Gist!</h2></a>
							<p>All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST 
							</p>
						</div>
					</div>
					<div className="row BlogRow">
						<div className="col-xs-12 col-sm-4 rightFloated">
							<div id="carousel-example-generic2" className="carousel slide" data-ride="carousel" data-interval="20000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic2" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/boblog.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/boblog.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/boblog.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>

								
								<a className="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div> 
						</div>
						<div className="col-xs-12 col-sm-8">
							<h2>Make a Post!!</h2>
							<p>BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog BobLog 
							</p>
						</div>
					</div>
				</div>
				<div className="container-fluid footerP">
					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<h4>Email:</h4>
							<p>bobmccarthyatx@gmail.com</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<h4>Tumblr:</h4>
							<p>bobatx.tumblr.com</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<h4>Twitter:</h4>
							<p>@bobdevatx</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
// <div className="homeImg">
// 					<img src="../../images/comp2.jpg"/>
// 					<img src="../../images/phone.png"/>
// 				</div>
