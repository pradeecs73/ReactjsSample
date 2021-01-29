import React, { useState,useEffect, useCallback,useContext} from 'react'
import AuthContext from './../../context/auth-context';
import  './Counterfunc.css';

const Counterfunc = React.memo(() => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const authContext=useContext(AuthContext);

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
         <div>Count: {count}
             {authContext.shortenData("shorten the text i studided engineering")}
         </div>
         <div><button onClick={increment}>Increment</button></div>
         <div><button onClick={decrement}>Decrement</button></div>
         <div><button onClick={incrementOtherCounter}>incrementOtherCounter</button></div>
      </div> 
    </React.Fragment>
       
  )
});

export default Counterfunc;