//This is the navigation component. The router has been passed in as a property.
var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<div id="hero">
					<div className="heroText">
						<h1>In Tech, We can Change the World!</h1>
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
							<p>Recent graduate of The Iron Yard, Austin. Voted `Javascript Warloard`, I have just found my love for coding. As you explore my portfolio, click as many buttons as you can. This site is a representation of some of the things I learned over the Front-end Engineering course I took. Have fun and enjoy!</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<p>I used React to build this site. Most of my HTML is sepereated into special components that only get shown on the page in specific circumstances. I am familiar with CSS, and prefer to use a transpiler so I can style using SASS, and have the page read it as CSS. I enjoy using the Bootstrap grid system, but pretty much can`t stand their default styling. So, on this site I used some of the Materialize CSS as well. JavaScript has become my forte. I am the only person I know who <i>likes</i> whiteboarding.</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<p>You`ll often see me with an instrument in my hand. I have a bad, or good depending on how you look at it, habit of trying to learn every instrument I can get my hands on. The outdoors intrigue me. Hiking, swimming, and camping are a must-do for me to keep my sanity. </p>
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
										<img className="adjust" src="../../images/gist_iphone6Big.jpg"/>
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
							<p>Introducing my next greatest idea, Gist! I was working the Guest Service desk at Whole Foods recently and someone’s really nice grandmother came up to me and said: `My doctor told me I have to eat Gluten Free.` Me: `Yes ma’am, how can I help?` Her: `I am so hungry!` This sparked my idea for an app that would allow people to see what groceries are available for their unique diet at the store of their choice. Also built in is a way to make quick grocery lists and save them for future use.</p>
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
										<img className="computer1" src="../../images/IronQuizzes1.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/IronQuizzes2.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/IronQuizzes3.png" alt="..."/>
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
							<a href="#IQ"><h2>Iron Quizzes!</h2></a>
							<p>A group project with over 800 commits to GitHub. We acted as if we got a real user story to make an app that would allow teachers create quizzes that in turn helped track progress and attendence for individuals, classes, and cohorts. </p>
							<a href="#IQ"><button className="exploreBtn">Explore</button></a>
						</div>
					</div>
					<div className="row TicRow">
						<div className="col-xs-12 col-sm-4">
							<div id="carousel-example-generic4" className="carousel slide" data-ride="carousel" data-interval="10000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic4" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic4" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic4" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/tic1.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/tic2.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/tic3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>

								
								<a className="left carousel-control" href="#carousel-example-generic4" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic4" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div> 
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="#ttt"><h2>Lets Play!</h2></a>
							<p>Take a look at my latest creation. Built with HTML, CSS, JavaScript, and React.</p>
							<a href="#ttt"><button className="exploreBtn">Explore</button></a>
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
