import React, { Component } from 'react';
import axios from 'axios';
import Post from './../../components/Post/Post';
import  './Posts.css';



class Posts extends Component<{},{}> {

    state={
        posts:[]
    }

    constructor(props:any)
    {
       super(props);
    }

    componentDidMount(){
      
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
                this.setState({posts:response.data.slice(0,9)});
        });
        
    }

    loadSinglePost(postId:any,thisinstance:any)
    {
        thisinstance.props.history.push('/posts/'+postId+"?serchedtext='bike'");
    }

    render() {

        const posts=this.state.posts.map((post:any) =>
            {
                 return   ( <Post key={post.id} {...this.props} title={post.title} clicked={() => this.loadSinglePost(post.id,this)}></Post>) 
            }); 
            
        return(   
               <div className="Postsblock">
                  {posts}
               </div>    
        )
    }

}

export default Posts;