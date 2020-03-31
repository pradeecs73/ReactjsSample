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

    async asyncWait(thisinstance:any)
    {
      const result= await this.asyncWaitCalled();
      console.log(result);
      console.log("pradeep");
    }

    asyncWaitCalled=()=>{
       
      return new Promise((resolve,reject)=>{
           
          setTimeout(()=>{
             resolve("data returned after resolved");
          },5000);

      });
       
    }

    render() {

        return (
          <div>
                 <p>I am a Cockpit component</p>
                 <button className="cockpitButton" onClick={this.context.login}>Login to set context data</button>
                 <button className="cockpitButton" onClick={()=>this.passdata(this)}>Pass data</button>
                 <button className="cockpitButton" onClick={()=>this.asyncWait(this)}>Async Wait</button>
          </div>
        );
      }

}

export default Cockpit;