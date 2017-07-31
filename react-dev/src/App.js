import React, { Component } from 'react';
import {Loader} from './components/layout/loader';
import {Home} from './components/layout/home';
import {Landing} from './components/layout/landing';
import {Result} from './components/layout/result';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory(
)
console.log(history);


const baseUrl = process.env.PUBLIC_URL; 
class App extends Component {
  render() {
    return (
<div>
       <Loader /> 
      {/* <Home />   */}
      
     <Router history={history}>
       
      <div>
       <Route exact path={baseUrl + "/"} component={Home} /> 
       <Route path={baseUrl + "/landing"} component={Landing} />
       <Route path={baseUrl + "/result"} component={Result} /> 
       </div>
     </Router>
</div>
    );
  }


}

export default App;
