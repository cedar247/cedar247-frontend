import React from "react";
// import SubmitButton from "./SubmitButton";
// import UserStore from "../stores/UserStore";
import "../../App.css";
// import background from '../images/background.jpg'
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
// import {warningToast} from "./common/Toasts";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { ButtonBase } from "@mui/material";
// import ButtonAppBar from "./Appbar1";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false,
            open: true
        };
    }

    resetForm() {
        this.setState({
            email: "",
            password: "",
            buttonDisabled: false,
            showPassword: false
        });
    }


    handleClose() {
        this.setState({
            open: false
        });
    };

    handleSubmit() {

        alert(`${this.state.email} , ${this.state.password}`);
    };

    handleOpen() {

        this.setState({
            open: true
        });
        console.log(this.state.open);

    };

    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleMouseDownPassword(event) {
        event.preventDefault();
    };

    setInputValue(property, val) {
        // val = val.trim();
        // console.log();
        // console.log(val);
        if (val.length > 50) {
            return;
        }
        this.setState({
            [property]: val,
        });
    }

    // async doLogin() {
    //     if (!this.state.email) {
    //         warningToast("Please enter email");
    //         return;
    //     }
    //     if (!this.state.password) {
    //         warningToast("Please enter password");
    //         return;
    //     }

    //     this.setState({
    //         buttonDisabled: true,
    //     });

    //     try {
    //         let res = await fetch("/auth/login", {
    //             method: "post",
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 email: this.state.email,
    //                 password: this.state.password,
    //             }),
    //             credentials: "include",
    //         });

    //         let result = await res.json();

    //         if (result && result.success) {
    //             console.log("SUCCESSFULLY RECEIVED THE RESULT");
    //             UserStore.isLoggedIn = true;
    //             UserStore.email = result.email;
    //             UserStore.role = result.role;
    //             window.location.href = "/";
    //         } else if (result && result.success === false) {
    //             console.log("NOT SUCCESSFULLY RECEIVED THE RESULT");
    //             this.handleOpen();
    //             this.resetForm();

    //         }
    //     } catch (e) {
    //         console.log(e);
    //         this.resetForm();
    //         // this.handleOpen();
    //     }
    // }

    render() {
        // document.body.style.backgroundImage = `url(${background})`;
        return (
            <>
            {/* <ButtonAppBar/> */}
                <div className="container text-center bg-white bg-opacity-75 p-3" style={{
                    width: "340px", height: "320px", marginTop: "10rem", padding: '25px'

                    , marginBottom: "6rem" ,boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                    borderRadius: '10px'
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    ><Avatar sx={{ m: 1, bgcolor: 'primary.main', alignItems: 'center' }}>
                            <LockOutlinedIcon />
                        </Avatar></Box>

                    <h2 style={{ margin: "auto", textAlign: "center" }}>Sign in</h2>
                    <br></br>
                    <br></br>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Email*</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={'text'}
                            value={this.state.email ? this.state.email : ""}
                            onChange={(val) => this.setInputValue("email", val.target.value)}
                            label="Email*"
                            startAdornment={<InputAdornment position="start"> <MailOutlineIcon
                                sx={{ color: 'action.active', mr: 1, my: 0.5 }} /></InputAdornment>}
                        />

                    </FormControl>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password ? this.state.password : ""}
                            onChange={(val) => this.setInputValue("password", val.target.value)}
                            endAdornment={
                                <InputAdornment position="end">

                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => this.handleClickShowPassword()}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password*"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick = {()=>this.handleSubmit()}
                    >
                        Sign In
                    </Button>
                </div>

                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="#">
                        Cedar247
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </>

        );
    }
}

export default LoginForm;