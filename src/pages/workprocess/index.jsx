// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import WorkSteps from "../../components/workItem";

// Import Assets
import workProcessItem from "../../assets/images/work-process-item-01.png";

function WorkProcess() {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      <section class="mini" id="work-process">
        <div class="mini-content">
          <div class="container">
            <div class="row">
              <div class="offset-lg-3 col-lg-6">
                <div class="info">
                  <h1>Work Process</h1>
                  <p>
                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                    imperdiet interdum, vehicula ut ex. Donec ante diam.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Process*/}
            <div class="row">
              <WorkSteps
                stepImg={workProcessItem}
                heading="Get Ideas"
                description="Godard pabst prism fam cliche."
              />
              <WorkSteps
                stepImg={workProcessItem}
                heading="Sketch Up"
                description="Godard pabst prism fam cliche."
              />
              <WorkSteps
                stepImg={workProcessItem}
                heading="Discuss"
                description="Godard pabst prism fam cliche."
              />
              <WorkSteps
                stepImg={workProcessItem}
                heading="Revise"
                description="Godard pabst prism fam cliche."
              />
              <WorkSteps
                stepImg={workProcessItem}
                heading="Approve"
                description="Godard pabst prism fam cliche."
              />
              <WorkSteps
                stepImg={workProcessItem}
                heading="Launch"
                description="Godard pabst prism fam cliche."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default WorkProcess;
