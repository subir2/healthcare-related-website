import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Details from './components/Details/Details';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div  className="App">
    
 <AuthProvider>
 <Router>
 <Menu/>
          <Switch>
            <Route exact path="/">
          <Home></Home>
            </Route>
            
            <Route path="/home">
            <Home></Home>
            </Route>

            <PrivateRoute path="/services">
              
           <Service></Service>
              
            </PrivateRoute>

            <PrivateRoute path="/Details/:id">
       <Details></Details>
                 
               </PrivateRoute>

            <Route path="/about">
              <About></About>
        
              
            </Route>
            
            <Route path="/contact">
              
            <Contact></Contact>
              
            </Route>
            
            <Route path="/Login">
              
           <Login></Login>
                
              </Route>
              
            
            <Route path="*">
            
            </Route>
           
           
          </Switch>
        </Router>
 </AuthProvider>
    
    </div>
  );
}

export default App;
