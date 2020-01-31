import React, {Component} from 'react';
import Home from './Home';
import {Header} from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import {HashRouter as Router, Route,Switch} from 'react-router-dom';

class App extends Component{
  render() {
      return (
          <Router>
              <>
                  <Header/>
                  <div className="container">

                      <div className="row">
                          <Home/>
                          <Switch>
                                <Route exact path="/login" component={Home}/>
                                <Route exact path="/register" component={''}/>
                            </Switch>
                      </div>
                  </div>

              </>
          </Router>

      )
  }
}

export default App;
