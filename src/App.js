import React, {} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header'
import Classes from './Classes';
import classStream from './classStream1';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Classes/>
          </Route>
          <Route path="/classStream1" component={classStream}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// rfce (shortcut)
