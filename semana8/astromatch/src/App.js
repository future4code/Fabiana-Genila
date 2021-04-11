import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MatchCards from './components/MatchCards'
import MatchScreen from './components/MatchScreen'
import ClearButton from './components/ClearButton'
import Header from './components/Header'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="App-Container">
        <Router>
          <Switch>
            <Route path="/matchscreen">
              <Header backButton="/" />
              <MatchScreen />
            </Route>
            <Route path="/">
              <Header />
              <MatchCards />
              <ClearButton />
            </Route>
          </Switch>
        </Router>
       
      </div>
    </div>
  );
}

export default App;
