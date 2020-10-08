import React, { Component } from 'react';

class Arrayoperation extends Component<{},{}> {

    state = {
        numbers:[1,1,2,2,3,3,4,5,5],
        students:[{"name":"pradeep","age":25},{"name":"abhi","age":20}],
        reduceArray:[
                      {"id":1,profile:[{"name":"pradeep","age":25}]},
                      {"id":2,profile:[{"name":"abhi","age":20}]}
                    ]
      };

    constructor(props:any)
    {
       super(props);
       
    }

    reduceArray()
    {
       let finalarray:any=[];

       const reducedArray:any= [...this.state.reduceArray];

       finalarray=reducedArray.reduce((profile:any,profileobj:any)=>{

         const profileAge=profileobj.profile.reduce((profile1:any,profileinsideobj:any)=>{
                  profile1.push(profileinsideobj.age);
                  return profile1;
         },[]);

         profile.push(...profileAge);
         return profile;

       },[])

       let sumarray:any=[];
       const numberArray:any = [...this.state.numbers];

       sumarray=numberArray.reduce((sum:any,numberobj:any)=>{
              return sum+numberobj;
       },0)

       console.log(finalarray);
       console.log(sumarray);

       return finalarray;

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

    passingParameterToSpreadOperator(...param:any){
         console.log(param);
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
                 <button className="arrayopeartionButton" onClick={()=>this.passingParameterToSpreadOperator(20,40,80,100)}>passing parameter to spread opearator</button>
          </div>
        );
      }

}

export default Arrayoperation;