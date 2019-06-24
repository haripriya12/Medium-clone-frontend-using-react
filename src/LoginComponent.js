import React, {Component} from 'react';
import './Login.css';
 class LoginComponent extends Component {

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
            <div className="lcontainer">
            <div className="line1">
            <div className="name">
               <i className="fab fa-medium"></i>
               &nbsp;
               <a href="#">Drafts</a>
               &nbsp;
               <a href="#">Saved</a>
            </div>
            <div className="icons">
                <a href="#">Ready to Publish</a>
                &nbsp; &nbsp;
                <a href="#">&hellip;</a>
                &nbsp; &nbsp;
                <a href="#" className="fa fa-bell"></a>
                &nbsp; &nbsp;
                <div>
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
                </div>

            </div>
        </div>
        <div className="lcontainer2">
            <div className="line2a">
                <h3>Test Blog Title</h3>
            </div>
            <div className="line2b">
                <p>
                    <textarea rows="5" cols="50" name="comment" form="usrform" placeholder="&#10753;  Tell your story...">
                    </textarea>
                </p>
            </div>
        </div>
        <div className="lcontainer3">
            <h1>Sign in with email</h1>
            <div className="data1">
                <h4>Enter the email address with your sccount
                and we'll send a magic link to your inbox.
                </h4>
            </div>
            <div className="mail">
                <p>Your email</p>
                <p>
                    <input type="text" id="mytext" rows="19" cols="30" value="enter your mail" />
                </p>
                <p>
                    <input type="button" value="Continue" />
                </p> 
            </div>
            <div className="fylo">
                <p className="style">&#8592; All sign in option 
                </p>
            </div>
        </div>
        </div>
        );
      }
   }


export default LoginComponent;
