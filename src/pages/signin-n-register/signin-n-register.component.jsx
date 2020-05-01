import React from 'react';

import  SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-n-register.style.scss';

const SingiAndRegister= () => (
    <div className="signin-n-register">
        <SignIn />
        <SignUp />
    </div>
)

export default SingiAndRegister;