import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Home}  exact/>
      <Route path="/about" component={About} />
       <Route path="/menu" component={Menu}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={Register}/>
    </div>
    </Router>
  );
}

export default App;
