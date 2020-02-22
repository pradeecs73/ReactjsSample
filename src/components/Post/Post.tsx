import React, { Component } from 'react';

import  './Post.css';
interface postInterface{
    title:any,
    clicked:any,

}

class Post extends Component<postInterface,{}> {

    constructor(props:any)
    {
       super(props);
    }

    render() {
        return(   
               <div className="Postblock" onClick={this.props.clicked}>
                 <p>Title: {this.props.title}</p>
               </div>    
        )
    }

}

export default Post;