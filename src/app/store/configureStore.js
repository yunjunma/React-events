import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
    const middlewares = [];
    // "..." take the events array and split them out
    const middlewareEnhancer = applyMiddleware(...middlewares);
    
    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    //with below code, testReducer page change the state data with refreshing.
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }
    
    return store;
}