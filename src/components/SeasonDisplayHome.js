import React, {Component} from 'react'
import SeasonDisplay from "./SeasonDisplay"

export default class SeasonDisplayHome extends  Component{
    constructor(props){
        super(props);
        this.state = {articles: [], lat: null, errorMessage:null};
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errorMessage:err.message}))
    }

    render() {
        return(
            <>
                {this.state.errorMessage  && !this.state.lat &&
                  <h1>Error: {this.state.errorMessage} </h1>
                }
                {this.state.lat  && this.state.lat &&
                    <SeasonDisplay lat={this.state.lat} />
                }
                {!this.state.lat  && !this.state.errorMessage &&
                  <h1>Location: Loading...</h1>
                }
            </>
        )
    }
}