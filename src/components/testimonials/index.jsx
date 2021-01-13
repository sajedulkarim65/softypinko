//

function TestimonialItems({
  testIcon,
  testimonialsImage,
  testiName,
  postName,
}) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="team-item">
        <div class="team-content">
          <i>
            <img src={testIcon} alt=""></img>
          </i>
          <p>
            Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas
            scelerisque orci. Maecenas a finibus odio.
          </p>
          <div class="user-image">
            <img src={testimonialsImage} alt="Image"></img>
          </div>
          <div class="team-info">
            <h3 class="user-name">{testiName}</h3>
            <span>{postName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItems;
