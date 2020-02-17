import React,{ Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import Cockpit  from './components/Cockpit/Cockpit';
import AuthContext from './context/auth-context';


class App extends Component<{},{}> {

  constructor(props:any)
    {
       super(props);
    }

    state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      showPersons:false,
      authenticated: false,
      passsedData:"srirangapatna"
    };

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    };

    nameChangedHandler = (event:any, id:any) => {
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

    deletePersonHandler = (personIndex:any) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
    };

    
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  paasDataToPersonComponent = (receivedData:any) =>{
    this.setState({ passsedData: receivedData });
  }
  

  
    render() {

        let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
               {this.state.persons.map((person, index) => {
              return (<div key={person.id} className="personDivision"><Person name={person.name} age={person.age} key={person.id} changed={(event:any) => this.nameChangedHandler(event, person.id)} clicked={() => this.deletePersonHandler(index)}>
                      I am a child content
                      </Person></div>)
              })};
          </div>
        );
    }
     
        return (
          <div className="App">
              <button className="mybutton" onClick={this.togglePersonsHandler} >click me</button>
                <AuthContext.Provider
                    value={{
                      authenticated: this.state.authenticated,
                      login: this.loginHandler,
                      passdata: this.state.passsedData
                    }}
                  >
                    <Cockpit clicked={() => this.paasDataToPersonComponent("mysore")}></Cockpit>
                    {persons}
              </AuthContext.Provider>
          </div>

        );

    }
    
}

export default App;
