import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from './store/index'

import 'bootstrap/dist/css/bootstrap.css';

import TableComponent from "./components/TableComponent/TableComponent.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <TableComponent/>
    </Provider>
)