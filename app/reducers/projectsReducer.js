const INITIAL_STATE = {
    projects: [{}]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PROJECTS_FETCHED':
            return {...state, projects: action.payload.data };
        default:
            return state;
    }
};