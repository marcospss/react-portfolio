import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Text from './../common_template/form/inputText';
import TextArea from './../common_template/form/inputTextArea';
import { required } from './../common_template/form/validators';
class SectionForm extends Component {

    render() {
        const { action, formName, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Seções</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={formName}>
                        <div className="row uniform">
                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="12u"
                                label="Titulo"
                                id="title" 
                                name="title"
                                type="text" 
                                placeholder="Digite o titulo" 
                                maxlength="70"
                            />

                            <Field 
                                component={Text}
                                validate={required}
                                colsGrid="12u"
                                label="URL Amigável"
                                id="slug" 
                                name="slug"
                                type="text" 
                                placeholder="Digite a url amigável" 
                                maxlength="70"
                            />

                            <Field 
                                component={TextArea}
                                validate={required}
                                colsGrid="12u"
                                label="Palavras Chaves"
                                id="meta_keywords" 
                                name="meta_keywords"
                                placeholder="Digite as palavras chave" 
                                maxlength="255"
                            />

                            <Field 
                                component={TextArea}
                                validate={required}
                                colsGrid="12u"
                                label="Palavras Chaves"
                                id="meta_description" 
                                name="meta_description"
                                placeholder="Digite uma breve explicação" 
                                maxlength="200"
                            />

                            <Field 
                                component={TextArea}
                                validate={required}
                                colsGrid="12u"
                                label="Palavras Chaves"
                                id="description" 
                                name="description"
                                placeholder="Digite a descrição" 
                                maxlength="999"
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

SectionForm  = reduxForm({form: 'sectionForm', destroyOnUnmount: false})(SectionForm);
export default SectionForm;