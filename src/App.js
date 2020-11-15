import React, {} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Classes from './Classes';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header/>
            <Classes/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// rfce (shortcut)
