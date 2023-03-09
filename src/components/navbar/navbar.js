import { Nav } from "react-bootstrap";

const Navbar =(
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );

  export default Navbar;