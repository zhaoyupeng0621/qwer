import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import A from './component/A';
import B from './component/B';
import Home from './component/Home'
import Jump from './component/Jump'

import {BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr></hr>
      <Router>
        <Link to="/">首页</Link> |
        <Link to="/a">A</Link> |
        <Link to="/b">B</Link> |
        <Jump to="/b">jump</Jump>
        
        {/* <Switch> */}
          <Route exact path="/a" component={A}></Route>
          {/* <Route path="/b" component={B}></Route> */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/b" children={(props)=>{
                    //console.log(props.match);
                    return (
                      <h2>111</h2>
                    )
                }}></Route>
        {/* </Switch> */}
        
      </Router>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
