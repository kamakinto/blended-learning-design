import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from 'react-redux';
import store, {history} from '../store';



import App from "./components/App";
import Home from "./pages/Home";





const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>,


    app);
