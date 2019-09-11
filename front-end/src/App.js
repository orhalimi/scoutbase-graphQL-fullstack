import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PageIndex from './pages/pageIndex/PageIndex';
import PageCountries from './pages/pageCountries/PageCountries';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageIndex} />
        <Route path="/countries/:code?" component={PageCountries} />
      </Switch>
    </div>
  );
}

export default App;
