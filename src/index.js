import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from 'react-redux';
import { store } from './store/store';

import './asserts/styles/styles.css'

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
    </Provider>  
);