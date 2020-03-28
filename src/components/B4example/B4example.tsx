import React, { Component } from 'react';
import  './B4example.css';


class B4example extends Component<{},{}> {
  
    constructor(props:any)
    {
       super(props);
       
    }

    state={
        rating:true
    }

    getRating=(rating:any)=>{

        const starTotal = 5;
        const starPercentage = (rating / starTotal) * 100;
        const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
        return {"width":starPercentageRounded};

    }

    componentWillMount(){ 
      
        $('.carousel').carousel();
       
    }

    render() {

        return(
               <div>

                    <div className="jumbotron text-center">
                        <h1>My First Bootstrap Page</h1>
                        <p>Resize this responsive page to see the effect!</p> 
                    </div>

                    <div className="stars-outer">
                       {this.state.rating?<div className="stars-inner"  style={this.getRating(4)}></div>
                       :<div className="stars-inner"  style={this.getRating(2)}></div>}
                    </div>

                    <div id="demo" className="carousel slide" data-ride="carousel">
                       
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                   
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="Los Angeles" width="1200" height="500" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="Chicago" width="1200" height="500" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="New York" width="1200" height="500" />
                            </div>
                        </div>

               
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                        </div>

                </div>
            );
        }

}

export default B4example;