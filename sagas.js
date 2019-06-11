import { put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res,ms));


export function* helloSaga() {
    console.log('Hello sagas')
}

//set worker saga to perform async increment task
export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT' })
}

//set WATHCER saga to spawn new IncrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC',incrementAsync)
}