import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CONSTS from './../../common/consts';
import { getProjects } from './../../site/home/homeActions';
class Dashboard extends Component {

    componentWillMount() {
		this.props.getProjects();
    }
    
    renderProjects() {
        const projects = this.props.home.projects;
        return projects.map(project => (
            <tr key={`${project.id}`}>
                <td><h2>{`${project.order_display}`}</h2></td>
				<td>{`${project.title}`}</td>
                <td><h2>{`${project.category}`}</h2></td>
                <td><img className="cover-project" src={`${CONSTS.IMAGE_PATH + project.folder_files}/thumb-${project.cover}`} alt="" /></td>
            </tr>
        ));
    }

    render() {
        return (
            <main role="main" id="main">
                <section>
                    <h3>Ordem de Exibição na Home</h3>
                    <div className="table-wrapper">
                    <table className="projects">
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Projeto</th>
                                <th>Categoria</th>
                                <th>Capa</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderProjects() }
                        </tbody>
                    </table>
                </div>
                </section>
            </main>
        );
    }
}


const mapStateToProps = state => ({home: state.home});
const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);