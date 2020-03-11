import * as actionTypes from './actionsconstants';

export const storeResult = (res:any) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }; 
};

export const deleteResult = (resElId:any) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};