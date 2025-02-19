import "./css/flyer.css";
import logo from "./assets/Bollywood Bounty logo.png";
import qr from "./assets/qr code.jpg";
import lupus from "./assets/lupuslogo1.jpg";

const Flyer = () => {
  return (
    <div className="flyer-container">
      <div className="flyer-wrapper">
        <div className="logoColumn">
          <img src={logo} className="flyerLogo" alt="Bollywood Bounty Logo" />
          <img src={lupus} className="lupusLogo" alt="Lupus Logo" />
        </div>

        <div className="flyer-content">
          <h2 className="flyer-subtitle">A NIGHT OF GLAMOUR & GIVING</h2>
          <p className="flyer-text">
            To Support the Lupus Foundation of America
          </p>

          <div className="flyer-details">
            <div>
              <strong>MAY 17, 2025</strong>
              <p>6:00 PM - 9:00 PM</p>
            </div>
            <div>
              <strong>HOTEL NEXUS</strong>
              <p>2140 N Northgate Way</p>
              <p>Seattle, WA 98133</p>
            </div>
          </div>

          <p className="flyer-description">
            Please join us for a night of fundraising complete with
            dinner, drinks, dancing, henna, trivia, and more!
          </p>
          <p className="flyer-description">Scan the QR code below for tickets!</p>
          <div className="flyer-qr">
            <img src={qr} alt="QR Code" />
            <a
              className="link"
              href="https://lupusfoundationofamerica.regfox.com/bollywood-bounty-a-night-of-glamour-giving"
            >
              Or Click Here!
            </a>
          </div>

          <div className="flyer-contact">
            <p>For More Information Contact:</p>
            <p>sanjay.mishra@comcast.net</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
