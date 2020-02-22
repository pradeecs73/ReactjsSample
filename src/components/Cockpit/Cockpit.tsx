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

    passdata(thisinstance:any)
    {
      this.context.receivedData="mysore";
      //thisinstance.props.history.push("/posts");
    }

    render() {

        return (
          <div>
                 <p>I am a Cockpit component</p>
                 <button className="cockpitButton" onClick={this.context.login}>Login to set context data</button>
                 <button className="cockpitButton" onClick={()=>this.passdata(this)}>Pass data</button>
          </div>
        );
      }

}

export default Cockpit;