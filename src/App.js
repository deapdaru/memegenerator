import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import MemeEditPage from './views/MemeEditPage';
import Error from './components/layout/Error';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id/:text_boxes" component={MemeEditPage} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
