import { AppRegistry } from "react-native";
import React from "react";
import Routes from "./src/components/Routes";
import { name as appName } from "./app.json";
import loginReducer from "./src/redux/loginReducer";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";

import { Provider } from "react-redux";

const rootReducer = combineReducers({
    login: loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const ReactRedux = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReactRedux);
