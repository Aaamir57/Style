import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menssection from './Menssection';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import Sectionfive from './Sectionfive';
import Sectionfour from './Sectionfour';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menssection/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <Sectionfive/>
      <Footer/>
    </div>
  );
}

export default App;
