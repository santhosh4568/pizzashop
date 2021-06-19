import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Home}  exact/>
      <Route path="/about" component={About} />
       <Route path="/menu" component={Menu}/>
    </div>
    </Router>
  );
}

export default App;
