import React, { Component } from 'react';
import axios from 'axios';
import  './Fullpost.css';



class FullPost extends Component<{},{}> {

    state={
       postId:"",
       loadedPost: {title:"",body:""},
       fullPostData:false
    }

    constructor(props:any)
    {
     
       super(props);
       this.state.postId=props.match.params.id;
       
    }

    componentDidMount(){        
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.state.postId)
        .then(response =>{
                this.setState({fullPostData:true,loadedPost:response.data});
        });
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.state.postId)
            .then(response => {
                console.log(response);
            });
    }

    render() {

         let post=null;

        if ( this.state.fullPostData ) {
          post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        

        return post;

    }

}

export default FullPost;
