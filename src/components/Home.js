import React, {Component} from 'react';
import PostItem from "./PostItem";
import Sidebar from "./layouts/Sidebar";
import Comment from "./layouts/Comment";
// import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }


    componentDidMount() {
        fetch('http://192.168.99.100:9000/api/v1/auth/create-user')
          .then(response => response.json())
          .then(data => this.setState({users: data}))
          // .then(data => {
          //     let user = data.results.map(pic=>{
          //
          //     });
          // })


    }

    render() {
        const {users} = this.state;
        return (
            <>
                <PostItem>
                 /*-- Comments Form -- */
                  <Comment />
                </PostItem>
                 <Sidebar/>
                 <PostItem/>
            </>


        );
    }
}

// Homepage.propTypes = {};

export default Home;
