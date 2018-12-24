import axios from 'axios';

import CONSTS from './../../common/consts';

export function getProject(slug) {
    const request = axios.get(`${CONSTS.API_URL}/project/${slug}`);

    return {
        type: 'PROJECT_FETCHED',
        payload: request
    }
}