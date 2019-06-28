import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  import LoginComponent from './LoginComponent';
  import DataComponent from './DataComponent';
  import PageComponent from './PageComponent';

 class HomeComponent extends Component {

  constructor() {
    super();
    this.state = {
      //tag: search.params.tag,
      data: []
      };
    }
    
  componentDidMount() {
    this.fetch();
  }
  
  fetch(tag) {
   
    console.log("tag=",tag)
    //var url="http://localhost:3000/users/posts";
    console.log("locations params", this.props.location.search)
    if(tag){
     // var url = `http://localhost:3000/users/posts?tag=${tag}`;
     var url = `http://localhost:3000/users/posts/tag/${tag}`;
    } else {
      console.log("fetching all")
    var url = "http://localhost:3000/users/posts";
     }

    // alert(url)

    
    axios.get(url)
          .then((response) => {
            // console.log(response)
            this.setState({
              data: response.data.data           
            });  
          }).catch((e) => {
            alert(e)
          });
        }



      render() {
         console.log("state",this.state)
         console.log("props",this.props)
        var allposts = this.state.data.map(post => <Post key={post.id} post={post}/>);
        return(
        <div className="container">
        <div className="container1">
        <div className="main-container">
            <div className="img">
              <img src={require('./images/images.png')} style={{color: 'black'}} alt="avatar" />
            </div>
            <div className="logo" style={{fontSize: '130%', fontStretch: 'ultra-condensed', fontFamily: 'italic', width: '60%'}}>
                <h1>Meetup</h1>
            </div> &nbsp; &nbsp;
            
            <div className="mem">
                <a href="#">Become a Member</a> 
            </div> &nbsp; &nbsp;
            <Link className="nav-link" to='/login'>
            <div className="login-form">
                <a href="#">Sign in</a> 
            </div> &nbsp; &nbsp;
            </Link>&nbsp;   
            <Link className="nav-link" to='/post'>         
            <div className="login-form1">
                <a href="#" className="rect">Add Post</a>
            </div>
            </Link>
            
            
        </div>  
        <div className="tags">
            <a href="#" onClick={()=>this.fetch()}>HOME</a>
            &nbsp; 
            <a href="#" onClick={()=>this.fetch("ONEZERO")}>ONEZERO</a>
            &nbsp;   
            <a href="#" onClick={()=>this.fetch("HEATED")}>HEATED</a>
            &nbsp;
            <a href="#" onClick={()=>this.fetch("TECH")}>TECH</a> 
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("STARTUPS")}>STARTUPS</a>
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("SELF")}>SELF</a> 
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("POLITICS")}>POLITICS</a> 
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("HEALTH")}>HEALTH</a>
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("DESIGN")}>DESIGN</a> 
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch("HUMAN PARTS")}>HUMAN PARTS</a>
            &nbsp; 
            <a href="#" className="t1" onClick={()=>this.fetch()}>MORE</a>  
         
        </div> 
        </div>
        <div className="container2" id="post1">
          {allposts}
        </div>
        <br />
     </div>
        );
      }
   }




   class Post extends Component {
    constructor(props) {
        super(props);
        
      }

     
     

      render() {
        console.log(this.props.post.id)
        var Date = this.props.post.createdAt
        Date = Date.slice(0,10)
        return(
    <div className="container2" id="post1">
     
            <div className="para">
            {/* <Link className="nav-link" to={{ pathname: '/singlepage', state: { p:this.props.post.id} }} > */}
            <Link className="nav-link" to={{ pathname: '/singlepage', state: { p:this.props.post.id} }} >
                {/* <Link className="nav-link" to='/singlepage' params={{value: this.props.post.id}}> */}
                <div className="mainb">
                    <h1>{this.props.post.titleDescription}</h1>
                </div>
                <div className="b1">
                    <p>{this.props.post.postDescription}</p>
                </div>
                </Link>
                <Link className="nav-link" to={{ pathname: '/comment', state: {p:this.props.post.id}}}>
                
                <div className="auth" style={{width: '10%'}}>
                    <p>{this.props.post.authorName}</p>
                </div>
                </Link>
                <div className="new">
                <div className="pub">
                    <p>{Date}  .  {this.props.post.readTime} &#9733;</p>
                </div>
                <div className="resp">                    
                  <i class="far fa-bookmark"></i>
                </div>
                </div>
            </div> <br/>
   </div>
        );
    }
 
   }

export default HomeComponent;
