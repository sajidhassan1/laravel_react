import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Create from "./pages/Create";
import Address from "./pages/Address";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create" element={<Create />} />
          <Route path="/address/:name" element={<Address />} />
          <Route path="/thankYou" element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
