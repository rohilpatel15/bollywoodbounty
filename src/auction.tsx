import logo from "./assets/Bollywood Bounty logo.png";
import "./css/auction.css";

const Auction = () => {
    return (
        <div className="page-container-auction">
          <img src={logo} className="auctionLogo" alt="Bollywood Bounty Logo" />
    
          <div className="auction-title">
            <h4>Items Available for Auction Coming Soon!</h4>
          </div>
    
          {/* <div className="auction-content">
            <div className="items">
             <h3>Placeholder</h3>
            </div>
    
            <div className="items">
            <h3>Placeholder</h3>
            </div>
          </div> */}
        </div>
      );
  };
  
  export default Auction;