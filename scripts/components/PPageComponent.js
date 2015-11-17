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
							<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="10000">
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
							<p>All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST All About GIST </p>
							<a href="#Gist"><button className="exploreBtn">Explore</button></a>
						</div>
					</div>
					<div className="row BlogRow">
						<div className="col-xs-12 col-sm-4 rightFloated">
							<div id="carousel-example-generic2" className="carousel slide" data-ride="carousel" data-interval="11000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic2" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/Boblog.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/ImageBoard.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/parse-products.png" alt="..."/>
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
							<a href="#BL"><h2>Make a Post, or Buy a Book!</h2></a>
							<p>BobLog Parse-Products ImageBoard </p>
							<a href="#BL"><button className="exploreBtn">Explore</button></a>
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
// <div className="row ImageRow">
// 	<div className="col-xs-12 col-sm-4 rightFloated">
// 		<div id="carousel-example-generic3" className="carousel slide" data-ride="carousel" data-interval="12000">
// 			<ol className="carousel-indicators">
// 				<li data-target="#carousel-example-generic3" data-slide-to="0" className="active"></li>
// 				<li data-target="#carousel-example-generic3" data-slide-to="1"></li>
// 				<li data-target="#carousel-example-generic3" data-slide-to="2"></li>
// 			</ol>

// 			<div className="carousel-inner">
// 				<div className="item active">
// 					<img className="computer1" src="../../images/ImageBoard.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img className="adjust" src="../../images/ImageBoard.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img src="../../images/ImageBoard.png" alt="..."/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 			</div>

			
// 			<a className="left carousel-control" href="#carousel-example-generic3" role="button" data-slide="prev">
// 				<span className="glyphicon glyphicon-chevron-left"></span>
// 			</a>
// 			<a className="right carousel-control" href="#carousel-example-generic3" role="button" data-slide="next">
// 				<span className="glyphicon glyphicon-chevron-right"></span>
// 			</a>
// 		</div> 
// 	</div>
// 	<div className="col-xs-12 col-sm-8">
// 		<a href="#BL"><h2>Ajax Image Board!!</h2></a>
// 		<p>Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board</p>
// 		<a href="#IB"><button className="exploreBtn">Explore</button></a>
// 	</div>
// </div>
// <div className="row ProductsRow">
// 	<div className="col-xs-12 col-sm-4 rightFloated">
// 		<div id="carousel-example-generic4" className="carousel slide" data-ride="carousel" data-interval="12000">
// 			<ol className="carousel-indicators">
// 				<li data-target="#carousel-example-generic4" data-slide-to="0" className="active"></li>
// 				<li data-target="#carousel-example-generic4" data-slide-to="1"></li>
// 				<li data-target="#carousel-example-generic4" data-slide-to="2"></li>
// 			</ol>

// 			<div className="carousel-inner">
// 				<div className="item active">
// 					<img className="computer1" src="../../images/parse-products.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img className="adjust" src="../../images/parse-products.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img src="../../images/parse-products.png" alt="..."/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 			</div>

			
// 			<a className="left carousel-control" href="#carousel-example-generic4" role="button" data-slide="prev">
// 				<span className="glyphicon glyphicon-chevron-left"></span>
// 			</a>
// 			<a className="right carousel-control" href="#carousel-example-generic4" role="button" data-slide="next">
// 				<span className="glyphicon glyphicon-chevron-right"></span>
// 			</a>
// 		</div> 
// 	</div>
// 	<div className="col-xs-12 col-sm-8">
// 		<a href="#BL"><h2>Parse-Products!!</h2></a>
// 		<p>Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project </p>
// 		<a href="#PP"><button className="exploreBtn">Explore</button></a>
// 	</div>
// </div>
// <div className="homeImg">
// 					<img src="../../images/comp2.jpg"/>
// 					<img src="../../images/phone.png"/>
// 				</div>
