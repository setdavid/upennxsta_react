const TRANSPARENTIZE_NAVBAR = "transparentize_navbar";
const FILL_NAVBAR = "fill_navbar";

export const transparentizeNavbar = () => ({
    type: TRANSPARENTIZE_NAVBAR,
    payload: {

    }
});

export const fillNavbar = () => ({
    type: FILL_NAVBAR,
    payload: {

    }
});

const initialState = {
    transparent: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSPARENTIZE_NAVBAR:
            return { ...state, transparent: true };
        case FILL_NAVBAR:
            return { ...state, transparent: false };
        default:
            return state;
    };
};

export default reducer;