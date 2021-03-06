export class Movie {
    constructor(
        public Title: string,
        public Type: string,
        public Year: string,
        public Poster: string,
        public imdbID: string,
        public Actors?: string,
        public Awards?: string,
        public BoxOffice?: string,
        public Country?: string,
        public Dvd?: string,
        public Director?: string,
        public Genre?: string,
        public Language?: string,
        public Metascore?: string,
        public Plot?: string,
        public Production?: string,
        public Rated?: string,
        public Ratings?: Array<Object>,
        public Released?: string,
        public Response?: string,
        public Runtime?: string,
        public Website?: string,
        public Writer?: string,
        public imdbRating?: string,
        public imdbVotes?: string,
    ) { }
}
