import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './../dashboard/dashboard';
import Login from './../login/login';
import { validateToken } from './../auth/authActions';

class AuthOrDashboard extends Component {

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth;
        if(user && validToken) {
            axios.defaults.headers.common['x-access-token'] = user.token;
            return <Dashboard>{this.props.children}</Dashboard>;
        } else if(!user && !validToken) {
            return <Login />;
        } else {
            return false;
        }

        
    }

}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrDashboard);