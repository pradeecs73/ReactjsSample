import React,{ Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import Cockpit  from './components/Cockpit/Cockpit';
import AuthContext from './context/auth-context';
import Blog from './container/Blog/Blog';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import Counter  from './components/Counter/Counter';
import B4example  from './components/B4example/B4example';
import Form  from './components/Forms/Form';
import Ingredients  from './components/Ingredients/Ingredients';



class App extends Component<{},{}> {


  constructor(props:any)
    {
       super(props);
    }

    state = {
      
      authenticated: false,
      receivedData:""

    };

    loginHandler = () => {
      this.setState({ authenticated: true });
    };


    shortenText=(str:any)=>{

         return str.substr(0,25);
    }
  

    render() {

        return (
          <BrowserRouter>
              <div className="App">
                    <AuthContext.Provider
                          value={{
                            authenticated: this.state.authenticated,
                            login: this.loginHandler,
                            receivedData:this.state.receivedData,
                            shortenData:this.shortenText
                          }}
                        >
                        <Blog></Blog>

                        <Switch>
                          <Redirect exact from ="/" to="/posts"></Redirect>
                          <Route exact path="/person"  component={Person}></Route>
                          <Route exact path="/cockpit"  component={Cockpit}></Route>
                          <Route exact path="/counter"  component={Counter}></Route>
                          <Route exact path="/Form"  component={Form}></Route>
                          <Route exact path="/bootstrapexample"  component={B4example}></Route>
                          <Route exact path="/ingredients"  component={Ingredients}></Route>
                         
                          {/* <Route render={()=><h1>Not Found</h1>}></Route>*/}
                        </Switch>  
                       
                    </AuthContext.Provider>
              </div>
          </BrowserRouter>

        );

    }
    
}

export default App;
