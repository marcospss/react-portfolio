import axios from 'axios';

import CONSTS from './../../common/consts';

const urlSections = `${CONSTS.API_URL}/sections`;

export function getProjectsSections(slugSection) {
    const request = axios.get(`${urlSections}/${slugSection}`);

    return {
        type: 'PROJECTS_SECTIONS_FETCHED',
        payload: request
    }
}

export function getSections() {
    const request = axios.get(`${urlSections}`);

    return {
        type: 'SECTIONS_FETCHED',
        payload: request
    }
}