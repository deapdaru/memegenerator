import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import MemeEditPage from './views/MemeEditPage';
import Error from './components/layout/Error';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {

  // to remove all console.logs() used during development
  useEffect(() => {
		console.log = function() {}
	}, []);

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
