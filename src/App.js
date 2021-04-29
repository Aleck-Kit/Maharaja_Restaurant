import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './App.css';




class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
        <div id="Welcome">
  
          <nav className="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <img src="assets/images/default-monochrome.svg" width="200" height="80" className="d-inline-block align-top" alt="" />
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#Welcome">Welcome</a>
                  </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Restaurant">Restaurant</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Menu">Menu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Reservation">Reservation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#OurLocation">Our Location</a>
                </li>
              
              </ul>
          </div>
        </nav>

        <Carousel className="carousel-fade">
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100 img-fluid"
      src="assets/images/IndianChef.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
    <h1 className="caption-box">Welcome to Maharaja Restaurant</h1>
    <h5 className="caption-box"><strong>Be prepared to indulge your palate in sumptuous Indian cuisine...</strong></h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="assets/images/IndianFood2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="caption-box">Delectable Variety</h1>
      <h5 className="caption-box"><strong>Whether vegan, vegetarian, pescatarian or simply a lover of all things delicious, you're sure to find something to sate your appetite in our wide-ranging menu</strong></h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="assets/images/SpiceSpoons.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="caption-box">Scintillating, Fresh Ingredients</h1>
      <h5 className="caption-box"><strong>Our mantra to serving the most authentic Indian cuisine is in sourcing the freshest organic spices and ingredients. You'll taste the difference in every single bite.</strong></h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <div className="container">
        <div className="row" id="Restaurant">
            <div className="col navMenu">
                <h2 className="text-center" >/Restaurant/</h2>
            </div>
          </div>
          <div className="row bg-dark text-white" >
            <div className="col-md-6 ">
              <h3 className=" del-memories">We Create Delicious Memories</h3>
              <p>As one of the oldest restaurants in Gaborone, Maharaja has proudly stood as an institution of fine Indian cuisine and has been a firm and favourite locale for patrons near and far since our establishment in 1997.</p>
              
              <p>Our story   is indelibly linked to that of one Africa's fastest growing cities and we look forward to helping create even more delicious memories for the many future generations to come, serving one dish of incredible food at a time.</p>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <img className="img-fluid mt-3 rounded border border-warning" src="assets/images/RestaurantInterior.jpeg" width="100%" />
            </div>
          </div>
          <div className="row bg-dark text-white"><br /></div>
          <div className="row bg-dark text-white">
            <div className="col-md-6 order-md-1 order-2" data-aos="fade-up">
              <img className="img-fluid mb-3 rounded border border-warning" src="assets/images/IndianFood1.jpg" />
            </div>
            <div className="col-md-6 order-md-12 order-1">
              <h3 className=" our-cuisine">Our World Famous Cuisine</h3>
              <p>Maharaja positions itself to be the first choice eatery in providing patrons with the distinct, delectable and mouth watering authentic North Indian dishes that are prepared using only the freshest meat, vegetables and spices available.</p>
              
              <p>Using decade old recipes which are given a slightly modern twist, our highly experienced chefs know exactly how to bring out the most in our dishes that will leave you addicted and coming back for more.</p>
            </div>
          </div>
        
        <div className="row" id="Menu">
          <div className="col navMenu">
                <h2 className="text-center" >/Menu/</h2>
          </div>
        </div>
        <div className="row bg-light d-flex flex-wrap align-content-center mr-5 ">
          <div className="col-md-4" data-aos="slide-up">
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img  src="assets/images/IndianFoodMeat.jpeg" alt="Avatar" width="100%" height="300" />
    </div>
    <div className="flip-card-back">
      <h1>Meat Menu</h1> 
    </div>
  </div>
</div>
          </div>
          <div className="col-md-4" data-aos="slide-up">
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img  src="assets/images/IndianFoodChicken.jpg" alt="Avatar" width="100%" height="300" />
    </div>
    <div className="flip-card-back">
      <h1>Chicken Menu</h1> 
    </div>
  </div>
</div>
          </div>
          <div className="col-md-4" data-aos="slide-up">
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img  src="assets/images/IndianFoodVeg.jpeg" alt="Avatar" width="100%" height="300" />
    </div>
    <div className="flip-card-back">
      <h1>Veg & Bread Menu</h1> 
    </div>
  </div>
