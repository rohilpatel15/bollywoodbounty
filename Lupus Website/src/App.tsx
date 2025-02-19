import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Flyer from "./flyer";
import Sponsors from "./sponsors";
import AboutUs from "./aboutUs";
import Auction from "./auction";
import "./css/NavBar.css";

function NavBar() {
  const location = useLocation();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (location.pathname === path) {
      event.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" onClick={(e) => handleClick(e, "/")}>
            Buy Tickets
          </Link>
        </li>
        <li>
          <Link to="/sponsors" onClick={(e) => handleClick(e, "/sponsors")}>
            Sponsorship Opportunities
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={(e) => handleClick(e, "/about")}>
            More On Lupus
          </Link>
        </li>
        <li>
          <Link to="/auction" onClick={(e) => handleClick(e, "/auction")}>
            Auction Items
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Flyer />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/auction" element={<Auction />} />
      </Routes>
      </div>
    </Router>
  );
}
export default App;
