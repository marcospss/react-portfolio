import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Text from './../common_template/form/inputText';
import Radio from './../common_template/form/inputRadioOrCheck';
import { required, email } from './../common_template/form/validators';
class UserForm extends Component {

    render() {
        const { action, formName, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Usuário</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={formName}>
                        <div className="row uniform">
                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="12u"
                                label="Nome"
                                id="name" 
                                name="name"
                                type="text" 
                                placeholder="Digite seu Nome" 
                                maxlength="150"
                            />
                            <Field 
                                component={Text}
                                validate={email}
                                colsGrid="12u"
                                label="E-mail"
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="Digite seu E-mail" 
                                maxlength="50"
                            />
                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="12u"
                                label="Senha"
                                id="password" 
                                name="password"
                                type="password" 
                                placeholder="Digite sua Senha" 
                                maxlength="40"
                            />
                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="status" id="userStatusActive" type="radio" value="1" required />
                                <label htmlFor="userStatusActive">Ativo</label>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="status" id="userStatusInactive" type="radio" value="0" required />
                                <label htmlFor="userStatusInactive">Inativo</label>
                            </div>
                        </div>
                        <hr/>
                        <div className="12u">
                            <ul className="actions">
                                <li><button type="submit" className="button" disabled={pristine || submitting}>{labelAction}</button></li>
                            </ul>
                        </div>
                    </form>
                </section>
            </main>
        );
    }
}

UserForm  = reduxForm({form: 'userForm', destroyOnUnmount: false})(UserForm);
export default UserForm;