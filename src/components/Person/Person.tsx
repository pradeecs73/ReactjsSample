import React, { Component ,PureComponent} from 'react';
import  './Person.css';
import AuthContext from './../../context/auth-context';
import { connect } from 'react-redux';
import Personchild from './../Personchild/Personchild';

interface personInterface{
    ctr:any;
    counterOperation:any; 
}

class Person extends Component<personInterface,{}> {

  state = {
    childdata:"myinitialparentdata",
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasd1', name: 'Manu', age: 29 },
      { id: 'asdf1', name: 'Stephanie', age: 26 }
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

  /*modifydata(datafromchild:any){
      this.setState({childdata:datafromchild})
   }*/

   modifydata=(datafromchild:any)=>{
    this.setState({childdata:datafromchild})
   }

   shortenData=(shortenString:any)=>{
       return shortenString.substr(0,25);
   }

   static getDerivedStateFromProps(props:any,state:any)
   {
       return state;
   }

    componentDidMount() {
      this.inputElementRef.current.focus();
    }

    /*componentWillMount()
    {

    }*/

    shouldComponentUpdate(nextprops:any,nextstate:any)
    {
       console.log("1");
       return true;
    }

    getSnapshotBeforeUpdate(prevprops:any,prevstate:any)
    {
       console.log("4");
       return null;
    }

   componentDidUpdate(prevprops:any,prevstate:any,snapshot:any)
   {
       console.log(snapshot);
       console.log("5");
   }

   /*componentWillUpdate(prevprops:any,prevtate:any,snapshot:any)
   {

   }*/


  


    render() {

 
      let persons=null;

      if (this.state.showPersons) {
        persons = (
          <div style={{textAlign:"center"}}>
               {this.state.persons.map((person, index) => {
              return (

                    <div className="personDivision"  key={person.id}>
                        <p>counter value:{this.props.ctr}</p>
                       {this.props.counterOperation != ""?<p>counter operation:{this.props.counterOperation}</p>:null}
                        <p>Received data {this.context.receivedData} </p>
                        <p> {this.shortenData("shorten the text i studided engineering")} </p>
                        <p> {this.context.shortenData("shorten the text i studided engineering")} </p>
                        <p onClick={()=>this.deletePerson(index)}> I'm {person.name} and I am {person.age} years old!</p>
                       <input type="text"  ref={this.inputElementRef}   value={person.name} onChange={(event)=>this.textChanged(event,person.id)} />

                    </div>

                    )
              })};
             {/*<Personchild  modifydata={this.modifydata.bind(this)} parenttochilddate={this.state.childdata}/>*/}
              <Personchild  modifydata={this.modifydata} parenttochilddate={this.state.childdata}/>
          </div>
        );
    }

    return persons;
  }
}

const mapStateToProps = (state:any) => {
  return {

      ctr: state.ctr.counter,
      counterOperation:state.ctr.counterOperation,
      storedResults: state.res.results
  }
};

  export default connect(mapStateToProps, null)(Person); 