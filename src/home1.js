import React, { Component } from 'react';  
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './PostComponent.css';
import logo from './images/logo.png'
import avatar from './images/avatar.png';
import axios from 'axios';
import { Redirect } from 'react-router';

 class PostComponent1 extends Component  {
    constructor(props) {
        super(props);
        
        this.state  = {
          posts : [],
          comments : [],
          id: this.props.post.location.state.p,
          liked: false,
          redirect : false
          
        };
       
        this.handleDelete= this.handleDelete.bind(this);
        this.handleDeleteComment= this.handleDeleteComment.bind(this);
      }
    
      handleDelete(event)
      {
        event.preventDefault();
        axios.delete("/topics/"+this.state.id,{...this.state}).
        then( () =>
        this.setState({redirect:true})
        );
      }

      handleDeleteComment(id)
      {
       // event.preventDefault();
        console.log(id)
        axios.delete("/topics/"+this.state.id+"/comments/"+id,{...this.state}).
        then( () =>
        this.setState({redirect:true})
        );
      }
      componentDidMount() 
      {
          console.log("entered Mount");
        this.fetch();
      }
    
      fetch() 
      {
       // var self = this;
       console.log("entered fetch");
       // this.setState({flag:1});
        //console.log("flag=", this.state.flag);
       
        var url= "/topics/"+this.state.id.toString();
        axios.get(url)
        .then((response) => {
            console.log(response.data.topic.comments)
            this.setState({
                posts : response.data.topic,
                comments: response.data.topic.comments
            });
           
          })
         
          
      }
    
    render(){
        const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

      var all = this.state.posts;
        var posttag;
          const category = this.state.posts.category;
          if (category=="discourse"){
            posttag = <p><span className="glyphicon glyphicon-stop dis"></span>discourse</p>
          }
          else if ( category == "tech"){
            posttag = <p><span className="glyphicon glyphicon-stop tech" ></span>tech</p>
          }
          else if (category == "movies"){
            posttag = <p><span className="glyphicon glyphicon-stop movies" ></span>movies</p>
          }
          else  
          {
            posttag = <p><span className="glyphicon glyphicon-stop videos" ></span>videos</p>
          }
          var image;
          if(this.state.posts.lastReply===''){
             image=<div className="col-sm-6 col-xs-6 "></div>
          }
          else{
            image=<div className="col-sm-6 col-xs-6 ">   
            last reply<img src={this.state.posts.lastReply} className="avatar img-responsive"/>
          </div> 
          }
          var image1;
          if(this.state.posts.lastReply===''){
             image1=<div className="col-sm-6 col-xs-6 "></div>
          }
          else{
            image1=<div className="col-sm-6 col-xs-6 ">   
            <img src={this.state.posts.lastReply} className="avatar img-responsive"/>
          </div> 
          }
        
  return (
<div>
    {console.log(this.state)}
        <div className="well postwell">
            <div className="row row-no-gutters text-xs-center">
  
                <div className="col-sm-4 justify-content-center">
                     <img src={logo} alt="logo" className="postlogo"/>
                </div>
                <div className="col-sm-8 ">
                    {/* <ul className="list-inline text-right text-xs-center na1">
                      <li><a href="#"><font color="black">About</font></a></li>
                      <li><a href="#"><font color="black">Features</font></a></li>
                      <li><a href="#"><font color="black">Community</font></a></li>
                      <li><a href="#"><font color="black">Demo</font></a></li>
                      <li><a href="#"><font color="black"><b>Pricing</b></font></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
        <div className="container">

            <div className="row postmainrow ">
                <div className="col-sm-4 col-xs-4">
                   <h2>Demo</h2>
                </div>
                <div className="col-sm-8 col-xs-8 text-right">
                    <div className="icons">
                        {/* <span className="glyphicon glyphicon-search"></span> */}
                        &nbsp;<Link to="/"><span className="glyphicon glyphicon-align-justify"></span></Link>
                        {/* &nbsp;<i className="fa fa-user" aria-hidden="true"></i> */}
                 
                    </div>
                </div>
                
            </div>
            
            <div className="row-no-gutters">
               <div className="column-sm-12">
                   <h3>{this.state.posts.title}</h3>
                   <span className="glyphicon glyphicon-stop dis" ></span>Discourse
               </div>
            </div>

            <div className='row'>
               <div className="col-sm-10 col-xs-12">
                  <hr/>
                  <div className="col-sm-4 col-xs-3">
                      <img src={this.state.posts.createdBy} alt="profile"  class = "  img-responsive avatarprofile"/>
                  </div>
                  <div className="col-sm-8 col-xs-8">
                     <div className="row">
                         <div className="col-sm-3 col-xs-3 ">
                             {this.state.posts.username}
                         </div>
                         <div className="col-sm-9 col-xs-9 pull-right ">
                            &nbsp; <Link to ={{pathname:'/edit', state:{p:this.state.id}}}><button type="button" data-toggle="tooltip" data-placement="bottom" title="Edit Topic" className=" pencil btn btn-default"><img className="editpic" src="https://img.icons8.com/metro/26/000000/edit.png"/></button></Link>&nbsp;{this.state.posts.createdAt}
                         </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-2 hidden-xs">
                  <div className="row">
                  <div className="scrollup">&nbsp;&nbsp;<font color="grey">{this.state.posts.createdAt}</font>
                  </div></div>
                 <div className="row">
                   <div className="col-sm-4"><div className="vl"><div className="vl1"></div></div></div>
                   <div className="col-sm-6 scrollside"><b>1 / 5</b> <br/></div>
                 </div>
              </div>     
            </div> 

            <div className="row">
               <div className="col-sm-10">
                   <div className="col-sm-2">
       
                   </div>
                   <div className="col-sm-8 scrollbar-dusty-grass square thin">
                       {/* <p>{this.state.posts.content}</p> */}
                       
                       <p dangerouslySetInnerHTML={{ __html: this.state.posts.content }} />
                   </div>
               </div>
           </div>
           <div className="row">
              <div className="col-sm-5">
     
              </div>
              <div className="col-sm-7">
                  <div className="icons-set2">
                      &nbsp;&nbsp;<button data-toggle="tooltip" data-placement="bottom" title="Like Topic" className= {(this.state.liked === true? 'btn btn-default like': 'btn btn-default dislike')} onClick={this.handleLike}><span className="glyphicon glyphicon-heart-empty"></span></button>
                      &nbsp;&nbsp;<button className = "btn btn-default  delicon" data-toggle="tooltip" data-placement="bottom" title="Delete Topic" onClick={this.handleDelete}><span className="glyphicon glyphicon-link"></span></button>
                     
                     
                     {/* <Link to ="/reply"><a href="reply.html" className="btn btn-default reply" role="button">&nbsp;Reply</a></Link> */}
                     {console.log(this.state.id)}
                     <Link to ={{pathname:'/reply', state:{p:this.state.id}}}><a href="reply.html" data-toggle="tooltip" data-placement="bottom" title="Add comment" className="btn btn-default reply" role="button">&nbsp;Reply</a></Link>
                 </div>
                 
              </div>
          </div>
<br/><br/>
        <div className="row rowmain2" className="rowmain2">
        <div className="col-sm-10">
                <div className="row">
                       <div className="col-sm-1"></div>
                       <div className="col-sm-9">
                          <div className="row">
        
                               <div className="col-sm-5 col-xs-5 set1">
                                    <div className="row">
                                      <div className="col-sm-6 col-xs-6 ">
                                          created <img src={this.state.posts.createdBy} className="avatar img-responsive"/>
                                       </div>
                                       {/* <div className="col-sm-6 col-xs-6 ">   
                                         last reply<img src={this.state.posts.lastReply} className="avatar img-responsive"/>
                                       </div>   */}
                                       {image}
                                    </div> 
                               </div>
        
        
                               <div className="col-sm-4 col-xs-6 col-md-4 set1 ">
        
                                     <div className="row">
                                        <div className="col-sm-4 col-xs-4 ">
                                            <b>{this.state.posts.replyCount}</b><p>replies</p>
                                        </div>
                                        <div className="col-sm-4 col-xs-4 ">
                                                <b>{this.state.posts.viewCount}</b><p>views</p>
                                        </div>
                                        <div className="col-sm-4 col-xs-4 ">
                                                  <b>{this.state.posts.userCount}</b><p>users</p>
                                        </div>
                                     </div>
        
                                </div>
        
        
                                 <div className="col-sm-3 col-xs-3 set1 hidden-xs  ">
                                    <div className="row">
                                         
                                            <div className="col-sm-6 col-xs-6">
                                               <img src={this.state.posts.createdBy} className="avatar img-responsive" />
                                           </div>
                                           {/* <div className="col-sm-6 col-xs-6">
                                        
                                              <img src={this.state.posts.lastReply} className="avatar img-responsive" />
                                           </div> */}
                                           {image1}
                                           
                                    </div>
                                  </div>
        
        
                                  
        
                               </div>
                           </div> 
        
                           <div className="col-sm-2"></div>
                      </div>
                 </div>  
            
                <div className="col-sm-2"></div>
        </div>
       
         {this.state.comments.map(function(comment) {
           
           
           return (
              <div>
              <div class='row'>
        <div className="col-sm-10 col-xs-10">
             <hr/>
             <div className="col-sm-4 col-xs-4">
                 <img src={comment.url} alt="profile"  class = " avatarprofile img-responsive"/>
             </div>
             <div className="col-sm-8 col-xs-8">
                 <div className="row">
                     <div className="col-sm-6 col-xs-7">
                         {comment.username}
                     </div>
                     <div className="col-sm-6 col-xs-5">
                         {comment.createdDate}
                     </div>
                 </div>
                 
             </div>
        </div>     
        <div className="col-sm-2 col-xs-2">
            <div className="side-icons">
            <Link to ={{pathname:'/update', state:{p:comment.id,q:this.state.id}}}> <button className = "btn btn-default  delicon" data-toggle="tooltip" data-placement="bottom"  title="Update Comment" >
             <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button></Link>
                &nbsp;
                {/* <i className="fa fa-circle-o" aria-hidden="true"></i> */}
                <button className = "btn btn-default  delicon" data-toggle="tooltip" data-placement="bottom" value={comment.id} title="Delete Comment" onClick={() => this.handleDeleteComment(comment.id)}  >
                  < span className="glyphicon glyphicon-link"></span></button>
                
                     
                </div>
        </div>
</div>
<div className="row">
            <div className="col-sm-10">
                <div className="col-sm-2">
    
                </div>
                <div className="col-sm-8">
                    {/* <p>{comment.content}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: comment.content }} />
                    
                </div>
            </div>
        </div>
        </div>
              
            )
           
        },this 
        )}
     
     </div>  
     
                
           












</div>


    
        

        

        
    )}
}
 export default PostComponent1;
      