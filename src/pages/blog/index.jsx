// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import BlogItem from "../../components/blogItem";

// Import Assets
import blogItem01 from "../../assets/images/blog-item-02.png";
import blogItem02 from "../../assets/images/blog-item-03.png";
import blogItem03 from "../../assets/images/blog-item-01.png";

function Blog() {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      <section class="section" id="blog">
        <div class="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Blog Entries</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Integer molestie aliquam gravida. Nullam nec arcu finibus,
                  imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                  molestie.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Blog Items ***** --> */}
          <div class="row">
            <BlogItem
              blogImg={blogItem01}
              blogLinks="Vivamus ac vehicula dui"
              blogText="Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
              Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas
              augue."
            />
            <BlogItem
              blogImg={blogItem02}
              blogLinks="Phasellus convallis augue"
              blogText="Aliquam commodo ornare nisl, et scelerisque nisl dignissim
              ac. Vestibulum finibus urna ut velit venenatis, vel ultrices
              sapien mattis."
            />
            <BlogItem
              blogImg={blogItem03}
              blogLinks="Nam gravida purus non"
              blogText="Maecenas eu erat vitae dui convallis consequat vel gravida
              nulla. Vestibulum finibus euismod odio, ut tempus enim
              varius eu."
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Blog;
