import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(...middleware),
));
const persistor = persistStore(store);

export { store, persistor };
