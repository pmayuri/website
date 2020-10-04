import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Page1 from './components/pages/Page1'



function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
        <Route path='/' exact component= {Page1}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
