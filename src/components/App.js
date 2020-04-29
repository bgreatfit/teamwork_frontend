import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import {Header} from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import SeasonDisplayHome from "./seasonapp/SeasonDisplayHome"
import ImageApp from "./imageapp/ImageApp";
import VideoApp from "./videoapp/VideoApp";

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
                                <Route exact path="/image_app" component={ImageApp}/>
                                <Route exact path="/video_app" component={VideoApp}/>
                          </Switch>
                      </div>
                  </div>

              </>
          </Router>

      )
  }
}

export default App;
