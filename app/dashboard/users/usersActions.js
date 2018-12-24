import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import CONSTS from './../../common/consts';

const INITIAL_VALUES = {};

const users = `${CONSTS.API_URL}/dashboard/users`;

export function getUsers() {
    const request = axios.get(users);

    return {
        type: 'USERS_FETCHED',
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
        values.status = (values.status === 1) ? "1" : "0";
    };
    return [
        initialize('userForm', values),
        showComponent({
            name: 'userForm',
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
    return dispatch => {
        const id = (values.id && method === 'delete') ? `/${values.id }` : '';

        axios[method](`${users}${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.');
                dispatch(init());
                window.location.href = '#/dashboard/users';
            })
            .catch(error => {
                toastr.error('Erro', error);
            });
    };
}

export function init(INITIAL_VALUES) {
    return [
        showComponent('list'),
        getUsers(),
        initialize('userForm', INITIAL_VALUES)
    ];
}