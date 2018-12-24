import axios from 'axios';

import CONSTS from './../../common/consts';

export function getProjects() {
    const request = axios.get(`${CONSTS.API_URL}/highlight`);

    return {
        type: 'PROJECTS_FETCHED',
        payload: request
    }
}