</div>
          </div>
        </div>

        <div className="row" id="Reservation">
          <div className="col navMenu">
                <h2 className="text-center">/Reservation/</h2>
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-12 reserve-container" data-aos="fade-up">
            <img className="img-fluid image-reserve" src="assets/images/reserve.jpg" />
            <div className="reserve-text col-lg-12 ">
              <h1 className="text-center">Opening Times</h1>
              <div className="row">
                <div className="col-6">
                    <h2 className="text-center">Lunch</h2>
                    <h5 className="text-center">12:00 - 15:00</h5>
                </div>
                <div className="col-6">
                    <h2 className="text-center">Dinner</h2>
                    <h5 className="text-center">19:30 - 23:30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row bg-light">
          <div className="col">
            <form>
              <div className="form-row">
                  <div className="form-group col-6">
                    <h3>Reserve</h3>
                    <label for="inputDate"> Date</label>
                    <input type="date" className="form-control" id="inputDate" placeholder="Data gg/mm/aaaa" />
                  </div>
                  <div className="form-group col-6">
                    <h3>Details</h3>
                    <label for="inputName"> Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name" />
                  </div>
                  <div className="form-group col-6">
                    <label for="inputTime"> Timetables</label>
                    <input type="time" className="form-control" id="inputTime" placeholder="Timetables" />
                  </div>
                  <div className="form-group col-6">
                    <label for="inputEmail"> Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div className="form-group col-6">
                    <label for="inputNumber"> Number of Guests</label>
                    <input type="number" className="form-control" id="inputNumber" placeholder="Number of Guests" />
                  </div>
                  <div className="form-group col-6">
                    <label for="inputCel"> Phone</label>
                    <input type="tel" className="form-control" id="inputCel" placeholder="Phone" />
                  </div>
                  <div className="form-group col-12">
                    <label for="inputComment"> Further requests</label>
                  <textarea className="form-control" rows="4" id="inputComment" placeholder="Further requests"></textarea>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <button type="submit" className="btn btn-secondary btn-block">Reserve</button>
                  </div>
                </div>
            </form>
          </div>
        </div>

        <div className="row" id="OurLocation">
        
          <div className="col navMenu">
        
            <h2 className="text-center">/Our Location/</h2>
          </div>
        </div>
        <div className="row">
        
          <div className="col-lg-12 reserve-container">
          <img className="img-fluid image-location" src="assets/images/MaharajaMap1.jpg" alt=""/> 
            <h3></h3>
            <p> </p>
            <h3></h3>
            <p></p>
            <h3></h3>
            <p> </p>
          </div>
          
        </div>

        <div className="row mt-5 mb-3" >
        
          <div className="col">
        
            <h2 className="text-center">/See You Soon!/</h2>
          </div>
          </div>

{/* Footer  */}
        <footer>
        	<div className="footer-top">
		        <div className="container">
		        	<div className="row">
		        		<div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
		        			<img className="logo-footer" src="Assets/images/default-monochrome.svg" width="200" height="80" alt="logo-footer" data-at2x="assets/images/default-monochrome.svg"/>
		        			<p>Thanks for stopping by. We are the last authentic Indian restaurant in Gaborone, serving delicious Punjabi cuisine prepared by the best chefs.</p> 
                  <p>It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Indian culinary experience.</p>
                  
		        				  
		        			
		        			<p><a href="#">Our Team</a></p>
	                    </div>
		        		<div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
		        			<h3>Contact</h3>
		                	<p><i className="fas fa-map-marker-alt"></i> Legolo Rd., Ext.33, Gaborone</p>
		                	<p><i className="fas fa-phone"></i> Phone: (+267) 3911060</p>
		                	<p><i className="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">mail@maharaja.bw</a></p>
		                	<p><i className="fab fa-skype"></i> Skype: Maharaja_BW</p>
	                    </div>
	                    <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
	                    	<h3>Follow us</h3>
	                    	<p>
	                    		<a href="#"><i className="fab fa-facebook fa-3x"></i></a> 
								<a href="#"><i className="fab fa-twitter fa-3x"></i></a>  
								<a href="#"><i className="fab fa-instagram fa-3x"></i></a> 
								
	                    	</p>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div className="footer-bottom">
	        	<div className="container">
	        		<div className="row">
	           			<div className="col-md-5 footer-copyright">
	                    	<p>&copy; Site developed by <a href="#">The Smart-Aleck Media Group</a></p>
	                    </div>
	           			<div className="col-md-7 footer-menu">
	                    	<nav className="navbar navbar-dark navbar-expand-md">
							    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							        <span className="navbar-toggler-icon"></span>
							    </button>
							    <div className="collapse navbar-collapse" id="navbarNav">
							        <ul className="navbar-nav ml-auto">
							            <li className="nav-item">
							                <a className="nav-link scroll-link" href="#Welcome">Top</a>
							            </li>
							            <li className="nav-item">
							                <a className="nav-link scroll-link" href="#Restaurant">Restaurant</a>
							            </li>
							            <li className="nav-item">
							                <a className="nav-link scroll-link" href="#Menu">Menu</a>
							            </li>
							            <li className="nav-item">
							                <a className="nav-link scroll-link" href="#Reservation">Reservation</a>
							            </li>
							            
							        </ul>
							    </div>
							</nav>
	                    </div>
	           		</div>
	        	</div>
	        </div>
        </footer>
    </div>
  </div>
  </div>
  ) } } 
 export default App;