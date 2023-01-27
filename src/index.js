import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, {persistor} from './store/index'

import 'bootstrap/dist/css/bootstrap.css';

import TableComponent from "./components/TablePage/TableComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterPage/RegisterForm";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<TableComponent/>}/>
                <Route path="register" element={<RegisterForm/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </PersistGate>
    </Provider>
)