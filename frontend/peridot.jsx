import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
// import {signup, login, logout} from './util/session_api_util';
//end tetsting

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    
    //begin testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    //end testing

    ReactDOM.render(<Root store={store} />, root);
})