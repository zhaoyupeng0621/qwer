import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from './action';
import {connect} from "react-redux"
class App extends Component {
    render() {
        return (
            <div>
                {this.props.num}
                hahah 
                <button onClick={()=>{
                    store.dispatch(Add(4));
                }
                }>click+1</button>
                <button onClick={()=>{
                    store.dispatch(Reduce(4));
                }
                }>click+1</button>
            </div>
        );
    }
    
}
let mapStateToProps = state =>({
    num:state.num
})


export default connect(mapStateToProps)(App);