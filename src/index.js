import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from './store/index'

import 'bootstrap/dist/css/bootstrap.css';

import TableComponent from "./components/TablePage/TableComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<TableComponent/>}/>
                <Route path="register"/>
            </Route>
        </Routes>
        </BrowserRouter>
    </Provider>
)