import React from "react";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import AddComponent from "./src/components/AddComponent";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allRedecers from "./src/reducers";
import TaskManagerComponent from "./src/components/TaskManagerComponent";

let store = createStore(allRedecers);
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent />
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
