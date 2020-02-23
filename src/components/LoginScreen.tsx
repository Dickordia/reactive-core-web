import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../components/styles/App.css';
import logo from '../assets/logo.svg';
import AppChart from './AppChart';

const useStyles = makeStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: '#c9b16b',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#dfddd5',
        borderRadius: 12,
        padding: 30
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#00498e',
    },
}));


export default function LoginScreen(props: any) {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogedIn, setIsLogedIn] = useState(false)

    if (isLogedIn) {
        return (
            <AppChart />
        )
    }

    
    const onChangeTextLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event;
        setUsername(value);
    };

    const onChangeTextPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event;
        setPassword(value);
    };

    const onLoginPress = () => {
        props.loginAction(username, password, (success: boolean) => {
            if (success) {
                setIsLogedIn(true)
            } else {
                alert('Login failed. Please try again.')
            }
        });
    };

    if (props.isLoading) {
        return (
            <div className="Indicator">
                <CircularProgress />
            </div>
        )
    } 

    const isCredential = username.trim() !== '' && password.trim() !== ''

    const RenderLogedinUsername = () => {
        if (props.logedinUsername.length) {
            return (
                <p>{props.logedinUsername}</p>
            )
        }

        return null;
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <Container component="main" maxWidth="xs">
            <div className={classes.form}>
                <TextField
                    onChange={onChangeTextLogin}
                    defaultValue={username}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                />
                <TextField
                    onChange={onChangeTextPassword}
                    defaultValue={password}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    disabled={!isCredential}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={ onLoginPress}
                > LOGIN </Button>
                <RenderLogedinUsername />
            </div>
            </Container>
            </header>
    );
}
