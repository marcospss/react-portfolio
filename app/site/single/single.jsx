import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../common_template/header';
import Footer from './../common_template/footer';
import CONSTS from './../../common/consts';
import { getProject } from './../../site/single/singleActions';

class Single extends Component {

	componentDidMount() {
		this.props.getProject(this.props.params.page);
    }

    createMarkup(contentHTML) { 
        return {__html: contentHTML }; 
    }

    renderGallery(gallery, folder_files) {
        return gallery.map((image, ) => (
            <div className="4u" key={`${image}`}><span className="image fit"><img src={`${CONSTS.IMAGE_PATH + folder_files}/thumb-${image}`} alt="" /></span></div>
        ));
    }

    render() {
        const project = this.props.single.project[0],
            gallery = (project.gallery) ? project.gallery.split(',') : [];
        return (
            <div id='wrapper' className="single">
                <Header />
                <main role="main" id="main">
                    <article className="post">
                        <header>
                            <div className="title">
                                <h2>{`${project.title}`}</h2>
                                <blockquote>{`${project.meta_description}`}</blockquote>
                            </div>
                            <div className="meta">
                                <a href={`#sections/${project.categorySlug}`} className="author"><span className="name">{`${project.category}`}</span><img src="./assets/images/avatar.jpg" alt="" /></a>
                            </div>
                        </header>
                        <figure className="image featured"><img src={`${CONSTS.IMAGE_PATH + project.folder_files}/${project.cover}`} alt={`${project.title}`} /></figure>
                        <div dangerouslySetInnerHTML={ this.createMarkup(project.description) } />
                        <div className="box alt">
                            <div className="row uniform">{ this.renderGallery(gallery, project.folder_files) }</div>
                        </div>
                    </article>
                </main>
                <Footer />
            </div> 
        );
	}
}

const mapStateToProps = state => ({single: state.single});
const mapDispatchToProps = dispatch => bindActionCreators({getProject}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Single);