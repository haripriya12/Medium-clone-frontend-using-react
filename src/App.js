import React, {Component} from 'react';

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import DataComponent from './DataComponent';
import PageComponent from './PageComponent';
// import FontAwesome from 'react-fontawesome';
// import 'font-awesome/css/font-awesome.css'

// class App extends Component {
//     render() {
//         return(
//             <div className="container">                
//                 <HeaderComponent></HeaderComponent>
//                 <PageComponent ></PageComponent>
//             </div>
//         );
//     }
// }
 class App extends Component {
      render() {
        return(
          <Router>
            <div>
            {/* <HomeComponent></HomeComponent> */}
            <Switch>
              <Route exact path='/' component={HomeComponent}></Route>
              <Route exact path='/login' component={LoginComponent}></Route>
              <Route exact path='/comment' component={DataComponent}></Route> 
              <Route exact path='/posts/:postID' component={PageComponent}></Route>
            </Switch>
            </div>
          </Router>
        );
      }
   }


export default App;





// class App extends Component {
//   render(){
//     return (
//       <Router>
//         <div>
//           <HeaderComponent></HeaderComponent>
          
//           <Switch>
//           <Route exact path='/' component={HomeComponent}></Route>
//           <Route exact path='/about' component={AboutComponent}></Route>
//           <Route exact path='/team' component={TeamComponent}></Route>
//           <Route component={NotFoundComponent}></Route>
//           </Switch>

//         </div>
//       </Router>
//     );
//   }
// }
