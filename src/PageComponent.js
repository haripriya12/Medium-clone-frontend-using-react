import React, { Component } from 'react';
import './page5.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.location.state.p,
            data: [{
                title: "...",
                titleDescription: "...",
                authorName: "...",
                postDescription: "...",
                createdAt: "..."
            }]
        }
    }

    componentWillMount() {
        this.fetch();
    }

    fetch() {
        var url = "http://localhost:3000/users/posts/" + this.state.id.toString();

        // alert(url)

        axios.get(url)
            .then((response) => {
                //console.log(response)
                this.setState({
                    //id: response.data.data.id,
                   data: response.data.data
                    //title: response.data.data.title
                });
                console.log(this.state.data[0])
            }).catch((e) => {
                alert(e)
            });
    }




    render() {
        var publishdate = this.state.data[0].createdAt;
        publishdate = publishdate.slice(0, 10);
        // console.log(this.props.post.location.state.p)
        // console.log(this.state)
        //var allposts = this.state.data.map(post => <Post key={post.id} post={post} />);
        return (
            <div className="pcontainer">
                <div className="pfirst">
                    <div className="pleftside">
                        <Link to='/'>
                        <div className="picon" style={{fontSize: '270%'}}>
                                {/* <i className="fab fa-medium"></i> */}
                            <img src={require('./images/images.png')} className="pimagestyle" alt="avatar" />
                        </div>
                        </Link>
                        
                        <div className="pname">
                            <h1>{this.state.data[0].tag}</h1>
                        </div>
                    </div>
                </div>
                <div className="pline2">
                    <h1>{this.state.data[0].title}</h1>
                    {/* {allposts} */}
                </div>
                <div className="psecond">
                    <div className="pcontent">
                        <div className="pb1">
                            <h1>Case Study: {this.state.data[0].title}</h1>
                        </div>
                        <div className="pb2">
                            {this.state.data[0].titleDescription}
                        </div> <br />
                        <div className="pprofile">
                            <div className="img">
                                <img src={require('./images/david.jpeg')} className="pimagestyle" alt="avatar" />
                            </div>
                            <div className="ppname" id="post1">
                            <p>{this.state.data[0].authorName}</p>
                            <p>{publishdate} . {this.state.data[0].readTime}</p>
                                {/* <p>Dave Feldman</p> */}
                                {/* {allposts} */}
                                {/* <p>May 20 . 9 min read</p> */}
                                {/* {allposts} */}
                            </div>
                            {/* <div className="pfollow">
                                <a href="#" className="prect1">Follow</a>
                            </div> */}
                        </div>
                    </div>
                </div> <br />
                <div className="pthird">
                    <div className="pdata">
                        <p>{this.state.data[0].postDescription}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var publishdate = this.props.post.date;
        publishdate = publishdate.slice(0, 10);
        return (
            <div class="pcontainer">
                <div className="pprofile">
                    <div className="ppname" id="post1">
                        <p>{this.props.post.authorName}</p>
                        <p>{publishdate}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default PageComponent;

