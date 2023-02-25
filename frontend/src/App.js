import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Address from "./pages/Address";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="na-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/create"} className="na-link">
              Create
            </Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/address/:name" element={<Address />} />
          {/* <Route path="/address/:name" element={<Address />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
