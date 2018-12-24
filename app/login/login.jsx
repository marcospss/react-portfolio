import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Messages from './../common/messages/messages';
import { login, signup } from './../auth/authActions';
import Text from './../dashboard/common_template/form/inputText';
import { required } from './../dashboard/common_template/form/validators';
class Login extends Component {

    onSubmit(values) {
        const { login } = this.props;
        login(values);
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div id='wrapper' className="login">
                <main role="main" id="main">
                <section className="post">
                    <h3>Login</h3>
                    <form method="post" onSubmit={handleSubmit(values => this.onSubmit(values))}>
                        <div className="row uniform">
                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="6u 12u(xsmall)"
                                label="E-mail"
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="Digite seu e-mail" 
                                maxlength="50"
                            />
                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="6u 12u(xsmall)"
                                label="Senha"
                                id="password" 
                                name="password"
                                type="password" 
                                placeholder="Digite sua senha" 
                                maxlength="10"
                            />
                            <div className="12u">
                                <ul className="actions">
                                    <li><input type="submit" value="Entrar" disabled={pristine || submitting} /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
                </main>
                <Messages />
            </div>
        )
    }
}

Login = reduxForm({ form: 'loginForm' })(Login);
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Login);