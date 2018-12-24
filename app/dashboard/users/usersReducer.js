const INITIAL_STATE = {
    users: [{}],
    component: 'list'
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'USERS_FETCHED':
            return {...state, users: action.payload.data };

        case 'COMPONENT_SELECTED':
            return {...state, component: action.payload };

        default:
            return state;
    };

};