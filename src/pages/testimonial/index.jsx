// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import TestimonialItems from "../../components/testimonials";
// Import Assets
import testimonialIcon from "../../assets/images/testimonial-icon.png";

function Testimonials() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      <section class="section" id="testimonials">
        <div class="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">What do they say?</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                  nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                  libero.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Testimonials Item Start ***** --> */}
          <div class="row">
            <TestimonialItems
              testIcon={testimonialIcon}
              testimonialsImage="http://placehold.it/60x60"
              testiName="Catherine Soft"
              postName="Managing Director"
            />
            <TestimonialItems
              testIcon={testimonialIcon}
              testimonialsImage="http://placehold.it/60x60"
              testiName="David Martin"
              postName="Digital Marketer"
            />
            <TestimonialItems
              testIcon={testimonialIcon}
              testimonialsImage="http://placehold.it/60x60"
              testiName="Kelvin Wood"
              postName="Website Manager"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Testimonials;
