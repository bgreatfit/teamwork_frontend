import React, {Component} from 'react'
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner";

export default class SeasonDisplayHome extends  Component{
    constructor(props){
        super(props);
        this.state = {articles: [], lat: null, errorMessage:null};
    }

    componentDidMount() {
        this.getLocation();

    }

    getLocation(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errorMessage:err.message}))
    }
    renderContent(){
        if(this.state.errorMessage  && !this.state.lat){
            return <h1>Error: {this.state.errorMessage}</h1>
        }
        if( this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Allow app to read location"/>

    }

    render() {

        return(
            <>
                {this.renderContent()}

            </>
        )
    }
}