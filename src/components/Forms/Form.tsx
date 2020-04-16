import React, { Component } from 'react';
import  './Form.css';

const initialState={
    name:"",
    email:"",
    password:"",
    nameError:"",
    emailError:"",
    PasswordError:""
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
         let PasswordError="";

         if(this.state.name == ""){
            nameError="Invalid Name";
         }

         if(this.state.password == ""){
            PasswordError="Invalid Password";
         }

         if(!this.state.email.includes('@')){
            emailError="Invalid Email";
         }


         if(nameError||emailError || PasswordError )
         {
             this.setState({
                nameError:nameError,
                emailError:emailError,
                PasswordError:PasswordError
             })
             
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
                            {this.state.PasswordError}
                        </div>

                        <div className="form-group ">
                            <label >Email address</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                        </div>
                        <div style={{fontSize:12,color:'red'}}>
                            {this.state.emailError}
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