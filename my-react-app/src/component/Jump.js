import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Jump extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <Link to={this.props.to}>{this.props.children}</Link>
                
            </div>
        );
    }
}

export default Jump;