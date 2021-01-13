//

function Featurs({ featureIcons, title, description }) {
  return (
    <div
      class="col-lg-4 col-md-6 col-sm-6 col-12"
      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
    >
      <div class="features-small-item">
        <div class="icon">
          <i>
            <img src={featureIcons} alt="Icon"></img>
          </i>
        </div>
        <h5 class="features-title">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Featurs;
