//

function WorkSteps({ stepImg, heading, description }) {
  return (
    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
      <a href="#" class="mini-box">
        <i>
          <img src={stepImg} alt=""></img>
        </i>
        <strong>{heading}</strong>
        <span>{description}</span>
      </a>
    </div>
  );
}

export default WorkSteps;
