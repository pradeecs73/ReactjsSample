import React, { Component } from 'react';
import  './Form.css';

const initialState={
    name:"",
    email:"",
    password:"",
    city:"",
    nameError:"",
    emailError:"",
    passwordError:"",
    cityError:""

};

class Form extends Component {

    state=initialState;

    constructor(props:any)
    {
       super(props);
    }

    handleChange=(event:any)=>{
       const isCheckbox = event.target.type === "checkbox";

       this.setState({
              [event.target.name]:isCheckbox
              ?event.target.checked
              :event.target.value

           });

    }

    validateForm=()=>{
         let nameError="";
         let emailError="";
         let passwordError="";
         let cityError="";

         if(this.state.name == ""){
            nameError="Invalid Name";
         }

         if(this.state.password == ""){
            passwordError="Invalid Password";
         }

         if(!this.state.email.includes('@')){
            emailError="Invalid Email";
         }

         if(this.state.city == ""){
            cityError="Invalid City";
         }



         if(nameError||emailError || passwordError || cityError)
         {
             this.setState({
                nameError:nameError,
                emailError:emailError,
                passwordError:passwordError,
                cityError:cityError
             });
             
             return false;
         }
           return true;
    }

    handleSubmit=(event:any)=>{
         event.preventDefault();
         const valid = this.validateForm();
         if(valid){
            console.log(this.state);
            this.setState(initialState);
         }
         
    }

    render() {
        return(
            <div className="container">
                   <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                           <label >Name</label>
                           <input type="text" name="name" className="form-control"  value={this.state.name} onChange={this.handleChange} placeholder="Enter name" />
                        </div>
                        <div style={{fontSize:12,color:'red'}}>
                            {this.state.nameError}
                        </div>

                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" name="password" className="form-control"  value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                        </div>
                        <div style={{fontSize:12,color:'red'}}>
                            {this.state.passwordError}
                        </div>

                        <div className="form-group ">
                            <label >Email address</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                        </div>
                        <div style={{fontSize:12,color:'red'}}>
                            {this.state.emailError}
                        </div>

                        <div className="form-group ">
                            <label >City</label>
                            <select  name="city" className="form-control" value={this.state.city} onChange={this.handleChange}>
                                <option value="">Select City</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mysore">Mysore</option>
                            </select>    
                        </div>

                        <div style={{fontSize:12,color:'red'}}>
                            {this.state.cityError}
                        </div>

                       <div style={{textAlign:"center"}}>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form> 
               
            </div>
        )
    }

}

export default Form;