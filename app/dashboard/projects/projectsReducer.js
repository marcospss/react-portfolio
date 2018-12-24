const INITIAL_STATE = {
    projects: [{}],
    component: 'list'
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'PROJECTS_FETCHED':
            return {...state, projects: action.payload.data };

        case 'COMPONENT_SELECTED':
            return {...state, component: action.payload };

        default:
            return state;
    };

};