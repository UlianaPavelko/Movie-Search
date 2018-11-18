import { Action } from '@ngrx/store';
import { Movie } from '../movie-search/movie';


export enum MovieActionTypes {
    ADD_MOVIE = 'ADD_MOVIE',
    REMOVE_MOVIES = 'REMOVE_MOVIES'
}

export class AddMovie implements Action {
    readonly type = MovieActionTypes.ADD_MOVIE;
    constructor(public payload: Movie) { }
}

export class RemoveMovies implements Action {
    readonly type = MovieActionTypes.REMOVE_MOVIES;
    constructor() { }
}

export type MovieActions = AddMovie | RemoveMovies;
