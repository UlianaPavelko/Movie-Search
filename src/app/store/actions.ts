import { Action } from '@ngrx/store';
import { Movie } from './movie';


export enum MovieActionTypes {
    ADD_MOVIE = 'ADD_MOVIE',
    REMOVE_MOVIE = 'REMOVE_MOVIE'
}

export class AddMovie implements Action {
    readonly type = MovieActionTypes.ADD_MOVIE;
    constructor(public payload: Movie) { }
}

export class RemoveMovie implements Action {
    readonly type = MovieActionTypes.REMOVE_MOVIE;
    constructor() { }
}

export type MovieActions = AddMovie | RemoveMovie;
