import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './../common_template/header';
import Footer from './../common_template/footer';
import CONSTS from './../../common/consts';
import { getProjectsSections } from './sectionsActions';

class Sections extends Component {

	componentDidMount() {
		this.props.getProjectsSections(this.props.params.section);
    }
    
    renderProjects() {
        const projects = this.props.projectsSections.projects;
        return projects.map(project => (
            <article className="post" key={`${project.id}`}>
                <header>
                    <div className="title">
                        <h2><a href={`#project/${project.slug}`}>{`${project.title}`}</a></h2>
                    </div>
                    <div className="meta">
                        <div className="author"><span className="name">{`${project.category}`}</span><img src="./assets/images/avatar.jpg" alt={`${project.category}`} /></div>
                    </div>
                </header>
                <blockquote>{`${project.meta_description}`}</blockquote>
                <a href={`#project/${project.slug}`} className="image featured"><img src={`${CONSTS.IMAGE_PATH + project.folder_files}/${project.cover}`} alt={`${project.title}`} /></a>
                <footer>
                    <ul className="actions">
                        <li><a href={`#project/${project.slug}`} className="button big">Continue lendo</a></li>
                    </ul>
                </footer>
            </article>
        ));
    }

    render() {
		
		return (
            <div id='wrapper' className="single">
        <Header />
        <main role="main" id="main">
            <article className="post">
                { this.renderProjects() }
            </article>
        </main>
        <Footer />
    </div>   
		);
	}
}

const mapStateToProps = state => ({projectsSections: state.projectsSections});
const mapDispatchToProps = dispatch => bindActionCreators({getProjectsSections}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sections);