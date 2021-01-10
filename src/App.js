import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './routes/Gallery';
import About from './routes/About';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
