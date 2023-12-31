import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menssection from './Menssection';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import Sectionfive from './Sectionfive';
import Sectionfour from './Sectionfour';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './About';
import Contactus from './Contactus';
import Career from './Career';

function App() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
        <Route path="/about" exact element={<About />} />
          <Route path="/" exact element={<Career />} />
          <Route path="/contact" exact element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
