import React, {Component} from 'react';
import './Post.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
 class PostComponent extends Component {

    constructor() {
        super();
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }


      render() {
        return(
            <div className="postcontainer">
             <form action={`http://localhost:3000/users/post`} method="post">   
            <div className="postline1">
            <div className="postname">
               {/* <i className="fab fa-medium"></i> */}
               <Link to='/'>
                    <div className="picon" style={{fontSize: '70%'}}>
                        <img src={require('./images/images.png')} className="pimagestyle" alt="avatar" />
                    </div>
                </Link>
               &nbsp;
               <a href="#">Drafts</a>
               &nbsp;
               <a href="#">Saved</a>
            </div>
            <div className="posticons">
                {/* <a href="#">Ready to Publish</a> */}
                {/* <input style={{border: "none", backgroundColor: "none", color: "green"}} type="submit" value="Ready to publish" />
                &nbsp; &nbsp; */}
                <a href="#">&hellip;</a>
                &nbsp; &nbsp;
                <a href="#" className="fa fa-bell"></a>
                &nbsp; &nbsp;
                {/* <div>
                <button onClick={this.showMenu} className="p-circle">p</button>
                {
                    this.state.showMenu
                    ?(
                        <div className="menu">
                            <button>New story</button>
                            <button>Bookmark</button>
                        </div>
                    )
                    : (
                        null
                    )
                }
                </div> */}

            </div>
        </div>
        <div className="postcontainer2">
            <div className="postdes">
                <p>
                    <textarea type="text" name="postDescription" rows="13" placeholder="&#10753;  Tell your story..." />
                </p>
                <p>
                    <input type="text" name="title" placeholder="add a title" />
                </p>
                <p>
                    <input type="text" name="titleDescription" placeholder="enter title description" />
                </p>
                <p>
                    <input type="text" name="authorName" placeholder="enter author" />
                </p>
                <p>
                    <input type="text" name="readTime" placeholder="read time" />
                </p>  
                <p>
                    <input type="text" name="tag" placeholder="select a tag" />
                </p>
                <p>
                    <input type="submit" value="Publish Now" />
                </p> 
            </div>
        </div>
        </form>

        </div>
        );
      }
   }


export default PostComponent;
