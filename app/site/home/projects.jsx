import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CONSTS from './../../common/consts';
import { getProjects } from './homeActions';

class Projects extends Component {

	componentDidMount() {
		this.props.getProjects();
    }
    
    renderProjects() {
        const projects = this.props.home.projects;
        return projects.map(project => (
            <article className="post" key={`${project.id}`}>
                <header>
                    <div className="title">
                        <h2><a href={`#project/${project.slug}`}>{`${project.title}`}</a></h2>
                    </div>
                    <div className="meta">
                        <a href={`#sections/${project.categorySlug}`} className="author"><span className="name">{`${project.category}`}</span><img src="./assets/images/avatar.jpg" alt={`${project.category}`} /></a>
                    </div>
                </header>
                <a href="#" className="image featured"><img src={`${CONSTS.IMAGE_PATH + project.folder_files}/${project.cover}`} alt="" /></a>
                <p>{`${project.meta_description}`}</p>
                <footer>
                    <ul className="actions">
                        <li><a href={`#project/${project.slug}`} className="button big">Continue lendo</a></li>
                    </ul>
                    <ul className="stats">
                        <li><a href={`#sections/${project.categorySlug}`}>{`${project.category}`}</a></li>
                    </ul>
                </footer>
            </article>
        ));
    }

    render() {
		
		return (
            <div>
                { this.renderProjects() }                
            </div>    
		);
	}
}

const mapStateToProps = state => ({home: state.home});
const mapDispatchToProps = dispatch => bindActionCreators({getProjects}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Projects);