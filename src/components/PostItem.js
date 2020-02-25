import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './layouts/Comment'

class PostItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
        //     "eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTgwODg0NDQ4LCJqdGkiOiIzYjJhN2M2ZDc3NzE0ZjlhYjExYjk1YmQ3NjY5NGVhYyIsInVzZXJfaWQiOjJ9." +
        //     "MWX-AuzePSb4EUyEcPm2MGPtharspcRfSARsWd8XDe8";
        // fetch('http://192.168.99.100:9000/api/v1/articles', {
        //     'method': 'GET',
        //     'headers': {'Authorization': `Bearer ${key}`}
        // })
        //     .then(response => response.json())
        //     .then(data => this.setState({articles: data}));
        //this.getLocation();
        // .then(data => {
        //     let user = data.results.map(pic=>{
        //
        //     });
        // })


    }


    render() {
        // const {articles} = this.state;
        // console.log('dataum', articles);

        return (

            <div className="col-lg-8">



                {/*{articles.map((article, index) => {*/}

                {/*    console.log(article)*/}

                {/*})};*/}

                /* -- Title -- */
                <h1 className="mt-4">Post Title</h1>

                /*-- Author -- */
                <p className="lead">
                    by
                    <a href="#">Start Bootstrap</a>
                </p>

                <hr/>

                /*-- Date/Time -- */
                <p>Posted on January 1, 2019 at 12:00 PM</p>

                <hr/>

                /* -- Preview Image -- */
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>

                <hr/>

                /* -- Post Content -- */
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
                    vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam
                    quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus
                    doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab
                    tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem
                    iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic
                    porro optio ratione repellat perspiciatis. Enim, iure!</p>

                <blockquote className="blockquote">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid,
                    animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe
                    minima ab quo voluptatem obcaecati?</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt,
                    ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas
                    illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

                <hr/>


                {this.props.children}

            </div>
        );
    }
}

PostItem.propTypes = {};

export default PostItem;
