import React, {Component} from "react"
import './ImageList.css'
class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {span:0}
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        console.log(this.imageRef)

    }
    setSpans = ()=> {
        const span  = this.imageRef.current.clientHeight/10;
        this.setState({span});
    };

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
                <div ref={this.divRef} className="house"/> <p>Here</p></div>

        )
    }

}

export default ImageCard;