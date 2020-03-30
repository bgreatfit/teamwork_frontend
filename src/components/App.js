import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import {Header} from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import SeasonDisplayHome from "./SeasonDisplayHome"
import ImageList from "./ImageList";

class App extends Component{
  render() {

      return (
          <Router>
              <>
                  <Header/>
                  <div className="container">

                      <div className="row">


                          <Switch>

                                <Route exact path="/" component={Home}/>
                                <Route exact path="/login" component={Home}/>
                                <Route exact path="/season_display" component={SeasonDisplayHome}/>
                                <Route exact path="/imagelist" component={ImageList}/>
                          </Switch>
                      </div>
                  </div>

              </>
          </Router>

      )
  }
}

export default App;
