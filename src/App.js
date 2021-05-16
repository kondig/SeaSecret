import logo from './logo.svg';
import './App.css';
//components
import {Main} from './components/Main';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Main />
      <div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;



//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//    Learn
//  </a>
//</header>

