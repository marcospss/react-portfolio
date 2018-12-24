import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import CONSTS from './../common/consts';

const handleError = (error) => {
    if (error.response) {
        toastr.error('Erro', error.response.data.error);
    } else {
        toastr.error('Erro', error.message);
    }
}

function submit(values, url) {

    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ]);
                toastr.success('Sucesso', 'Login efetuado com sucesso!');
                window.location.href = '#/dashboard';
            })
            .catch(handleError);
    }
}

export function login(values) {
    return submit(values, `${CONSTS.API_URL}/login`);
}

export function signup(values) {
    return submit(values, `${CONSTS.API_URL}/signup`);
}

export function logout() {
    toastr.success('Sucesso', 'Logout efetuado com sucesso!');
    return { type: 'TOKEN_VALIDATED', payload: false };
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${CONSTS.API_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid });
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }));
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false });
        }
    };
}