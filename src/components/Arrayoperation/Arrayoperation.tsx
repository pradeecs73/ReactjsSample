import React, { Component } from 'react';

class Arrayoperation extends Component<{},{}> {

    state = {
        numbers:[1,1,2,2,3,3,4,5,5],
        students:[{"name":"pradeep","age":25},{"name":"abhi","age":20}]
      };

    constructor(props:any)
    {
       super(props);
       
    }

    reduceArray()
    {
      

    }

    objectOperations()
    {
      

    }

    removeDuplicat(){

        const numberArray = [...this.state.numbers];
        console.log(Array.from(new Set(numberArray)));
    }

    sortingArray(){

        let studentsArray:any = [...this.state.students];

        studentsArray.sort((a:any,b:any)=>{
             return a.name.localeCompare(b.name);
        });

        console.log(studentsArray);

        let studentsArray1:any = [...this.state.students];

        studentsArray1.sort((x:any, y:any)=> {
            return x.age - y.age;
        });

        console.log(studentsArray1);
    }

    mapAndEvery(){

       const numberArray = [...this.state.numbers]; 
       const myNewArray=numberArray.map((num:any)=>{
            return num*10;
       });

        console.log(myNewArray);

       const numberArray1 = [...this.state.numbers]; 
       const myNewArrayCheck1=numberArray1.every((num:any)=>{
            return num < 10;
       });

        console.log(myNewArrayCheck1);

        const numberArray2 = [...this.state.numbers]; 
       const myNewArrayCheck2=numberArray2.every((num:any)=>{
            return num <  4 ;
       });

        console.log(myNewArrayCheck2);
    }


    render() {
           
        return (
          <div style={{textAlign:"center"}}>
                 <p>Please click buttons to find array reduce and object operations</p>
                 <button className="arrayoperationButton" onClick={()=>this.reduceArray()}>Reducing Array</button>
                 <button className="arrayopeartionButton" onClick={()=>this.objectOperations()}>Object Operations</button>
                 <button className="arrayopeartionButton" onClick={()=>this.removeDuplicat()}>Remove Duplicate</button>
                 <button className="arrayopeartionButton" onClick={()=>this.sortingArray()}>Sorting Array of objects based on key</button>
                 <button className="arrayopeartionButton" onClick={()=>this.mapAndEvery()}>Map and every</button>
          </div>
        );
      }

}

export default Arrayoperation;