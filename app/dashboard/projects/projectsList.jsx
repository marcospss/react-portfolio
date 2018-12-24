import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CONSTS from './../../common/consts';
import { getProjects, updateStatus, showForm, remove } from './projectsActions';

class ProjectsList extends Component {

	componentWillMount() {
		this.props.getProjects();
	}

	renderRows() {
        const projects = this.props.projects.projects || [];
		return projects.map(project => (
			<tr key={`${project.id}`}>
				<td><img className="cover-project" src={`${CONSTS.IMAGE_PATH + project.folder_files}/${project.cover}`} alt="" /></td>
				<td>{`${project.title}`}</td>
				<td>{`${project.category}`}</td>
				<td><span className={`icon ${(project.highlight) ? 'fa-check-square': 'fa-times' }`} title={`Destaque na home: ${(project.highlight) ? 'Ativo': 'Inativo' }`}></span></td>
				<td>
					<ul className="actions">
						<li><button onClick={()=> this.props.updateStatus(project)} title={`Status do projeto: ${(project.status) ? 'Ativo': 'Inativo' }`} className="button small"><span className={`icon ${(project.status) ? 'fa-check': 'fa-times-circle' }`}></span></button></li>
						<li><button onClick={()=> this.props.showForm(project, 'update')}  title={`Editar: ${project.title}`} className="button small"><span className="icon fa-edit"></span></button></li>
						<li><button onClick={()=> this.props.remove(project)} title={`Remover o projeto: ${project.title}`} className="button small"><span className="icon fa-trash"></span></button></li>
					</ul>
				</td>
			</tr>
		));
	}

	render() {
		const title = 'Projetos';
		return (
			<main role="main" id="main">
				<section>
					<div className="row">
						<div className="2u 12u(small)">
							<h2>{title}</h2>
						</div>
						<div className="6u 12u(small)">
							<ul className="actions vertical">
								<li>
									<button onClick={()=> this.props.showForm({}, 'create')}  title="Adicionar novo Projeto" className="button">Adicionar</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="table-wrapper">
						<table className="projects">
							<thead>
								<tr>
									<th>Capa</th>
									<th>Projeto</th>
									<th>Seção</th>
									<th>Home</th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								{ this.renderRows() } 
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="3"></td>
								</tr>
							</tfoot>
						</table>
					</div>
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects, updateStatus, showForm, remove
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);