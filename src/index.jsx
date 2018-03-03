import React from 'react';
import ReactDOM from "react-dom";
import App from "containers/app";
import {configStore} from 'configureStore';

const store = configStore();
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('react-app')
);