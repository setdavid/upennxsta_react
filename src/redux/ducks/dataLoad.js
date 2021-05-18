const DATA_LOADED = "data_loaded";
const DATA_NOT_LOADED = "data_not_loaded";

export const dataLoaded = () => ({
    type: DATA_LOADED,
    payload: {

    }
});

export const dataNotLoaded = () => ({
    type: DATA_NOT_LOADED,
    payload: {

    }
});

const initialState = {
    dataLoaded: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADED:
            return { ...state, dataLoaded: true };
        case DATA_NOT_LOADED:
            return { ...state, dataLoaded: false };
        default:
            return state;
    };
};

export default reducer;