import React, {Component} from "react";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ""}
    }

    componentDidMount() {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleTermSubmit(this.state.term);


    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>

                <input value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                </form>
            </div>
        )
    }
}
export default SearchBar;