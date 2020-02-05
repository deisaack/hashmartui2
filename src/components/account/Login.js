import  React from "react";
import {Helmet} from "react-helmet";
import theme from "../../data/theme";
import PageHeader from "../shared/PageHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import  '../syle.css';
import  axios from 'axios';
import {Link} from "react-router-dom";
import {Check9x7Svg} from "../../svg";
import Services from "../../Services";
import Functions from "../../Funcs";
const requiredFields=["email", "password", "phoneNumber", "name","re_password" ];
function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        password: password.length === 0
    };
}
class LoginRegister  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showLoginForm:false,
            email:"",
            name: "",
            phoneNumber:"",
            password:"",
            re_password:"",
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: "",
            agreeTerm: false,
            alert: "",
            rememberMe: false
        };
        this.services = new Services(this);
        this.funcs = new Functions(this, );
    }

    submitForm = () => {
        let data = {
            "email": this.state.email,
            "password": this.state.password
        };
        this.services.doLogin(data)
    };


    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleRegister=()=>{

    };

    handleLogin=()=>{

    };

    toShowLoginForm=()=>{
        this.setState({
            showLoginForm: false,
        })
    };
    toShowRegForm=()=>{
        this.setState({
            showLoginForm: true,
        })
    };

    //submit the registration form data
    handleRegisterSubmit=()=>{
        let config={

        };

        let data ={
            email:this.state.email,
            name:this.state.name,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
        }
    };

    //validation
    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
    };

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
    };

    render() {
        const breadcrumb = [
            { title: 'Home', url: '' },
            { title: 'My Account', url: '' },
        ];
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <div>
                <Helmet>
                    <span>error={this.state.error}, errorMessage={this.state.errorMessage}</span>
                    {/*<title>{`Login— ${theme.name}`}</title>*/}
                </Helmet>
                <PageHeader header="My Account"  />
                <div className="block">
                    <div className="container">
                        {this.state.alert}
                        <div className="row">
                            {this.state.showLoginForm? (
                                    <div className="col-md-6 d-flex">
                                        <div className="container">
                                            <div className="form-content">
                                                <form id="form-content" className="form-content">
                                                    <h2 className="form-title">Create account</h2>
                                                    <div className="form-group">
                                                        <input type="email" className="form-input" name="email" id="email"
                                                               onChange={(e)=>this.funcs.handleChange}
                                                               placeholder="Your Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-input" name="name"
                                                               onChange={(e)=>this.funcs.handleChange}
                                                               id="name" placeholder="Name"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-input" name="phoneNumber"
                                                               onChange={(e)=>this.handleChange}
                                                               id="phoneNumber" placeholder="Phone Number"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-input" name="password"
                                                               onChange={(e)=>this.handleChange}
                                                               id="password" placeholder="Password"/>
                                                        <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-input" name="re_password"
                                                               onChange={(e)=>this.funcs.handleChange}
                                                               id="re_password" placeholder="Repeat your password"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="checkbox" name="agreeTerm"
                                                               onChange={this.funcs.handleChange}
                                                               onBlur={this.funcs.handleBlur}
                                                               onFocus={this.funcs.handleFocus}
                                                               value={this.state.agreeTerm}
                                                               id="agreeTerm"
                                                               className="agree-term"/>
                                                        <label htmlFor="agreeTerm"
                                                               className="label-agree-term">I
                                                            agree all statements in <a href="#" className="term-service">Terms
                                                                of service</a></label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="button"  name="submit" id="submit" onClick={this.funcs.handleClickSubmit}
                                                               className="form-submit btn btn-primary"
                                                               disabled={isDisabled}
                                                               value="Sign up"/>
                                                    </div>
                                                </form>
                                                <p className="loginhere">
                                                    Have already an account ? <a onClick={this.toShowLoginForm} className="loginhere-link">Login
                                                    here</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ):
                                <div className="col-md-6 d-flex mt-4 mt-md-0">
                                    <div className="container">
                                        <div className="form-content">
                                            <form id="form-content" className="form-content">
                                                <h2 className="form-title">Login</h2>
                                                <div className="form-group">
                                                    <input type="email" className="form-input" name="email" id="email"
                                                           onChange={this.funcs.handleChange}
                                                           onBlur={this.funcs.handleBlur}
                                                           onFocus={this.funcs.handleFocus}
                                                           value={this.state.email}
                                                           placeholder="Your Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-input" name="password"
                                                           onChange={this.funcs.handleChange}
                                                           onBlur={this.funcs.handleBlur}
                                                           onFocus={this.funcs.handleFocus}
                                                           value={this.state.password}
                                                           id="password" placeholder="Password"/>
                                                    <span toggle="#password"
                                                          className="zmdi zmdi-eye field-icon toggle-password"></span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" name="rememberMe" id="rememberMe"
                                                           onChange={this.funcs.handleChange}
                                                           onBlur={this.funcs.handleBlur}
                                                           onFocus={this.funcs.handleFocus}
                                                           value={this.state.rememberMe}
                                                           className="agree-term"/>
                                                    <label htmlFor="rememberMe"
                                                           className="label-agree-term">
                                                        Remember me </label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="button"  name="submit" id="submit"
                                                           className="form-submit btn btn-primary" value="Login"
                                                           onClick={this.funcs.handleClickSubmit}/>
                                                </div>
                                            </form>
                                            <p className="loginhere">
                                                Dont have an account ? <a onClick={this.toShowRegForm} className="loginhere-link">Register
                                                here</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginRegister;
