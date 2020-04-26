import {put} from 'redux-saga/effects';
import * as actionCreators from './../../store/actions/index';

export function* deleteCounter(action:any){
    yield put(actionCreators.deleteResultSaga(action.resultElId));
}