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
      render() {
        return(
        <div className="bg-fluid">
        <div className="container">
        <div className="container1">
        <div className="main-container">
            <div className="logo"> 
                <h1>Medium</h1>
            </div> &nbsp; &nbsp;

            <div className="searchbox">
                <i className="fas fa-search"></i>
            </div> &nbsp; &nbsp;
            <div className="mem">
                <a href="#">Become a Member</a> 
            </div> &nbsp; &nbsp;
            <Link className="nav-link" to='/login'>
            <div className="login-form">
                <a href="#">Sign in</a> 
            </div> &nbsp; &nbsp;
            </Link>
            
            <div className="login-form">
                <a href="#" className="rect">Get started</a>
            </div>
            
        </div>  
        <div className="tags">
            <a href="#">HOME</a>
            &nbsp; 
            <a href="#">ONEZERO</a>
            &nbsp;  
            <a href="#">ELEMENTAL</a> 
            &nbsp; 
            <a href="#">HEATED</a>
            &nbsp;
            <a href="#" className="t1">TECH</a> 
            &nbsp; 
            <a href="#" className="t1">STARTUPS</a>
            &nbsp; 
            <a href="#" className="t1">SELF</a> 
            &nbsp; 
            <a href="#" className="t1">POLITICS</a> 
            &nbsp; 
            <a href="#" className="t1">HEALTH</a>
            &nbsp; 
            <a href="#" className="t1">DESIGN</a> 
            &nbsp; 
            <a href="#" className="t1">HUMAN PARTS</a>
            &nbsp; 
            <a href="#" className="t1">MORE</a>  
         
        </div> 
        </div>
        <div className="container2">
        <div class="para">
            <Post url="https://a0800e21-d9f5-484f-9593-d1a578f990bd.mock.pstmn.io/data1 " />
          </div> <br/>
          <div class="para">
            <Post url="https://a0800e21-d9f5-484f-9593-d1a578f990bd.mock.pstmn.io/data2" />
          </div> <br/>
          <div class="para" id="Post">
            <Post url="https://a0800e21-d9f5-484f-9593-d1a578f990bd.mock.pstmn.io/data2" />
          </div> <br/>
          <div class="para" id="Post">
            <Post url="https://a0800e21-d9f5-484f-9593-d1a578f990bd.mock.pstmn.io/data1 " />
          </div> 
        </div>
     </div>
 </div>
        );
      }
   }




   class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
                title: "",
                des: "",
                auth:  "",
                readtimes: ""
              
        }
      }

      componentWillMount() {
        this.fetch();
      }

      fetch() {
        // var options={}
        var { url } = this.props;
        
        // alert(url)
        axios.get(url)
          .then((response) => {
        //   if(baseUrl == "https://api.unsplash.com/search/photos/")
        {
            this.setState({
              title: response.data.data.title,
              des:  response.data.data.des,
              auth:  response.data.data.auth,         
              readtimes: response.data.data.readtimes             
            });
          }    
          
          })
        //   .catch((e) => {
        //     alert(e)
        //   });
        .catch(() => {
            alert("exception in proceess")
          });
      }


      render() {
        return(
    <div className="container2">
            <div className="para">
                <Link className="nav-link" to='/posts/:postID'>
                <div className="mainb">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="b1">
                    <p>{this.state.des}</p>
                </div>
                </Link>
                <Link className="nav-link" to='/comment'>
                <div className="auth">
                    <p>{this.state.auth}</p>
                </div>
                </Link>
                <div className="new">
                <div className="pub">
                    <p> {this.state.readtimes} &#9733;</p>
                </div>
                <div className="resp">
                    {/* <i className="fa fa-bookmark-o"></i>  */}
                    <i class="material-icons">&#xe866;</i>
                </div>
                </div>
            </div> <br/>
   </div>
        );
    }

   }

export default HomeComponent;
