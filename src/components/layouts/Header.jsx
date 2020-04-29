import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Header extends Component {


    render(){

        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" link="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link  className="nav-link" to="/">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/season_display">Season App</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/image_app">Image App</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/video_app">Video App</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" link="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )


    }
}
