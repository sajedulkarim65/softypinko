
// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Features from '../../components/featurs'
import Counter from '../../components/counter'
// Import Assets
import featuredItem01 from "../../assets/images/featured-item-01.png";

function Home() {
  return (
    <div className="App">
      {/* <!-- ***** Header Area Start ***** --> */}
      <Nav />

      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div class="welcome-area" id="welcome">
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>
                  We provide the best <strong>strategy</strong>
                  <br></br>to grow up your <strong>business</strong>
                </h1>
                <p>
                  Softy Pinko is a professional Bootstrap 4.0 theme designed by
                  Template Mo for your company at absolutely free of charge
                </p>
                <a href="#features" class="main-button-slider">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ***** Features Small Start ***** --> */}
      <section class="section home-feature">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <Features 
                  featureIcons={featuredItem01} 
                  title="Modern Strategy"
                  description="Customize anything in this template to fit your website needs"
                />
                <Features 
                  featureIcons={featuredItem01} 
                  title="Best Relationship"
                  description="Customize anything in this template to fit your website needs"
                />
                <Features 
                  featureIcons={featuredItem01} 
                  title="Ultimate Marketing"
                  description="Customize anything in this template to fit your website needs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Counter Part Start ***** --> */}
      <section class="counter">
        <div class="content">
          <div class="container">
            <div class="row">
              {/* Counter */}
              <Counter counter="126" counterName="Projects" />
              <Counter counter="63" counterName="Happy Clients" />
              <Counter counter="18" counterName="Awards Wins" />
              <Counter counter="27" counterName="Countries" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ***** Footer Start ***** --> */}
      <Footer />
    </div>
  );
}

export default Home;
