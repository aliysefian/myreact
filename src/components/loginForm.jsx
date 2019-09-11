import React, {Component} from "react";
import Input from "./comman/input";
import Joi from "joi-browser";
import Form from "./comman/Form";
import {login} from '../components/services/authService'

class LoginForm extends Form {
    state = {
        data: {username: "", password: ""},
        errors: {username: "", password: ""}
    };

    componentDidMount() {
        const errors = {username: "", password: ""};
        this.setState({errors: errors})
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    doSubmit = async () => {
        try {
            const {data} = this.state;
            const {data: val} = await login(data.username, data.password);
            localStorage.setItem("token",val["token"]);
            this.props.history.push('/');
            console.log(val);

        } catch (e) {
            if (e.response && e.response.status === 400) {
                console.log(this.state.errors);

                const errors = this.state.errors;
                errors.username = e.response.data;
                const keyss=Object.keys(errors.username);
                console.log("keyss",keyss);
                for(let item of keyss){
                    errors.username=errors.username[item];
                    console.log(errors.username);
                }
                this.setState({errors});

                console.log(e.response.data)

            }
        }

    };

    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
