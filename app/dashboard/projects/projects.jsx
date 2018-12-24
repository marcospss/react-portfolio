import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from './projectsList';
import Form from './projectForm';
import { showComponent, create, update } from './projectsActions';

class Projects extends Component {

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

const mapStateToProps = state => ({ component: state.projects.component });
const mapDispatchToProps = dispatch => bindActionCreators({
    showComponent, create, update
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Projects);