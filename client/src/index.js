import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Callback from './components/Callback';
import Footer from "./components/Footer";
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={AboutMe}/>
        <Route path="/special" component={Photos} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
      
      <Footer />
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));