import React, {useState, useEffect, useCallback ,useReducer,useMemo} from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientReducer = (currentIngredients:any, action:any) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter((ing:any) => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};


const Ingredients= () => {

  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
 // const [userIngredients, setUserIngredients] = useState<string[]>([]);

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = (ingredient:any) => {
     /* setUserIngredients((prevIngredients:any)=>[
         ...prevIngredients,
         {id:Math.random(),...ingredient}
      ]);*/

      dispatch({
        type: 'ADD',
        ingredient: { id:Math.random(), ...ingredient }
      });
      
  }

  const filteredIngredientsHandler = useCallback((filteredIngredients:any) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const removeIngredientHandler = useCallback((ingredientId:any) => {
  /* setUserIngredients((prevIngredients:any) =>
      prevIngredients.filter((ingredient:any) => ingredient.id !== ingredientId)
    );*/

    dispatch({ type: 'DELETE', id: ingredientId });
  },[]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (<div style={{textAlign:"center"}} className="Ingredient">
         <p>I am a ingredient Component </p>
         <IngredientForm onAddIngredient={addIngredientHandler} />
         <Search ingredients={userIngredients} onLoadIngredients={filteredIngredientsHandler}/>
         {/*<IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
         />*/}
         {ingredientList}
    </div>);
};

export default Ingredients;