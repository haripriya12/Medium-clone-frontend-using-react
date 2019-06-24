import React, {Component} from 'react';
import './data.css';
import axios from 'axios';
// import david from './david.jpeg'
// import images from './images'
 class DataComponent extends Component {
      render() {
        return(
            <div className="dcontainer">
                <div className="dline1">
                <p>Responses</p>
                </div> 
                <div className="dline2">
                    <textarea className="textbox" type="text" id="mytext" rows="4" cols="48" placeholder="&#128172; Write a response" />
                </div>
                <div className="dline3">
                <h3>Conversation between <span className="dhigh">David Martinez</span> and <span className="dhigh">Dave Feldman.</span></h3>
                </div>
                <div className="dcard">
                    <div className="dprofile">
                        <div className="img">
                            <img src={require('./images/david.jpeg')} className="dimagestyle" alt="avatar" />
                        </div>
                        &nbsp;
                        <div className="dpname">
                            <p><span className="dhigh">David Martinez</span></p>
                            <p>Mar 29</p>
                        </div>
                    </div>
                    <div className="dmsg">
                    <Post url="https://a0800e21-d9f5-484f-9593-d1a578f990bd.mock.pstmn.io/comment " />

                    {/* <h3>VP Product Design at Heap in San Francisco. Former
                        PM and design manager at Google, Facebook, 
                        TechCrunch, Emu, Yahoo. Behavioral science enthusiast.
                        I’m hiring.Indeed! And it’s already improved our speed
                        of execution as a product development team, too. It’s 
                        easier and faster to produce consistent UI as we build 
                        new functionality
                    </h3> */}
                    </div> 
                    <div className="dreply">
                    <div className="dclaps">
                        <p>&#128079; 1</p>
                    </div>
                    <div className="dresponse">
                        <h3>1 response <i className="fa">&#xf097;</i> </h3>
                    </div>
                </div>  
                </div>
                <div className="dcard">
                <div className="dprofile">
                    <div className="img">
                        <img src={require('./images/david.jpeg')} className="dimagestyle" alt="avatar" />
                    </div>
                    &nbsp;
                    <div className="dpname">
                        <p><span className="high">Dave Feldman</span></p>
                        <p>Mar 29</p>
                    </div>
                </div>
                <div className="dmsg">
                    <h3>Thanks!</h3>
                </div> 
                <div className="dreply">
                    <div className="dclaps">
                        <p>&#128079;</p>
                    </div>
                    <div className="dresponse">
                        <h3> <i className="fa">&#xf097;</i> </h3>
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
            commentData:""
              
        }
      }

      componentWillMount() {
        this.fetch();
      }
      fetch() {
        var { url } = this.props;
        
        //alert(url)
        axios.get(url)
          .then((response) => {
        {
            this.setState({
              commentData: response.data.commentData           
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
              <div className="dmsg">
                  <h3>{this.state.commentData}</h3>
              </div>
          );
      }
   }


export default DataComponent;
