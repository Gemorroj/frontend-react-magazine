import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/about">
                        About todo
                    </Route>
                    <Route path="/">
                        Home todo
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
