import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {term:''}
    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log(this.state.term)
    };
    onInputChange = (e)=>{
        this.setState({term:e.target.value});
        console.log(e.target.value)
    };

    render() {
        return (
            <>
                <form className="yy" onSubmit={this.onFormSubmit}>
                    <input
                           type="text"
                           className="yyy"
                           onChange={e=>this.setState({term:e.target.value})}
                           value={this.state.term}
                            />
                </form>
            </>
        );
    }
}

InputField.propTypes = {};

export default InputField;
