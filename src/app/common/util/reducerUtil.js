export const createReducer = (initialState, fnMap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type];

        // equilibrium to switch statement
        return handler ? handler(state, payload) : state;
    }
}