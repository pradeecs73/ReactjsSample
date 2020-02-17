import React, { Component } from 'react';

import  './Cockpit.css';
import AuthContext from './../../context/auth-context';

interface cockpitInterface{
  
  clicked:any
  
}

class Cockpit extends Component<cockpitInterface,{}> {
   
    constructor(props:any)
    {
       super(props);
    }

    static contextType = AuthContext;

    render() {

        return (
          <div>
                 <p>I am a Cockpit component</p>
                 <button className="cockpitButton" onClick={this.context.login}>Login</button>
                 <button className="cockpitButton" onClick={this.props.clicked}>pass data to person component</button>
          </div>
        );
      }

}

export default Cockpit;