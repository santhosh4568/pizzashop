import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Home}  exact/>
      <Route path="/about" component={About} />
       
    </div>
    </Router>
  );
}

export default App;
