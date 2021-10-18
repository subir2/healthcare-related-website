import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
  <Router>
          <Switch>
            <Route exact path="/">
          <Home></Home>
            </Route>
            
            <Route path="/home">
            <Home></Home>
            </Route>

            <Route path="/services">
              
           <Service></Service>
              
            </Route>

            <Route path="/Details/:id">
       <Details></Details>
                 
               </Route>

            <Route path="/about">
              
        
              
            </Route>
            
            <Route path="/contact">
              
            
              
            </Route>
            
            
            
            <Route path="*">
            
            </Route>
           
           
          </Switch>
        </Router>
    
    </div>
  );
}

export default App;
