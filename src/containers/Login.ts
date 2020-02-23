import { connect } from 'react-redux';
import LoginScreen from '../components/LoginScreen';

import { Login as LoginAction } from '../core-module/store';
import { ApplicationState } from '../core-module/store/types';

const Login = (connect((state: ApplicationState) => (
    { 
        data: state.jsonData,
        logedinUsername: state.user.name,
        isLoading: state.isLoading,
    }),
    {
        loginAction: LoginAction
    })
)(LoginScreen)

export default Login;