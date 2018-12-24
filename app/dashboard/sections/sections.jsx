import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from './sectionsList';
import Form from './sectionForm';
import { showComponent, create, update } from './sectionsActions';

class Sections extends Component {

    componentWillMount() {
        this.props.showComponent('list');
    }
    
    render() {
        const { component } = this.props;

        if(component === 'list') {
            return <List />;
        } else {
            return <Form onSubmit={this.props[component.method]} action={component.method} formName={component.name} />;
        };
        
    }
}

const mapStateToProps = state => ({ component: state.sections.component });
const mapDispatchToProps = dispatch => bindActionCreators({
    showComponent, create, update
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sections);