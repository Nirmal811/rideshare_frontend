import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rides from '../src/pages/rides.js';
import AddRide from '../src/pages/AddRide.js';
import LoginPage from '../src/pages/login.js';
import SignUpPage from '../src/pages/signup.js';
import Secrets from '../src/pages/secrets.js';
import Addsecrets from '../src/pages/addsecrets.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/addRide" element={<AddRide />} />
          <Route path="/secrets" element={<Secrets />} />
          <Route path="/addsecret" element={<Addsecrets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
