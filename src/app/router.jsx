import { Router, Redirect } from "@reach/router";

// Import Custom Components
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import WorkProcessPage from "../pages/workprocess";
import TestimonialPage from "../pages/testimonial";
import PricingPage from "../pages/pricing";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";
import NotFoundPage from "../pages/404";

function AppRouter() {
  return (
    <Router>
      <HomePage path="/" />
      <Redirect from="about" to="/" noThrow />
      <AboutPage path="/about/:aboutID" />
      <WorkProcessPage path="work/:workID" />
      <TestimonialPage path="testimonial/:testID" />
      <PricingPage path="pricing/:priceID" />
      <BlogPage path="blog/:blogID" />
      <ContactPage path="contact/:contactID" />
      <NotFoundPage default />
    </Router>
  );
}

export default AppRouter;
