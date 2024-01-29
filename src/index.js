import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
