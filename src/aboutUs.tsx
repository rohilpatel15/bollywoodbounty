import "./css/about.css";
import lupusFacts from "./assets/preview.jpeg";
import lupus from "./assets/lupuslogo1.jpg";

const AboutUs = () => {
  return (
    <div className="page-container-about">
      <div className="content-wrapper">
        <div className="lupusImg">
          <img src={lupusFacts} alt="Lupus Facts" />
        </div>

        <div className="lupusInfo">
          <h1>About Lupus</h1>
          <p>
            Lupus is a chronic autoimmune disease that can damage any part of
            the body.
          </p>
          <p>
            It is a disease of flares (the symptoms worsen and you feel ill) and
            remissions (the symptoms improve and you feel better).
          </p>
          <p>
            Lupus most commonly affects the skin, joints, and organs (Ex.
            kidneys and heart) inside the body.
          </p>
          <p>
            Some people with lupus have only mild symptoms, while others have
            more serious problems.
          </p>
          <p>9 out of 10 people with lupus are women.</p>
          <h5 className="lupusLink">
            All Information provided by:{" "}
            <a
              className="infoLink"
              href="https://www.lupus.org/resources/what-is-lupus"
            >
              The Lupus Foundation of America
            </a>
          </h5>

          <div className="lupusLogoAbout">
            <img src={lupus} alt="Support Lupus Awareness" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
