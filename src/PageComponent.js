import React, {Component} from 'react';
import './page5.css';
 class PageComponent extends Component {
      render() {
        return(
            <div className="pcontainer">
            <div className="pfirst">        
            <div className="pleftside">
            <div className="picon">
                <i className="fab fa-medium"></i>
            </div>
            &nbsp;
            <div className="pname">
                <h1>Modus</h1>
            </div>
            </div>
            <div className="prightside">
            <div className="psignin">
                <a href="#">Sign in</a> 
            </div>
            <div className="pstarted">
                <a href="#" className="prect">Get started</a>
            </div>
            </div>    
            </div>
            <div className="pline2">
                <h1>OneZero</h1>
            </div>
            <div className="psecond">
            <div className="pcontent">
                <div className="pb1">
                    <h1>Case Study: 'How We Redesigned Our <br/>
                        App's UI in Only Three Months' 
                    </h1>
                </div>                     
                <div className="pb2">
                    Collaboration and flexbility are the names of the game
                </div> <br/>
                    <div className="pprofile">
                        <div className="img">
                            <img src={require('./images/david.jpeg')} className="pimagestyle" alt="avatar" />
                        </div>
                        <div className="ppname">
                            <p>Dave Feldman</p>
                            <p>May 20 . 9 min read</p>
                        </div>
                        <div className="pfollow">
                            <a href="#" className="prect1">Follow</a>
                        </div> 
                    </div> 
            </div> 
            </div> <br/><br/>
            <div className="pthird">
                    <div className="pdata">
                    <p><span className="pthird-first-letter">W</span>e were well prepared for hatred when we launched the redesign,but we 
                        didn't get it.The reception was overwhelmingly positive. A post-launch,in-
                        product survey asked customers how much they liked the new look, and on
                        average they gave it 7.6 out of 10.( if that seems low ,recall that "nobody
                        notices was an accountable outcome")
                    </p> <br/>
                    <p>
                        Thats not to say everyone loved it. Here's some customers feedback, both
                        good and bad:
                    </p>
                    <p>&#8226; Products like Heap must show far more data at a far greater density than 
                        the average consumer app
                    </p>
                    <p>&#8226; Many products, especially in the consumer space</p>
                    <p>&#8226; We knew we wanted something modern, but we didn’t just want to look like
                        everything else; we were hoping to be at least a little distinct.
                    </p>
                    <p>&#8226; Heap is an app, not a website; a desktop thing, not a mobile thing.</p>
                    </div>
                </div>                    
            </div> 
        );
      }
   }


export default PageComponent;

