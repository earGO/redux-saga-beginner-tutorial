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

/*by default one combined sga will be exported
* as a single entry point to start all sagas at once*/

export default function* rootSaga () {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
/** The rootSaga yields an array with the results of calling two sagas.
 * This means the two resulting Generators will be started in parallel.
 * Now we only have to invoke sagaMiddleware on rootSaga in main.js*/