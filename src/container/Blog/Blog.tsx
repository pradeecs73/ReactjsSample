import React, { Component } from 'react';

import  './Blog.css';
import Posts from './../../components/Posts/Posts';
import Newpost from './../../components/Newpost/Newpost';
import Fullpost from './../../components/Fullpost/Fullpost';
import Person from './../../components/Person/Person';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import Cockpit  from './../../components/Cockpit/Cockpit';

import {Router,useHistory} from 'react-router';
import AuthContext from './../../context/auth-context';



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
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
               
                  <Switch>
                    <Route exact path="/posts"  component={Posts}></Route>
                    <Route exact path="/posts/:id"  component={Fullpost}></Route>
                     {this.context.authenticated ? <Route exact path="/newpost"  component={Newpost}></Route>:
                      null}          
                 </Switch> 
            

                </section>
            </div>
        )
    }

}

export default Blog;