import React, { Component } from 'react';

import  './Person.css';
import AuthContext from './../../context/auth-context';

interface personInterface{
    name:string;
    age:number;
    changed:any;
    clicked:any;
    
}

class Person extends Component<personInterface,{}> {

    constructor(props:any)
    {
       super(props);
    }

    static contextType = AuthContext;

    render() {

      return (
        <div>

            {this.context.authenticated ? (
            <p>Authenticated!</p>
            ) : (
            <p>Please log in</p>
            )}
            <p>Received data {this.context.passdata} </p>
           <p onClick={this.props.clicked}> I'm {this.props.name} and I am {this.props.age} years old!</p>
           <p>{this.props.children}</p>
        <input type="text"    value={this.props.name} onChange={this.props.changed} />

        </div>
      );
    }
  }

  export default Person;