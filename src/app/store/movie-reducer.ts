import { MovieActionTypes, MovieActions } from './actions';

export let initialState = [];

export function movieReducer(state = initialState, action: MovieActions) {
    switch (action.type) {
        case MovieActionTypes.ADD_MOVIE:
            return [...state, action.payload];
        case MovieActionTypes.REMOVE_MOVIES:
            return state = undefined;
        default:
            return state;
    }
}
