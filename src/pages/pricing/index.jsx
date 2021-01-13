// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import PriceItems from "../../components/priceItems";

function Pricing() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      <section class="section colored" id="pricing-plans">
        <div class="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Pricing Plans</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Pricing Item Start ***** --> */}
          <div class="row">
            <PriceItems
              plans="Starter"
              planValue="14.50"
              planTime="monthly"
              benefit_1="60"
              benefit_2="600"
              supports="15"
            />
            <PriceItems
              plans="Premium"
              planValue="21.50"
              planTime="monthly"
              benefit_1="120"
              benefit_2="1200"
              supports="30"
            />
            <PriceItems
              plans="Advanced"
              planValue="42.00"
              planTime="monthly"
              benefit_1="250"
              benefit_2="5000"
              supports="50"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Pricing;
