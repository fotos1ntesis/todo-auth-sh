import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/authentication-sh">
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
)
