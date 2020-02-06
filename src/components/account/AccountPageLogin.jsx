// react
import React, {useState} from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';
import { Check9x7Svg } from '../../svg';

// data stubs
import theme from '../../data/theme';
import Services from "../../Services";
import Funcs from "../../Funcs";

function login(userName, password, setLoginLoading) {
    console.log(userName, password, setLoginLoading)
}

export default class AccountPageLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginLoading: true,
            registerLoading: false,
            breadcrumb: [
                { title: 'Home', url: '' },
                { title: 'My Account', url: '' },
            ],
            loginEmail: "",
            loginPassword: "",
        };
        this.funcs = new Funcs(this);
        this.services = new Services(this);
    }

    handleLogin = () => {
        login()
    };

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Login — ${theme.name}`}</title>
                </Helmet>

                <PageHeader header="My Account" breadcrumb={this.state.breadcrumb}/>

                <div className="block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="card flex-grow-1 mb-md-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Login</h3>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="login-email">Email address</label>
                                                <input
                                                    id="loginEmail"
                                                    name="loginEmail"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    value={this.state.loginEmail}
                                                    onChange={this.funcs.handleChange}
                                                    onBlur={this.funcs.handleBlur}
                                                    onFocus={this.funcs.handleFocus}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="login-password">Password</label>
                                                <input
                                                    id="login-password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    value={this.state.loginPassword}
                                                    onChange={this.funcs.handleChange}
                                                    onBlur={this.funcs.handleBlur}
                                                    onFocus={this.funcs.handleFocus}
                                                />
                                                <small className="form-text text-muted">
                                                    <Link to="/">Forgotten Password</Link>
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                <span className="form-check-input input-check">
                                                    <span className="input-check__body">
                                                        <input
                                                            id="login-remember"
                                                            type="checkbox"
                                                            className="input-check__input"
                                                        />
                                                        <span className="input-check__box"/>
                                                        <Check9x7Svg className="input-check__icon"/>
                                                    </span>
                                                </span>
                                                    <label className="form-check-label" htmlFor="login-remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary mt-2 mt-md-3 mt-lg-4" onClick={this.fetchData} disabled={this.state.loginLoading}>
                                                {this.state.loginLoading && (
                                                    <i
                                                        className="fa fa-refresh fa-spin"
                                                        style={{ marginRight: "5px" }}
                                                    />
                                                )}
                                                {this.state.loginLoading && <span>Loading Data from Server</span>}
                                                {!this.state.loginLoading && <span>Fetch Data from Server</span>}
                                            </button>
                                            {/*<button type="submit" className="btn btn-primary mt-2 mt-md-3 mt-lg-4">*/}
                                            {/*    Login*/}
                                            {/*</button>*/}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex mt-4 mt-md-0">
                                <div className="card flex-grow-1 mb-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Register</h3>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="register-email">Email address</label>
                                                <input
                                                    id="register-email"
                                                    name="register-email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    onChange={this.funcs.handleChange}
                                                    onBlur={this.funcs.handleBlur}
                                                    onFocus={this.funcs.handleFocus}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="register-password">Password</label>
                                                <input
                                                    id="register-password"
                                                    name="register-password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={this.funcs.handleChange}
                                                    onBlur={this.funcs.handleBlur}
                                                    onFocus={this.funcs.handleFocus}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="register-confirm">Repeat Password</label>
                                                <input
                                                    id="register-confirm"
                                                    name="register-confirm"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={this.funcs.handleChange}
                                                    onBlur={this.funcs.handleBlur}
                                                    onFocus={this.funcs.handleFocus}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-2 mt-md-3 mt-lg-4">
                                                Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

