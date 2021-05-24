export const pathsURLS = ["/", "/about-us", "/what-weve-done", "/recent-updates"];

export const setPathIn = (path, isPathIn) => ({
    type: path,
    payload: {
        pathIn: isPathIn
    }
});

const initialState = {
    [pathsURLS[0]]: false,
    [pathsURLS[1]]: false,
    [pathsURLS[2]]: false,
    [pathsURLS[3]]: false
};

const reducer = (state = initialState, action) => {
    if (action != null && (action.type === pathsURLS[0] ||
        action.type === pathsURLS[1] ||
        action.type === pathsURLS[2] ||
        action.type === pathsURLS[3])) {
        return { ...state, [action.type]: action.payload.pathIn };
    } else {
        return state;
    }

    // switch (action.type) {
    //     case "/":
    //         return { ...state, [action.type]: action.payload.pathIn };
    //     case "/about-us":
    //         return { ...state, aboutUsIn: false };
    //     case "/what-weve-done":
    //         return { ...state, [action.type]: action.payload.pathIn };
    //     case "/recent-updates":
    //         return { ...state, aboutUsIn: false };
    //     default:
    //         return state;
    // };
};

export default reducer;