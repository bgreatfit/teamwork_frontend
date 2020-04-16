import React, {Component} from "react";
import InputField from "./InputField"
import unsplash_get from "../api/unsplash";
import ImageList from "./ImageList"
import Spinner from "./Spinner";

class ImageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {images: [], loader: false}
    }

    onSubmit = async (term) => {
        console.log(term);

        try {
            this.setState({loader: true});
            let response = await unsplash_get('search/photos', term);
            let result = await response.json();
            this.setState({images: result.results, loader: false});
        } catch (e) {
            this.setState({loader: false});
            console.log(e.message)
        }


        // .then(response => response.json())
        // .then(data => console.log(data));
    };


    render() {

        const showLoader = this.state.loader;
        let loader;
        console.log('here log');
        if (showLoader) {
            console.log('here 2log');
            loader = <Spinner message="Allow app to read location"/>
        }


        return (
            <div>
                <InputField onSubmit={this.onSubmit}/>
                {loader}
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default ImageApp;