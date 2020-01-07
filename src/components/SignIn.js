import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from "../services/AuthService";


export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        AuthService.login(this.state).then(res => {
            console.info(res);
        }).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.useStyles.paper}>
                    <Avatar className={this.useStyles.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={this.useStyles.form} onSubmit={this.handleSubmit}>
                        <TextField
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            type="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.useStyles.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}
