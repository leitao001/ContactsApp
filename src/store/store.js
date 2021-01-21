import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutableTransform from 'redux-persist-transform-immutable';
import thunk from 'redux-thunk';
import rootReducer from './rootReucer';
import rootSaga from './rootSaga';
import Reactotron from './ReactotronConfig';
const persistConfig = {
    key: 'root',
    transforms: [immutableTransform()],
    whitelist: ['city'],
    storage: AsyncStorage,
    version: 1,
};
const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools({ realtime: true }) : compose;
//const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const enhancer = __DEV__
    ? composeEnhancers(applyMiddleware(...middlewares), Reactotron.createEnhancer())
    : composeEnhancers(applyMiddleware(...middlewares));
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, enhancer);
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
