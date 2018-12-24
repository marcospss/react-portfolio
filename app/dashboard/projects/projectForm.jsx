import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSections } from './../sections/sectionsActions';
import Select from './../common_template/form/inputSelect';
import Text from './../common_template/form/inputText';
import TextArea from './../common_template/form/inputTextArea';
import { required } from './../common_template/form/validators';
class ProjectForm extends Component {

    componentDidMount() {
		this.props.getSections();
	}

    render() {
        const { action, formName, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        const sections = this.props.sections.sections || [];
        return (
            <main role="main" id="main">
            <h2>Projetos</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={formName} encType="multipart/form-data">
                        <div className="row uniform">
                            <Field
                                name="section_id"
                                label="Seções"
                                component={Select}
                                options={{
                                    1: 'Front End',
                                    2: 'Back End',
                                    3: 'Full Stack'
                                }}
                            />
    
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
                                label="Síntese"
                                id="meta_description" 
                                name="meta_description"
                                placeholder="Digite uma breve síntese" 
                                maxlength="200"
                            />

                            <Field 
                                component={TextArea}
                                validate={required}
                                colsGrid="12u"
                                label="Descrição"
                                id="description" 
                                name="description"
                                placeholder="Digite a descrição" 
                                maxlength="999"
                            />

                            <Field 
                                component={Text}
                                colsGrid="12u"
                                label="Link do Projeto"
                                id="link" 
                                name="link"
                                type="url" 
                                placeholder="Digite a url amigável" 
                                maxlength="150"
                            />

                            <Field 
                                component={Text}
                                colsGrid="12u"
                                label="Pasta das Imagens"
                                id="folder_files" 
                                name="folder_files"
                                type="text" 
                                placeholder="Digite o nome da pasta onde serão salvas as imagens" 
                                maxlength="70"
                            />

                            <Field 
                                component={Text}
                                colsGrid="12u"
                                label="Capa"
                                id="cover" 
                                name="cover"
                                type="file" 
                                placeholder="Capa do Projeto" 
                                maxlength="150"
                            />
                            
                            <Field 
                                component={Text}
                                colsGrid="12u"
                                label="Galeria de imagens"
                                id="gallery_0" 
                                name="gallery"
                                type="file" 
                                placeholder="Galeria do Projeto" 
                                maxlength="150"
                            />

                            <Field 
                                component={Text}
                                colsGrid="12u"
                                label="Galeria de imagens"
                                id="gallery_1" 
                                name="gallery"
                                type="file" 
                                placeholder="Galeria do Projeto" 
                                maxlength="150"
                            />

                            <div className="12u">
                                <h4>Exibição na home</h4>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="highlight" id="highlightActive" type="radio" value="1" required />
                                <label htmlFor="highlightActive">Sim</label>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="highlight" id="highlightInactive" type="radio" value="0" required />
                                <label htmlFor="highlightInactive">Não</label>
                            </div> 

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

ProjectForm  = reduxForm({form: 'projectForm', destroyOnUnmount: false})(ProjectForm);
const mapStateToProps = state => ({
	sections: state.sections
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getSections
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);