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

    componentDidMount(){
    
    }

    static contextType = AuthContext;

    passdata(thisinstance:any)
    {
      
      this.context.receivedData="mysore";
      //thisinstance.props.history.push("/posts");
    }

    async asyncWait()
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

    async asyncWait1()
    {
      const result1= new Promise((resolve,reject)=>{

        setTimeout(()=>{
           resolve("data returned after resolved fromthe same function");
         },5000);

      });
     const result2 =await result1;
      console.log(result2);
      console.log("pradeep");
    }

    render() {
           
        return (
          <div>
                 <p>I am a Cockpit component</p>
                 <button className="cockpitButton" onClick={this.context.login}>Login to set context data</button>
                 <button className="cockpitButton" onClick={()=>this.passdata(this)}>Pass data</button>
                 <button className="cockpitButton" onClick={()=>this.asyncWait()}>Async Wait</button>
                 <button className="cockpitButton" onClick={()=>this.asyncWait1()}>Async Wait in the same function</button>
          </div>
        );
      }

}

export default Cockpit;