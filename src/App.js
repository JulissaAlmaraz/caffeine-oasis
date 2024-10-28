
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/menu" element={<Menu/>}/>
     <Route path="/about" element={<About/>}/>
    </Routes>
    </Router>
  );
}

export default App;
