import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Footer from './footer';
import { getSections } from './../sections/sectionsActions';

class Sidebar extends Component {

    componentDidMount() {
		this.props.getSections();
    }

    renderSections() {
        const { sections } = this.props.sections;
        
        return sections.map((section) => (
            <li key={`${section.id}`}>
                <article>
                    <header>
                        <h3><a href={`#sections/${section.slug}`}>{`${section.title}`}</a></h3>
                        {/* <time className="published" >October 20, 2015</time> */}
                    </header>
                    <a href={`#sections/${section.slug}`} className="image"><img src="./assets/images/pic10.jpg" alt={`${section.title}`} /></a>
                </article>
            </li>
        ));
    }

    render() {
        return (
            <section id="sidebar">
        <section id="intro">
            <a href="#" className="logo"><img src="./assets/images/logo.jpg" alt="Future Imperfect" /></a>
            <header>
                <h2>Future Imperfect</h2>
                <p>Another fine responsive site template by <a href="http://html5up.net" target="_blank">HTML5 UP</a></p>
            </header>
        </section>

        {/* <section>
            <article className="mini-post">
                <header>
                    <h3><a href="#">Vitae sed condimentum</a></h3>
                    <time className="published" >October 20, 2015</time>
                    <a href="#" className="author"><img src="./assets/images/avatar.jpg" alt="" /></a>
                </header>
                <a href="#" className="image"><img src="./assets/images/pic04.jpg" alt="" /></a>
            </article>
        </section> */}
        
        <section className="blurb">
            <h2>Seções</h2>
            <ul className="posts">
            { this.renderSections() }
            </ul>
        </section>

        <section className="blurb">
            <h2>Sobre</h2>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
            <ul className="actions">
                <li><a href="/#about" className="button">Saiba mais</a></li>
            </ul>
        </section>
        <Footer />
    </section>
        );
	}
}

const mapStateToProps = state => ({sections: state.sections});
const mapDispatchToProps = dispatch => bindActionCreators({getSections}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);