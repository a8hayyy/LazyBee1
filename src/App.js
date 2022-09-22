import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
