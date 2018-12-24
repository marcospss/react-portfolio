import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import CONSTS from './../../common/consts';

const INITIAL_VALUES = {};

const projects = `${CONSTS.API_URL}/dashboard/projects`;

export function getProjects() {
    const request = axios.get(projects);

    return {
        type: 'PROJECTS_FETCHED',
        payload: request
    };
}

export function showComponent(componentName) {
    return {
        type: 'COMPONENT_SELECTED',
        payload: componentName
    };
}

export function showForm(values, method) {
    if (Object.keys(values).length) {
        values.highlight = (values.highlight === 1) ? "1" : "0";
        values.status = (values.status === 1) ? "1" : "0";
    };
    return [
        initialize('projectForm', values),
        showComponent({
            name: 'projectForm',
            method: method
        })
    ];
}

export function create(values) {
    return submit(values, 'post');
}

export function updateStatus(values) {
    const data = values;
    data.status = (data.status === 1) ? 0 : 1;
    return submit(data, 'put');
}

export function update(values) {
    return submit(values, 'put');
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    // 'Content-Type': 'multipart/form-data; boundary=------------------------021ab64c72420e84'
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    return dispatch => {
        const id = (values.id && method === 'delete') ? `/${values.id }` : '';

        axios[method](`${projects}${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.');
                dispatch(init());
                window.location.href = '#/dashboard/projects';
            })
            .catch(error => {
                toastr.error('Erro', error);
                dispatch(init());
                window.location.href = '#/dashboard/projects';
            });
    };
}

export function init(INITIAL_VALUES) {
    return [
        showComponent('list'),
        getProjects(),
        initialize('projectForm', INITIAL_VALUES)
    ];
}