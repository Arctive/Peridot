import React from 'react'
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal/>
        <header>
            <GreetingContainer />
        </header>
        {/* <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} /> */}
    </div>
);

export default App;