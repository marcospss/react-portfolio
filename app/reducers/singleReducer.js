const INITIAL_STATE = {
    project: [{}]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PROJECT_FETCHED':
            return {...state, project: action.payload.data };
        default:
            return state;
    }
};