import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedBooks from './pages/SavedBooks';
import Search from './pages/Search';
import Footer from './components/Footer';
import Nav from './components/Nav';
import background from './assets/background-02-02.png';

function App() {
  return (
    <div className="h-100" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact patch="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooks} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
}


export default App;
