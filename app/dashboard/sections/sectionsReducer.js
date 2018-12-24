const INITIAL_STATE = {
    sections: [{}],
    component: 'list'
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SECTIONS_FETCHED':
            return {...state, sections: action.payload.data };

        case 'COMPONENT_SELECTED':
            return {...state, component: action.payload };

        default:
            return state;
    };

};