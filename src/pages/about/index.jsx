import Nav from "../../components/nav";
import Footer from "../../components/footer";

// Import Assets
import leftImage from "../../assets/images/left-image.png";
import rightImage from "../../assets/images/right-image.png";

function About() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Navbar */}
      <section class="section padding-top-70 padding-bottom-70" id="features">
        <div class="container">
          {/* Left Image */}
          <div class="row">
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src={leftImage}
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              ></img>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div class="left-heading">
                <h2 class="section-title">Let’s discuss about your project</h2>
              </div>
              <div class="left-text">
                <p>
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                  blandit, at finibus leo efficitur. Nam gravida purus non
                  sapien auctor, ut aliquam magna ullamcorper.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="hr"></div>
            </div>
          </div>

          {/* Right Image */}

          <div class="row padding-top-70">
            <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div class="left-heading">
                <h2 class="section-title">
                  We can help you to grow your business
                </h2>
              </div>
              <div class="left-text">
                <p>
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                  nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                  luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam
                  quis dolor elit.
                </p>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src={rightImage}
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
