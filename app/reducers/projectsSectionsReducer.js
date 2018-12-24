const INITIAL_STATE = {
    projects: [{}],
    sections: [{}]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'PROJECTS_SECTIONS_FETCHED':
            return {...state, projects: action.payload.data };
            break;

        case 'SECTIONS_FETCHED':
            return {...state, sections: action.payload.data };
            break;
        default:
            return state;
    }
};