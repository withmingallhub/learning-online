import './App.css';
import Header from './components/header';
import Rout  from './router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header></Header>
        </header>
        <div>
          <Rout></Rout>
        </div>
      </Router>
    </div>
  );
}

export default App;
