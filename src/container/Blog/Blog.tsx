import React, { Component,Suspense } from 'react';
import  './Blog.css';
import Posts from './../../components/Posts/Posts';
//import Newpost from './../../components/Newpost/Newpost';
import Fullpost from './../../components/Fullpost/Fullpost';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import asyncComponent from './../../hoc/asyncComponent';
import AuthContext from './../../context/auth-context';

const AsyncNewPost = asyncComponent(()=>{
   return import('./../../components/Newpost/Newpost');
});

const Newpostcomponent=React.lazy(()=> import('./../../components/Newpost/Newpost'));



class Blog extends Component<{},{}> {

   

    constructor(props:any)
    {
    
       super(props);
    }

    static contextType = AuthContext;

   

    render() {

        return(
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/posts" >Posts</Link></li>
                            <li><Link to="/newpost">New Post</Link></li>
                            <li><Link to="/person">Person</Link></li>
                            <li><Link to="/cockpit">Cockpit</Link></li>
                            <li><Link to="/counter">Counter</Link></li>
                            <li><Link to="/bootstrapexample">B4example</Link></li>
                            <li><Link to="/Form">Form</Link></li>
                            <li><Link to="/ingredients">Ingredients</Link></li>
                            <li><Link to="/counterfunc">Counter func</Link></li>
                            <li><Link to="/arrayopeartion">Array opeartion</Link></li>
                            <li><Link to="/reacttesting">React Testing Inputs</Link></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
               
                  <Switch>
                    <Route exact path="/posts"  component={Posts}></Route>
                    <Route exact path="/posts/:id"  component={Fullpost}></Route>
                     {/*this.context.authenticated ? <Route exact path="/newpost"  component={AsyncNewPost}></Route>:
                      null*/}   
                    {this.context.authenticated ?<Route exact path="/newpost" render={()=>
                        <Suspense  {...this.props} fallback={<div>loading</div>}>
                        <Newpostcomponent />
                    </Suspense>}></Route>:null}       
                 </Switch> 
            

                </section>
            </div>
        )
    }

}

export default Blog;