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

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons:true,
    authenticated: false,
    passsedData:"srirangapatna"
  };

  inputElementRef:any;

    constructor(props:any)
    {
       super(props);
       this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    deletePerson = (personIndex:any) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
    };

    textChanged = (event:any, id:any) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
  
      const person = {
        ...this.state.persons[personIndex]
      };
  
      // const person = Object.assign({}, this.state.persons[personIndex]);
  
      person.name = event.target.value;
  
      const persons = [...this.state.persons];
      persons[personIndex] = person;
  
      this.setState({ persons: persons });
    };

    componentDidMount() {
      this.inputElementRef.current.focus();
    }
  


    render() {

 
      let persons=null;

      if (this.state.showPersons) {
        persons = (
          <div>
               {this.state.persons.map((person, index) => {
              return (

                    <div className="personDivision" key={person.id}>
                        <p>Received data {this.context.receivedData} </p>
                        <p onClick={()=>this.deletePerson(person.id)}> I'm {person.name} and I am {person.age} years old!</p>
                       <input type="text"  ref={this.inputElementRef}   value={person.name} onChange={(event)=>this.textChanged(event,person.id)} />

                    </div>

                    )
              })};
          </div>
        );
    }

    return persons;
  }
}

  export default Person;