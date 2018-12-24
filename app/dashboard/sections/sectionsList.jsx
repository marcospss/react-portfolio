import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSections, updateStatus, showForm, remove } from './sectionsActions';

class SectionsList extends Component {

	componentWillMount() {
		this.props.getSections();
	}

	renderRows() {
        const sections = this.props.sections.sections || [];
		return sections.map(section => (
			<tr key={`${section.id}`}>
				<td>{`${section.title}`}</td>
				<td>{`${section.slug}`}</td>
				<td>
					<ul className="actions">
						<li><button onClick={()=> this.props.updateStatus(section)} title={`Status: ${(section.status) ? 'Ativo': 'Inativo' }`} className="button small"><span className={`icon ${(section.status) ? 'fa-check': 'fa-times-circle' }`}></span></button></li>
						<li><button onClick={()=> this.props.showForm(section, 'update')}  title={`Editar: ${section.title}`} className="button small"><span className="icon fa-edit"></span></button></li>
						<li><button onClick={()=> this.props.remove(section)} title={`Remover: ${section.title}`} className="button small"><span className="icon fa-trash"></span></button></li>
					</ul>
				</td>
			</tr>
		));
	}

	render() {
		const title = 'Seções';
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
									<button onClick={()=> this.props.showForm({}, 'create')}  title="Adicionar novo Usuário" className="button">Adicionar</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>Nome</th>
									<th>URL</th>
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
	sections: state.sections
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getSections, updateStatus, showForm, remove
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SectionsList);