// Import Components
import Button from "../button";

function BlogItem({ blogImg, blogLinks, blogText }) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="blog-post-thumb">
        <div class="img">
          <img src={blogImg} alt="Image"></img>
        </div>
        <div class="blog-content">
          <h3>
            <a href="#">{blogLinks}</a>
          </h3>
          <div class="text">{blogText}</div>
          <Button btnName="Read More" />
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
