import * as actionTypes from '../actions/actionsconstants';

const initialState = {
    counter: 0,
    counterOperation:""
};

const reducer = ( state = initialState, action:any ) => {

        if(action.type === actionTypes.INCREMENT){
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            newState.counterOperation="increment";
            return newState;

        }   

        if(action.type === actionTypes.ADD){  
            return {
                ...state,
                counter: state.counter + action.val,
                counterOperation:"add"
            }
        }  

        if(action.type === actionTypes.DECREMENT){
            return {
                ...state,
                counter: state.counter - 1,
                counterOperation:"decrement"
            }
        }

        if(action.type === actionTypes.SUBTRACT){
            return {
                ...state,
                counter: state.counter - action.val,
                counterOperation:"subtract"
            }
        }
            
    

    return state;
}

export default reducer;