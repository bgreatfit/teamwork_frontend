import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  CommentDetail from './CommentDetail'
class Comment extends Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {

    }



    componentWillUnmount() {

    }

    render() {
        return (
            <>
                /*-- Comments Form -- */
                <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                /*-- Single Comment --*/
                <CommentDetail
                    name="Mik3 Name"
                    body="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus."
                />

                /*-- Comment with nested comments -- */
                <CommentDetail name="Ken"
                body="1 Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus."
                >
                    <CommentDetail name="Shade" body="2 nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus."
                    />
                    <CommentDetail name="Tolu" body="3 vestibulum in vulputate at, tempus
                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus."
                    />
                </CommentDetail>

            </>
        );
    }
}

Comment.propTypes = {};

export default Comment;
