import React, { useState,useEffect, useCallback } from 'react'
import  './Counterfunc.css';

const Counterfunc = React.memo(() => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  useEffect(() => {
     console.log("use effect called count");
  }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount:any) => prevCount + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount((prevCount:any) => prevCount - 1)
  }, [count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  return (
    <React.Fragment>
     <div id='main'>  
         <div>Count: {count}</div>
         <div><button onClick={increment}>Increment</button></div>
         <div><button onClick={decrement}>Decrement</button></div>
         <div><button onClick={incrementOtherCounter}>incrementOtherCounter</button></div>
      </div> 
    </React.Fragment>
       
  )
});

export default Counterfunc;