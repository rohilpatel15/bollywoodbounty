import "./css/sponsors.css";
import logo from "/public/Bollywood Bounty logo-8894db62.png";

const Sponsors = () => {
  return (
    <div className="page-container-sponsors">
      <img src={logo} className="sponsorLogo" alt="Bollywood Bounty Logo" />

      <div className="sponsor-title">
        <h4>Sponsorship Opportunities</h4>
        <p>If You Are Interested Please Contact: sanjay.mishra@comcast.net</p>
        <p>Or: anthony.donnell.jones@gmail.com</p>
      </div>

      <div className="sponsor-content">
        <div className="tiers">
          <h3 id="bronze">Bronze: $1,000</h3>
            <ul>
              <li>Logo on Ticketing Website</li>
              <li>Signage Throughout Venue (Welcome Sign, Media Wall)</li>
              <li>Social Media Blasts</li>
              <li>Group Thank You Post (After Event)</li>
              <li>2 Complimentary Event Tickets</li>
            </ul>
          <h3 id="silver">Silver: $2,000</h3>
            <ul>
              <li>Logo on Ticketing Website</li>
              <li>Signage Throughout Venue (Welcome Sign, Media Wall)</li>
              <li>Social Media Blasts</li>
              <li>Group Thank You Post (After Event)</li>
              <li>Hyperlink to Website on All Email Blasts</li>
              <li>Live Announcement at Event</li>
              <li>4 Complimentary Event Tickets</li>
            </ul>
          <h3 id="gold">Gold: $3,000</h3>
            <ul>
              <li>Logo on Ticketing Website</li>
              <li>Signage Throughout Venue (Welcome Sign, Media Wall)</li>
              <li>Tabletop Signage</li>
              <li>Individual Highlight on Social Media</li>
              <li>Hyperlink to Website on All Email Blasts</li>
              <li>Live Announcement at Event</li>
              <li>Individual Thank You Post With Picture (After Event)</li>
              <li>6 Complimentary Event Tickets</li>
            </ul>
        </div>

        <div className="tiers">
          <h1>Exclusive Sponsorship Opportunities</h1>
          <h2>Trivia Exclusive: $2,500</h2>
            <ul>
              <li>All Silver Sponsorship Amenitites</li>
              <li>Company Logo on Trivia Card</li>
              <li>Verbal Acknowledgement as Exclusive Sponsor</li>
            </ul>
          <h2>Henna Exclusive: $2,500</h2>
            <ul>
              <li>All Silver Sponsorship Amenitites</li>
              <li>Company Logo on Henna Station Signage</li>
              <li>Verbal Acknowledgement as Exclusive Sponsor</li>
            </ul>
          <h2>Photobooth Exclusive: $2,500</h2>
            <ul>
              <li>All Silver Sponsorship Amenitites</li>
              <li>Company Logo on Photobooth Signage</li>
              <li>Verbal Acknowledgement as Exclusive Sponsor</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
