import logo from './logo.svg';
import './App.css';
import ParticlesBg from 'particles-bg';

import {
  BrowserRouter as Router
} from "react-router-dom";
import Home from './Pages/Home/Home';
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
